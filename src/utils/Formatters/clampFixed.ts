/**
 * Workaround for converting non-zero float numbers
 * to fixed format
 *
 * @param number Number to be formatted in fixed format
 * @param precision Number of comma digits
 * @returns Number with fixed amount of comma digits
 */
function clampFixed(number: number, precision: number): string {
  const fixed = +number.toFixed(precision);

  if (number > 0 && fixed === 0) {
    return Math.pow(10, -precision).toFixed(precision);
  }

  if (number < 0 && fixed === 0) {
    return (-Math.pow(10, -precision)).toFixed(precision);
  }

  return fixed + "";
}

export default clampFixed;
