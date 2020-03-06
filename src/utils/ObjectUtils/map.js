/**
 *
 * @param {object} obj
 * @param {(any, number|string|symbol, object) => any} func
 * @returns {object}
 */
const map = (obj, func) => {
  const newObj = {};
  for (let key in obj) {
    newObj[key] = func(obj[key], key, obj);
  }
  return newObj;
};

export default map;
