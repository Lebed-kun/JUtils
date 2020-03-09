/**
 *
 * @param {any} value
 * @returns {boolean}
 */
export const isPrimitive = value =>
  (typeof value !== "object" || value === null) && typeof value !== "function";
