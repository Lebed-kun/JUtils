/**
 *
 * @param {object} obj
 * @param {(any, number|string|symbol, object) => void} func
 */
const forEach = (obj, func) => {
  for (let key in obj) {
    func(obj[key], key, obj);
  }
};

export default forEach;
