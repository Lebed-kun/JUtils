/**
 *
 * @param {object} obj
 * @param {(any, any, number|string|symbol, object) => any} func
 * @param {any} initValue
 * @returns {any}
 */
const reduce = (obj, func, initValue) => {
  let result = initValue;
  for (let key in obj) {
    result = func(result, obj[key], key, obj);
  }
  return result;
};

export default reduce;
