const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let { ...rest } = options;

  if (rest.additionSeparator == undefined) rest.additionSeparator = "|";
  if (rest.separator == undefined) rest.separator = "+";
  if (rest.repeatTimes == undefined) rest.repeatTimes = 1;

  console.log(rest);
  let newStr = "";
  for (let i = 0; i < rest.repeatTimes; i++) {
    newStr += String(str);
    let counRepeatAddition = 1;
    if (rest.additionRepeatTimes !== undefined)
      counRepeatAddition = rest.additionRepeatTimes;
    for (let i = 0; i < counRepeatAddition; i++) {
      if (rest.addition !== undefined) newStr += String(rest.addition);
      if (
        rest.additionSeparator &&
        counRepeatAddition > 1 &&
        i < counRepeatAddition - 1
      )
        newStr += String(rest.additionSeparator);
    }
    if (rest.separator !== undefined && i !== rest.repeatTimes - 1)
      newStr += String(rest.separator);
  }
  return newStr;
}


module.exports = {
  repeater
};
