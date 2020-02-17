export const isLowerCaseLetter = char => {
  const charCode = char.charCodeAt(0);
  return "a".charCodeAt(0) <= charCode && charCode <= "Z".charCodeAt(0);
};

export const isUpperCaseLetter = char => {
  const charCode = char.charCodeAt(0);
  return "A".charCodeAt(0) <= charCode && charCode <= "Z".charCodeAt(0);
};

export const isLetter = char => {
  char = char.toUpperCase();
  const charCode = char.charCodeAt(0);
  return "A".charCodeAt(0) <= charCode && charCode <= "Z".charCodeAt(0);
};
