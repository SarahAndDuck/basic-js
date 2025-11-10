const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (arguments.length == 0) return 'Unable to determine the time of year!';
  if (
    (date instanceof Date === false ||
      Object.getOwnPropertyNames(date).length > 0) &&
    arguments.length > 0
  ) {
    throw new Error('Invalid date!');
  }

  let monthNumber = date.getMonth() + 1;

  let monthLong = '';

  if (monthNumber > 2 && monthNumber < 6) monthLong = 'spring';
  if (monthNumber > 5 && monthNumber < 9) monthLong = 'summer';
  if (monthNumber > 8 && monthNumber < 12) monthLong = 'autumn';
  if (monthNumber == 12 || (monthNumber > 0 && monthNumber < 3))
    monthLong = 'winter';
  return monthLong;
}

module.exports = {
  getSeason
};
