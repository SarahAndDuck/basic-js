const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  // throw new NotImplementedError("Not implemented");
  // // remove line with error and write your code here
  let obj = {};
  let newArr = str.split("");
  let newArr2 = [];
  console.log(newArr);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == newArr[i + 1]) {
      if (obj[newArr[i]]) obj[newArr[i]]++;
      else obj[newArr[i]] = 1;
    } else {
      if (obj[newArr[i]]) obj[newArr[i]]++;
      else obj[newArr[i]] = 1;
      newArr2.push(...Object.entries(obj));
      obj = {};
    }
  }
  console.log(newArr2);
  let newArr3 = [];
  newArr2.forEach((item) => {
    if (item[1] > 1) newArr3.push(item[1] + item[0]);
    else newArr3.push(item[0]);
  });
  return newArr3.join("");
}


module.exports = {
  encodeLine
};
