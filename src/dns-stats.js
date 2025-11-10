const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let newArr = domains.map((item) => item.split(".").reverse());
  let newArr2 = newArr.map((item) => item.map((item) => `.` + item));
  console.log(newArr2);
  let obj = {};

  newArr2.forEach((item) => {
    let myArr = [item[0]];
    for (let i = 0; i < item.length - 1; i++) {
      myArr.push(myArr[i] + item[i + 1]);
    }
    myArr.forEach((item) => {
      if (obj[item]) obj[item]++;
      else obj[item] = 1;
    });
  });
  return obj;
}

module.exports = {
  getDNSStats
};
