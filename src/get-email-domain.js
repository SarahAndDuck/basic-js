const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here

  function foo(email) {
    let intexStart = -1;
    intexStart = email.indexOf("@");
    // console.log("intexStart = ", intexStart);
    if (intexStart == -1) return email;
    else {
      return foo(email.slice(intexStart + 1));
    }
  }
  return foo(email);
}


module.exports = {
  getEmailDomain
};
