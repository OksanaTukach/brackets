module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) {
    return false;
  }
  let result = str;
    for (let s = 0; s < str.length; s++) {
      for (let b = 0; b < bracketsConfig.length; b++) {
        result = result.replace(bracketsConfig[b].join(''), '');
      }
  }
  return result.length === 0;
};
