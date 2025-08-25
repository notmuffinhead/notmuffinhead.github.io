import Hero from '../../components/Hero'
import ProjectFooter from "../../components/ProjectFooter"
import styles from '../../styles/ProjectDetail.module.css'
import Image from 'next/image'
import Link from 'next/link'

const arduinoCode = `#include "HX711.h" 
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

//------------------------------------------------------------------------------
//CALIBRATION STUFF
//------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------

//for making the lines with mass ranges 
double voltages[] = {v0, v20, v50, v70, v100, v200, v300, v400, v500, v600, v700, v1000};
double masses [] = {0, 20, 50, 70, 100, 200, 300, 400, 500, 600, 700, 1000};
int arrayLength = sizeof(voltages) / sizeof(voltages[0]); 


void setup() { 
  lcd.begin(16, 2); 
  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN); 

  zeroScale(); 
  
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

  displayAll(voltage, mass); //does this every second
}

//------------------------------------------------------------------------------
// OTHER METHODS (zero, findVoltage, findMass, getLine, displayAll) 
//------------------------------------------------------------------------------

void zeroScale() {
  zeroFactor = findVoltage(); 
}

//find current voltage 
double findVoltage() {
  double reading = scale.get_units(); 
  double voltage = myMap(reading, -4194304, -8388608, 0, 5000); //based on 22 bit adc 
  return voltage - zeroFactor; 
}
double myMap(double x, long in_min, long in_max, long out_min, long out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

//find current mass reading using lines 
double findMass(double voltage) { 
  int lineIndex = 0;

  if (voltage > voltages[arrayLength - 1]) { 
    lineIndex = arrayLength; 
    return 1000; 
  }

  for (int i = 0; i < arrayLength; i++) {
    if (voltage < voltages[i]) {
      lineIndex = i - 1; 
      break; 
    }
  } 
  
  return getLine(voltages[lineIndex], voltages[lineIndex+1], 
    masses [lineIndex], masses[lineIndex+1], voltage);
}

double getLine(double x1, double x2, double y1, double y2, double x) {
  double y = (x-x1) * (y2-y1)/(x2-x1) + y1; 

  if (x > voltages[arrayLength - 1]) {
    y = 1000; 
  }
  if (y > 1000) {
    y = 1000; 
  }

  return y; 
}

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
} `; 

export default function Detector() {
  return (
    <div> 
        <Hero/>
        <div className={styles.projectDetail}> 

            <h2>{"Detector"}</h2> 

            <div className={styles.projectContent}>
                <section>
                    <h2>{"Overview"}</h2>
                    <p>{`
                        Detector is a Science Olympiad event where teams "build a mass/force sensing device 
                        that accurately measures and displays both voltage and actual masses 
                        of different solid samples ranging from 30 to 1000 grams."
                        I built the device and studied for the written test myself.  
                        The device is accurate to around 2% with smaller objects; 
                        however, the NY State Tournament had us weigh a large vacuum-insulated water bottle with water in it 
                        (which acted as a lever arm, with its height bending the platform more than it should have). 
                        I was initially using a force-sensitive resistor with a voltage divider, then upgraded to this configuration,
                        so I'm still very happy with the fact that I was able to put this together and make it work. 
                    `}</p>
                    <div className={styles.pdfLink}>
                        <Link href="/pdfs/Detector-Rules-Manual-2023.pdf" target="_blank">
                            {"Full Event Guidelines"}
                        </Link>
                    </div>
                    <p>{"Most of the following documentation is from my Design Log."}</p>
                </section>
                

                <section>
                    <h2>{"Materials"}</h2>
                    <ul>
                        <li>{"Elegoo Uno R3: microcontroller to connect sensor, LCD, and LEDs"}</li>
                        <li>{"LEDs: light up to represent different mass ranges (which are specified at the specific tournament)"}</li>
                        <li>{"Resistors: used to reduce current for LEDs, control contrast for the LCD, and create the wheatstone bridge"}</li>
                        <li>{"24-bit ADC (attached to surface mount adapter board with pin headers): amplifies the signal from the wheatstone bridge (after going through a network of resistors, capacitors, and a transistor), making it easier for the microcontroller to detect"}</li>
                        <li>{"Strain gauge: increases resistance (decreases voltage) based on the amount it bends (undergoing tension or compression when a load is applied)"}</li>
                        <li>{"Strain gauge apparatus: has the piece of Lexan (mounted on wood) which bends when a load is applied; the strain gauge is attached to this. The 3D printed cover ensures consistency in centering the mass"}</li>
                        <li>{"16x2 LCD display module: displays mass readings from the microcontroller"}</li>
                    </ul> 
                </section>

                <section>
                    <h2>{"Labeled Diagram"}</h2>
                    <Image
                        src="/images/detector-diagram.jpg"
                        width={800}
                        height={600}
                    /> 
                </section>

                <section>
                    <h2>{"Code"}</h2>
                    <p>{`
                        Here is my original Arduino code; during calibration, I measure the voltages corresponding to the masses (v0 is 0g, v20 is 20g, etc)
                        and it creates a line between those points. 
                        This must be done during the calibration period and not any sooner for the most accurate measurements. 
                    `}</p>
                    <pre className={styles.codeBlock}>
                        <code className="language-cpp">
                            {arduinoCode}
                        </code>
                    </pre>
                </section>

                <section>
                    <h2>{"The Process"}</h2>
                    <p>{`
                        To construct the device, a strain gauge apparatus was first created using pieces of wood and a slab of Lexan (clear plastic). 
                        The strain gauge (350 ohms) was mounted using cyanoacrylate glue and sealed using silicon sealant.
                        Next, it was added as a variable resistor in a wheatstone bridge, which consisted of two 220 ohm resistors and one 350 ohm resistor to keep it balanced. 
                        The resulting signal was put into a load cell amplifier (based on a typical HX711 board) consisting of a network of resistors, capacitors, one transistor, and a 24-bit ADC, which was first soldered to a surface mount adapter board with pin headers. 
                        Finally, the microcontroller interprets the signal and outputs a mass value based on a regression equation, indicating whether certain LEDs should light up and showing masses on the 16x2 LCD display.
                    `}</p>
                </section>

                <section>
                <h2>{"Previous Iterations"}</h2>
                <p>{`
                    I plan to expand this section later, but I was using a force-sensitive resistor (FSR) before.
                    Despite being a less accurate sensor (since it's not meant for this purpose), I managed to achieve measurements within 5% of the actual mass. 
                `} </p>
                </section>

                <section>
                    <h2>{"Medals"}</h2>
                    <ul>
                        <li>{"4th Place - Long Island Science Olympiad Invitational (53 teams)"}</li>
                        <li>{"1st Place - Nassau West Regional Tournament (42 teams)"}</li>
                        <li>{"4th Place - Science Olympiad at UPenn Invitational (57 teams)"}</li>
                        <li>{"6th Place - New York Science Olympiad State Tournament (60 teams)"}</li>
                    </ul>
                </section>
            </div> 
        </div> 
        <ProjectFooter/>
    </div>
  )
}