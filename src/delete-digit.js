const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split("");
  let newArr = [];
  function nyFoo(item) {
    let tempArr = [...arr];
    tempArr.splice(item, 1);
    return tempArr;
  }

  for (let i = 0; i < arr.length; i++) {
    newArr.push(Number(nyFoo(i).join("")));
  }
  let myMax = Math.max.apply(null, newArr);
  return myMax;
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
}


module.exports = {
  deleteDigit
};
