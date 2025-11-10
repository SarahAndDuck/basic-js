const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let j = 0;

  function foo(j, arr) {
    if (j == names.length) return arr;
    else {
      let newArr = [];
      let k = 1;
      arr.forEach((item, i) => {
        if (i < j + 1) {
          newArr.push(item);
        }
      });
      for (let i = j + 1; i < arr.length; i++)
        if (arr[j] == arr[i]) {
          newArr.push(`${arr[i]}(${k})`);
          k++;
        } else newArr.push(arr[i]);
      return foo(j + 1, newArr);
    }
  }
  let result = foo(j, names);
  return result;
}



module.exports = {
  renameFiles
};
