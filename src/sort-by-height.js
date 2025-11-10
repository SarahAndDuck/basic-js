const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let newArr1 = [];
  let newArr2 = [];
  let newArr3 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) newArr1.push(i);
    else newArr2.push(arr[i]);
  }
  //   console.log(newArr1);
  let newArr2Sort = newArr2.sort((a, b) => (a > b ? 1 : -1));
  let newArr1Set = new Set(newArr1);
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (newArr1Set.has(i)) newArr3.push(-1);
    else {
      newArr3.push(newArr2Sort[j]);
      j++;
    }
  }

  return newArr3;
}



module.exports = {
  sortByHeight
};
