import { isPrimitive } from "../isPrimitive/isPrimitive";
import map from "../ObjectUtils/map";

/**
 * @param {any} value
 * @returns {any}
 */
const deepCopy = value => {
  if (isPrimitive(value) || typeof value === "function") return value;

  if (Array.isArray(value)) {
    return value.map(el => deepCopy(el));
  } else {
    return map(value, el => deepCopy(el));
  }
};

export default deepCopy;
