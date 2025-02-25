interface Theme {
  font: number;
  color: number;
  design: number;
}
const BASE_70_SYMBOLS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_*+,<>[]'.split(
    ''
  );
const BASE_70 = BASE_70_SYMBOLS.length;

interface TimerData {
  time: number;
  theme: Theme;
}

function encodeBase70(num: number): string {
  if (num === 0) return BASE_70_SYMBOLS[0];
  let result = '';
  while (num > 0) {
    result = BASE_70_SYMBOLS[num % BASE_70] + result;
    num = Math.floor(num / BASE_70);
  }
  return result;
}

function decodeBase70(encoded: string): number {
  let result = 0;
  for (const char of encoded) {
    result = result * BASE_70 + BASE_70_SYMBOLS.indexOf(char);
  }
  return result;
}

function encodeTimestamp(timestamp: number): string {
  const seconds = Math.floor(timestamp / 1000);
  const offsetSeconds = seconds;
  let encoded = encodeBase70(offsetSeconds);

  return encoded.padStart(7, BASE_70_SYMBOLS[0]);
}

function decodeTimestamp(encoded: string): number {
  return decodeBase70(encoded) * 1000;
}

function encodeTheme(theme: number): string {
  return theme.toString().padStart(4, '0');
}

function decodeTheme(encoded: string): Theme {
  return {
    font: parseInt(encoded[1]),
    color: parseInt(encoded[2]),
    design: parseInt(encoded[3]),
  };
}

export function getTimerLink(time: number, theme: number): string {
  return encodeTimestamp(time) + encodeTheme(theme);
}

export function getTimerData(sublink: string): TimerData {
  return {
    time: decodeTimestamp(sublink.substring(0, 7)),
    theme: decodeTheme(sublink.substring(7)),
  };
}

// const timestamp = Date.now();
// const theme = 123;

// console.log("Current timestamp:", timestamp);

// const link = getTimerLink(timestamp, theme);
// console.log("Generated Link:", link);

// const data = getTimerData(link);
// console.log("Decoded Data:", data);
