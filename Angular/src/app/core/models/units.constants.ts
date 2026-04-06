import { UnitOption } from './models';

// ✅ Unit values EXACTLY match backend LengthUnitM, WeightUnitM, VolumeUnitM, TemperatureUnit strings
export const UNIT_LABELS: Record<string, UnitOption[]> = {
  Length: [
    { v: 'FEET',        l: 'Feet (ft)' },
    { v: 'INCHES',      l: 'Inches (in)' },
    { v: 'YARDS',       l: 'Yards (yd)' },
    { v: 'CENTIMETERS', l: 'Centimeters (cm)' }   // ← was CM, backend uses CENTIMETERS
  ],
  Weight: [
    { v: 'KILOGRAM', l: 'Kilogram (kg)' },
    { v: 'GRAM',     l: 'Gram (g)' },
    { v: 'POUND',    l: 'Pound (lb)' }
  ],
  Volume: [
    { v: 'LITRE',      l: 'Litre (L)' },
    { v: 'MILLILITRE', l: 'Millilitre (mL)' },
    { v: 'GALLON',     l: 'Gallon (gal)' }
  ],
  Temperature: [
    { v: 'CELSIUS',    l: 'Celsius (°C)' },
    { v: 'FAHRENHEIT', l: 'Fahrenheit (°F)' },
    { v: 'KELVIN',     l: 'Kelvin (K)' }
  ]
};

export const ALL_OPS  = ['compare', 'convert', 'add', 'subtract', 'divide'];
export const TEMP_OPS = ['compare', 'convert'];

export const OP_LABELS: Record<string, string> = {
  compare:  '⇄ Compare',
  convert:  '↔ Convert',
  add:      '+ Add',
  subtract: '− Subtract',
  divide:   '÷ Divide'
};

export const OP_SYMBOLS: Record<string, string> = {
  compare:  '⇄',
  add:      '+',
  subtract: '−',
  divide:   '÷'
};
