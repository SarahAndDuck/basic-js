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
  result = 1;
  calculateDepth(arr) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // this.result = 1;
    let countOfNestingsArr = [1];
    for (let elem of arr) {
      if (Array.isArray(elem)) {
        this.result++;
        this.calculateDepth(elem);
      }
      countOfNestingsArr.push(this.result);
      this.result = 1;
    }

    // countOfNestings = 1;
    // dept(arr);
    // let result = Math.max(...countOfNestingsArr);
    console.log(countOfNestingsArr);
    console.log(this.result);
    return this.result;
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
//depthCalc.calculateDepth([[[[[[[[[[]]]]]]]]]]);
// 10);
// expect(spy2.callCount).to.be.greaterThan(1);
// spy2.restore();
