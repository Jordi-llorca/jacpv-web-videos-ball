export function stringToColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Create a pastel color by ensuring higher base values and limiting the range
  const r = ((hash & 0xFF0000) >> 16) % 128 + 128;
  const g = ((hash & 0x00FF00) >> 8) % 128 + 128;
  const b = (hash & 0x0000FF) % 128 + 128;

  return `rgb(${r}, ${g}, ${b})`;
}
