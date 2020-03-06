/**
 *
 * @param {object} obj
 * @param {(any, number|string|symbol, object) => boolean} func
 * @returns {boolean}
 */
const every = (obj, func) => {
  for (let key in obj) {
    if (!func(obj[key], key, obj)) return false;
  }
  return true;
};

export default every;
