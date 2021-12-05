/**
 * Generates a rgba/rgb color string from a hex color string
 * @param hex Hex color string
 * @param alpha Alpha value
 * @returns rgba/rgb color string
 * @example
 * hexToRgba('#000000', 0.5) // returns rgba(0, 0, 0, 0.5)
 * hexToRgba('#000000') // returns rgb(0, 0, 0)
 * @example
 */
export const hexToRGB = (hex: string, alpha?: number) => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha !== undefined) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
};
