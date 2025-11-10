const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let matrixResult = [];
  for (let i = 0; i < matrix.length; i++) {
    matrixResult.push([]);
    for (let j = 0; j < matrix[0].length; j++) matrixResult[i].push(0);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == true && i > 0 && j > 0) {
        matrixResult[i - 1][j - 1] += 1;
        matrixResult[i - 1][j] += 1;
        matrixResult[i - 1][j + 1] += 1;
        matrixResult[i][j - 1] += 1;
        matrixResult[i][j + 1] += 1;
        matrixResult[i + 1][j - 1] += 1;
        matrixResult[i + 1][j] += 1;
        matrixResult[i + 1][j + 1] += 1;
      } else if (matrix[i][j] == true && i == 0 && j == 0) {
        // matrixResult[i ][j ] += 1;
        matrixResult[i][j + 1] += 1;
        matrixResult[i + 1][j + 1] += 1;
        matrixResult[i + 1][j] += 1;
      } else if (
        matrix[i][j] == true &&
        i == matrix.length - 1 &&
        j == matrix[0].length - 1
      ) {
        // matrixResult[i ][j ] += 1;
        matrixResult[i][j - 1] += 1;
        matrixResult[i - 1][j - 1] += 1;
        matrixResult[i - 1][j] += 1;
      } else if (matrix[i][j] == true && i == 0 && j == matrix[0].length - 1) {
        // matrixResult[i ][j ] += 1;
        matrixResult[i][j - 1] += 1;
        matrixResult[i + 1][j - 1] += 1;
        matrixResult[i + 1][j] += 1;
      }
    }
  }
  return matrixResult;
}




module.exports = {
  getMatrixElementsSum
};
