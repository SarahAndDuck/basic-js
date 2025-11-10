const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  if (s2 == undefined) throw new Error("Incorrect arguments!");
  let arr1 = s1.split("");
  let arr2 = s2.split("");

  let obj1 = {},
    obj2 = {};
  function getObj(obj, item) {
    if (obj[item] == undefined) obj[item] = 1;
    else obj[item]++;
  }
  arr1.forEach((item) => {
    getObj(obj1, item);
  });
  arr2.forEach((item) => {
    getObj(obj2, item);
  });
  const entries1 = Object.entries(obj1);
  const entries2 = Object.entries(obj2);
  //   console.log("entries1 =", entries1, "entries2 =", entries2);
  let j = 0,
    k = 0;
  if (entries1 == entries2 || entries1 > entries2) {
    while (j < entries2.length) {
      for (i = 0; i < entries1.length; i++) {
        if (entries1[j][0] == entries2[i][0]) {
          if (entries1[j][1] > entries2[i][1]) k = k + entries2[i][1];
          else k = k + entries1[j][1];
        }
      }
      j++;
    }
  } else if (entries1 < entries2) {
    while (j < entries1.length) {
      for (i = 0; i < entries2.length; i++) {
        if (entries1[j][0] == entries2[i][0]) {
          if (entries1[j][1] > entries2[i][1]) k = k + entries2[i][1];
          else k = k + entries1[j][1];
        }
      }
      j++;
    }
  }

  return k;
}

module.exports = {
  getCommonCharacterCount
};
