const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
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
  minesweeper
};
