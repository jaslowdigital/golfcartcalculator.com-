interface CartData {
  make: string;
  model: string;
  year: number;
  condition: string;
  upgrades: string[];
  mileage: number;
  batteryAge: number;
}

interface ValueRange {
  low: number;
  high: number;
}

// Base values for different makes (average for a 5-year old cart in good condition)
const makeBaseValues: Record<string, number> = {
  'Advanced EV': 5200,
  'Active EV': 4800,
  'Aetric EV': 4600,
  'AGT Cars': 5000,
  'Alset EV': 5300,
  'Altra Car': 4700,
  'Alwayz': 4500,
  'Aoxiang': 4400,
  'Aquila EV': 5100,
  'Atlas': 5400,
  'BC Companies LLC': 4900,
  'Beast': 5800,
  'Bensel': 4600,
  'Bigcart': 4700,
  'Bintelli': 5200,
  'Birdie Car': 4500,
  'Biro': 4800,
  'Borcart': 4400,
  'Bremark EV': 4900,
  'Breezy EV': 4700,
  'Bugs': 4600,
  'Club Car': 6500,
  'Crown Carts': 5300,
  'Cushman': 5800,
  'Dachi': 4400,
  'Denago EV': 5100,
  'Dongguan RuiDa': 4500,
  'Drake': 4800,
  'Dynamic Carts': 5000,
  'DV-Golf': 4900,
  'E-Z-GO': 6300,
  'Eagle EV': 4800,
  'Ecar Golf': 4600,
  'ECO Carts': 4700,
  'Eco Planeta': 5000,
  'Eda Car EV': 4500,
  'Ellwee': 4900,
  'Emart Car': 4600,
  'Envy Golf Cart': 5200,
  'EV Titan': 5400,
  'Evolution': 5300,
  'Excar': 4700,
  'Freedom Carts': 5100,
  'Garia': 7500,
  'GEM': 6000,
  'Getgo': 4800,
  'Gorilla Rides EV': 5200,
  'Green Car': 4700,
  'Honor LSV': 5300,
  'Hopper': 4800,
  'Huntve': 4900,
  'ICO Car': 4800,
  'Imperial': 5100,
  'Ironbull Cart': 5400,
  'Italcar': 5200,
  'Jiangsu Longhui': 4400,
  'K K Carts': 4500,
  'Kandi': 4900,
  'Kawasaki': 6000,
  'Kodiak EV': 5200,
  'Landmaster': 5400,
  'Lannmarker': 4600,
  'Legion EV': 5100,
  'Lento Golf Car': 4700,
  'Lexsong': 4500,
  'Lvtong': 4600,
  'MAC EV': 4900,
  'Madjax': 5000,
  'Maini': 4800,
  'Mammoth EV': 5600,
  'Mantis': 5200,
  'Marshell': 4700,
  'Massimo Motor': 5300,
  'Matgr': 4600,
  'Melex': 5400,
  'Minghong': 4400,
  'MMC': 4800,
  'Moke America': 5900,
  'Moto EV': 4900,
  'Nevo EV': 4800,
  'Olympus LSV': 5500,
  'Ongolf': 4700,
  'Pilotcar EV': 5000,
  'Royal EV': 5200,
  'SC Carts': 4900,
  'Sierra LSV': 5100,
  'Spartan EV': 5400,
  'Spree EV': 4800,
  'STAR EV': 5300,
  'Suncart': 4500,
  'Sunday Carts': 4900,
  'Supermach': 4400,
  'Tao Motor': 4800,
  'Teycars': 4700,
  'Tomberlin': 5500,
  'Top New Energy': 4600,
  'Toro': 5800,
  'Trojan EV': 5200,
  'United Smart EV': 4900,
  'V Carts': 4800,
  'Vantage': 5300,
  'Venom EV': 5400,
  'Viking EV': 5100,
  'Viper Cart USA': 5200,
  'Vitacci': 4900,
  'Vivid EV': 5100,
  'Volcon': 5600,
  'Voyager EV': 5200,
  'Vtech': 4800,
  'Whanlong': 4500,
  'Wintao': 4400,
  'WSM': 4600,
  'WUXI HIO': 4500,
  'Xmoto': 4900,
  'Yamaha': 6200,
  'Yatian': 4600,
  'Zycar': 4700,
  'Zrox EV': 5000,
  'Other': 4000
};

// Condition multipliers
const conditionMultipliers: Record<string, { low: number; high: number }> = {
  'excellent': { low: 1.1, high: 1.2 },
  'good': { low: 0.9, high: 1.0 },
  'fair': { low: 0.7, high: 0.8 },
  'poor': { low: 0.5, high: 0.6 }
};

// Age depreciation rate (per year from current year)
const calculateAgeDepreciation = (year: number): number => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  
  if (age <= 0) return 0.95; // New carts still have some depreciation
  if (age <= 2) return 0.85;
  if (age <= 5) return 0.7;
  if (age <= 8) return 0.6;
  if (age <= 12) return 0.5;
  return 0.4; // Older than 12 years
};

// Upgrade value additions (percentage increase to base value)
const upgradeValues: Record<string, number> = {
  'Custom Wheels': 0.05,
  'Lift Kit': 0.08,
  'Premium Seats': 0.04,
  'Custom Body': 0.07,
  'LED Lights': 0.02,
  'Sound System': 0.03
};

// Calculate battery depreciation (percentage decrease)
const calculateBatteryDepreciation = (batteryAge: number): number => {
  if (batteryAge <= 1) return 0.0;
  if (batteryAge <= 2) return 0.05;
  if (batteryAge <= 4) return 0.15;
  if (batteryAge <= 6) return 0.3;
  return 0.5; // More than 6 years old
};

// Mileage impact (percentage decrease)
const calculateMileageImpact = (mileage: number): number => {
  if (mileage <= 100) return 0.0;
  if (mileage <= 500) return 0.05;
  if (mileage <= 1000) return 0.1;
  if (mileage <= 2000) return 0.15;
  return 0.2; // More than 2000 hours
};

export const calculateValue = (data: CartData): ValueRange => {
  // Get base value for make or default
  const baseValue = makeBaseValues[data.make] || makeBaseValues.Other;
  
  // Calculate age depreciation
  const ageDepreciation = calculateAgeDepreciation(data.year);
  
  // Calculate battery depreciation (only if applicable)
  const batteryDepreciation = calculateBatteryDepreciation(data.batteryAge);
  
  // Calculate mileage impact
  const mileageImpact = calculateMileageImpact(data.mileage);
  
  // Calculate total upgrade value addition
  const upgradeAddition = data.upgrades.reduce((total, upgrade) => {
    return total + (upgradeValues[upgrade] || 0);
  }, 0);
  
  // Get condition multiplier
  const condition = conditionMultipliers[data.condition] || conditionMultipliers.good;
  
  // Calculate adjusted base value
  let adjustedBaseValue = baseValue * ageDepreciation;
  
  // Apply battery and mileage impacts
  adjustedBaseValue = adjustedBaseValue * (1 - batteryDepreciation) * (1 - mileageImpact);
  
  // Apply upgrades value
  adjustedBaseValue = adjustedBaseValue * (1 + upgradeAddition);
  
  // Calculate final value range
  return {
    low: Math.round(adjustedBaseValue * condition.low),
    high: Math.round(adjustedBaseValue * condition.high)
  };
};