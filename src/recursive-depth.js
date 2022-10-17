const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let countOfNestings = 1;
    let countOfNestingsArr = [1];
    function dept(arr) {
      for (let elem of arr) {
        if (Array.isArray(elem)) {
          countOfNestings++;
          dept(elem);
        }
      }

      countOfNestingsArr.push(countOfNestings);
      countOfNestings = 1;
    }
    dept(arr);
    let result = Math.max(...countOfNestingsArr);
    console.log(result);
    return result;
  }
}

module.exports = {
  DepthCalculator,
};

let depthCalc = new DepthCalculator();

// const spy1 = sinon.spy(instance, 'calculateDepth');
depthCalc.calculateDepth([
  1,
  2,
  3,
  4,
  [1, 2, [1, 2, [[[]]]]],
  5,
  [1, [[[[[[]]]]]]],
]);
// 8);
// expect(spy1.callCount).to.be.greaterThan(1);
// spy1.restore();
// const spy2 = sinon.spy(instance, 'calculateDepth');
depthCalc.calculateDepth([[[[[[[[[[]]]]]]]]]]);
// 10);
// expect(spy2.callCount).to.be.greaterThan(1);
// spy2.restore();
