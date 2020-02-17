export const toKebabCase = str => {
  const UPPER_LETTER = /[A-Z]/;

  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(UPPER_LETTER)) {
      result += `${i !== 0 ? "-" : ""}${str[i].toLowerCase()}`;
    } else if (str[i] === "_") {
      result += "-";
    } else {
      result += str[i];
    }
  }

  return result;
};
