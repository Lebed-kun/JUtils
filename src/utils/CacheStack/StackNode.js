/**
 * @typedef {object} StackNode
 * @property {any} value
 * @property {StackNode|null} next
 * @property {StackNode|null} prev
 *
 * @param {any} value
 * @param {StackNode|null} next
 * @param {StackNode|null} prev
 * @returns {StackNode}
 */
const StackNode = (value, next = null, prev = null) => ({
  value,
  next,
  prev
});

export default StackNode;
