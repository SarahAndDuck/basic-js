const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let macSymbolArr = new Set([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ]);

  let isHas = true;
  let k = 0;
  n.split("").forEach((item) => {
    if (item == "-") k++;
  });
  if (k != 5) {
    return false;
  }

  n.split("-").forEach((item) => {
    if (item.length != 2) isHas = false;
  });
  if (!isHas) return isHas;
  let newArr = n.split("-").join("").split("");
  console.log(newArr);
  console.log(macSymbolArr);

  newArr.forEach((item) => {
    if (!macSymbolArr.has(item)) {
      isHas = false;
    }
  });
  return isHas;
}


module.exports = {
  isMAC48Address
};
