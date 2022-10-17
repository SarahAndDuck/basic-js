const { NotImplementedError } = require("../extensions/index.js");

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
  // if (!(typeof obj === "object") || Array.isArray(obj) || obj == null) {
  //   throw new Error("IInvalid date!");
  // }

  if (
    !(Object.prototype.toString.call(date) === "[object Date]") &
    !(date instanceof Date)
  )
    throw new Error("Invalid date!");

  if (getSeason.arguments.length == 0) throw new Error("Invalid date!");
  let month = date.getMonth();
  console.log(month);
  console.log(typeof month);
  if ((month > 1) & (month < 3)) return "winter";
  else if ((month > 3) & (month < 8)) return "spring";
  else if ((month > 5) & (month < 9)) return "summer";
  else if ((month > 8) & (month < 13)) return "autumn";
}

module.exports = {
  getSeason,
};
