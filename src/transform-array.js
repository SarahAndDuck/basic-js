const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === "--discard-next") & (arr[i + 2] == "--double-prev")) {
      i = i + 3;
      console.log(i);
    }
    if (arr[i] === "--discard-next");
    if (arr[i] === "--discard-prev") {
      newArr.pop();
    } else if ((arr[i] === "--double-next") & arr[i + 1])
      newArr.push(arr[i + 1]);
    else if ((arr[i] === "--double-prev") & arr[i - 1]) newArr.push(arr[i - 1]);
    else if (typeof arr[i] === "number") newArr.push(arr[i]);
    else if (
      (typeof arr[i] === "string") &
      !(arr[i] == "--discard-next") &
      !(arr[i] == "--discard-prev") &
      !(arr[i] == "--double-next") &
      !(arr[i] == "--double-prev")
    ) {
      newArr.push(arr[i]);
    } else if (typeof arr[i] === "object") newArr.push(arr[i]);
    else if (typeof arr[i] === "boolean") newArr.push(arr[i]);
  }
  return newArr;
}

module.exports = {
  transform
};
