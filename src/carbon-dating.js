const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  const k = 0.693 / HALF_LIFE_PERIOD;
  if (typeof sampleActivity !== "string") return false;
  let num = Number(sampleActivity);
  if (
    num < MODERN_ACTIVITY &&
    num > 0 &&
    typeof num === "number" &&
    !isNaN(num)
  ) {
    let t = Math.log(MODERN_ACTIVITY / num) / k;
    return Math.ceil(t);
  } else return false;
}

module.exports = {
  dateSample
};
