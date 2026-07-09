 
// Here is my original Arduino code for the 2023 Detector event. 
// During the calibrationo period, I measure the voltages corresponding to the calibration masses. 
// This code extrapolates a measurement based on the line between these points. 
// I used the HX711 library since I referenced the HX711 when constructing my ADC on the breadboard. 

#include "HX711.h" 
#define LOADCELL_DOUT_PIN 13 
#define LOADCELL_SCK_PIN 12 
HX711 scale; 

// for zeroing 
double zeroFactor; 

//led pins  
int red = 8; 
int green = 9; 
int blue = 10; 

#include <LiquidCrystal.h> 
LiquidCrystal lcd(1, 2, 4, 5, 6, 7);  

//--------------------------------------------------------------------------------------------------
//CALIBRATION STUFF
//--------------------------------------------------------------------------------------------------

// LED RANGES - TYPE NUMBERS HERE AND SET THE COLORS AT THE BOTTOM 
// range 1 is lowest, range 3 is highest  
int lowRange1 = 30; 
int highRange1 = 100; 
int lowRange2 = 250; 
int highRange2 = 800; 
int lowRange3 = 700; 
int highRange3 = 1000; 

// MASS RANGES FOR CALIBRATION - TYPE NUMBERS HERE  
double v0 = 0;
double v20 = 50; 
double v50 = 136;  
double v70 = 179; 
double v100 = 240; 
double v200 = 510; 
double v300 = 737; 
double v400 = 1014; 
double v500 = 1360; 
double v600 = 1700; 
double v700 = 2020; 
double v1000 = 2950; 

//--------------------------------------------------------------------------------------------------

//for making the lines with mass ranges 
double voltages[] = {v0, v20, v50, v70, v100, v200, v300, v400, v500, v600, v700, v1000};
double masses [] = {0, 20, 50, 70, 100, 200, 300, 400, 500, 600, 700, 1000};
int arrayLength = sizeof(voltages) / sizeof(voltages[0]); 


void setup() { 
  // library setup
  lcd.begin(16, 2); 
  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN); 

  zeroScale(); 
  
  // LED setup
  pinMode(red, OUTPUT); 
  pinMode(green, OUTPUT); 
  pinMode(blue, OUTPUT); 
}

void loop(void) { 
  //finding mass and voltage using an average of 10 measures per second
  double voltageSum = 0; 
  double massSum = 0; 
  double voltageReading = 0; 

  for (int i = 0; i < 10; i++) {
    voltageReading = findVoltage();
    voltageSum += voltageReading; 
    massSum += findMass(voltageReading); 
    delay(100); 
  } 
  double voltage = voltageSum / 10; 
  double mass = massSum / 10; 

  displayAll(voltage, mass); // does this every second
}

//--------------------------------------------------------------------------------------------------
// OTHER METHODS (zeroing, voltage, mass, display)
//--------------------------------------------------------------------------------------------------

// zeroes the scale, only done during setup 
void zeroScale() {
  zeroFactor = findVoltage(); 
}

//--------------------------------------------------------------------------------------------------

//finds the current voltage 
double findVoltage() {
  double reading = scale.get_units(); 
  double voltage = myMap(reading, -4194304, -8388608, 0, 5000); //based on 22 bit ADC 
  return voltage - zeroFactor; 
}

// linearly maps a digital ADC value to 0-5000 mV, since the event requires a voltage reading
double myMap(double x, long adc_min, long adc_max, long v_min, long v_max) {
  return (x - adc_min) * (v_max - v_min) / (adc_max - adc_min) + v_min;
}

//--------------------------------------------------------------------------------------------------

// find mass reading corresponding to the voltage based on the calibration line  
double findMass(double voltage) { 
  int lineIndex = 0;

  // out of range of calibration line so return 1000 
  if (voltage > voltages[arrayLength - 1]) { 
    lineIndex = arrayLength; 
    return 1000; 
  }

  // find which segment of the calibration line to use
  for (int i = 0; i < arrayLength; i++) {
    if (voltage < voltages[i]) {
      lineIndex = i - 1; 
      break; 
    }
  } 
  
  return getLine(voltages[lineIndex], voltages[lineIndex+1], masses [lineIndex], masses[lineIndex+1], voltage);
}

// calculates a value y (mass) on the line (x1, y1) and (x2, y2) corresponding to an x (voltage) between x1 and x2 
double getLine(double x1, double x2, double y1, double y2, double x) {
  // slope formula
  double y = (x-x1) * (y2-y1)/(x2-x1) + y1; 

  // don't allow mass reading over 1000 
  if (x > voltages[arrayLength - 1]) {
    y = 1000; 
  }
  if (y > 1000) {
    y = 1000; 
  }

  return y; 
}

//--------------------------------------------------------------------------------------------------

//updates all displays (lcd and led)
void displayAll(double voltage, double mass) {
  //display on lcd
  lcd.clear(); 
  lcd.print(mass, 1); 
  lcd.setCursor(8, 0); 
  lcd.print("g"); 
  lcd.setCursor(0, 1); 
  lcd.print(voltage, 1); 
  lcd.setCursor(8, 1);
  lcd.print("mV");  

  //for the leds - ONLY CHANGE THE COLORS 
  if (mass >= lowRange1 && mass <= highRange1) { // RANGE 1 (lowest)
    digitalWrite(red, HIGH); 
    digitalWrite(green, LOW); 
    digitalWrite(blue, LOW); 
  }
  if (mass >= lowRange2 && mass <= highRange2) { // RANGE 2 (middle) 
    digitalWrite(red, LOW); 
    digitalWrite(green, HIGH); 
    digitalWrite(blue, LOW); 
  }
  if (mass >= lowRange3 && mass <= highRange3) { // RANGE 3 (highest) 
    digitalWrite(red, LOW); 
    digitalWrite(green, LOW); 
    digitalWrite(blue, HIGH); 
  }
  if (mass <= lowRange3 && mass >= highRange2) {
    digitalWrite(red, LOW); 
    digitalWrite(blue, HIGH); 
    digitalWrite(green, HIGH); 
  }

  // DO NOT CHANGE THE CODE BELOW 
  if (mass < lowRange1 || 
      mass > highRange1 && mass < lowRange2 ||   
      mass > highRange3) {
    digitalWrite(red, LOW); 
    digitalWrite(green, LOW); 
    digitalWrite(blue, LOW); 
  }
}
