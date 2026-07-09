import HeartPrinter from './HeartPrinter'
import IntelliHeat from './IntelliHeat'
import Detector from './Detector'
import WifiLab from './WifiLab'
import PhoneMount from './PhoneMount'
import HSResearch from './HSResearch'

// id -> content component (the project body). Titles live in projectList.js.
// Imported only by the (lazy) ProjectModal, so all bodies stay out of the homepage bundle.
export const projectContent = {
  heartprinter: HeartPrinter,
  intelliheat: IntelliHeat,
  detector: Detector,
  'wifi-lab': WifiLab,
  'phone-mount': PhoneMount,
  'hs-research': HSResearch,
}
