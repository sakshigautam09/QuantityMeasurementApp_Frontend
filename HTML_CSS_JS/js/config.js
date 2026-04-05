// ============================================================
// CONFIG — replace with your actual backend URL
// ============================================================
const API_BASE = 'http://localhost:5000/api/v1';
const GOOGLE_CLIENT_ID = '621930458072-e1r85is40jvtcb3l1509se4m6f04ekb0.apps.googleusercontent.com'; 

// ============================================================
// UNIT DEFINITIONS
// ============================================================
const UNITS = {
  LENGTH:      ['FT','IN','YARDS','CM','FEET','INCHES'],
  WEIGHT:      ['KG','G','LB','KILOGRAM','GRAM','POUND'],
  VOLUME:      ['L','ML','GAL','LITRE','MILLILITRE','GALLON'],
  TEMPERATURE: ['C','F','K','CELSIUS','FAHRENHEIT','KELVIN']
};

const UNIT_LABELS = {
  LENGTH:      [{v:'FEET',l:'Feet (ft)'},{v:'INCHES',l:'Inches (in)'},{v:'YARDS',l:'Yards (yd)'},{v:'CM',l:'Centimeters (cm)'}],
  WEIGHT:      [{v:'KILOGRAM',l:'Kilogram (kg)'},{v:'GRAM',l:'Gram (g)'},{v:'POUND',l:'Pound (lb)'}],
  VOLUME:      [{v:'LITRE',l:'Litre (L)'},{v:'MILLILITRE',l:'Millilitre (mL)'},{v:'GALLON',l:'Gallon (gal)'}],
  TEMPERATURE: [{v:'CELSIUS',l:'Celsius (°C)'},{v:'FAHRENHEIT',l:'Fahrenheit (°F)'},{v:'KELVIN',l:'Kelvin (K)'}]
};

const OPS = ['compare','convert','add','subtract','divide'];
const OP_LABELS = {compare:'⇄ Compare', convert:'↔ Convert', add:'+ Add', subtract:'− Subtract', divide:'÷ Divide'};

// Temperature only supports compare & convert
const TEMP_OPS_DISABLED = ['add','subtract','divide'];
