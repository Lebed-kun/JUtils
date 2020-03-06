/**
 *
 * @param {object} obj
 * @param {(any, number|string|symbol, object) => boolean} func
 * @returns {boolean}
 */
const some = (obj, func) => {
  for (let key in obj) {
    if (func(obj[key], key, obj)) return true;
  }
  return false;
};

export default some;
