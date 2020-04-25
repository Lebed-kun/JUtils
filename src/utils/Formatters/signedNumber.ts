/**
 * Formats number with sign
 *
 * @param number
 * @returns Number with sign
 */
function signedNumber(number: number): string {
  return (number > 0 ? "+" : "") + number;
}

export default signedNumber;
