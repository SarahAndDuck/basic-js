const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)) return false;

  let TeamName = [];
  let DteamTeamName = "";
  for (elem of members) {
    if (typeof elem == "string") {
      TeamName.push(elem.split(" ").join("").charAt(0).toUpperCase());
    }
  }

  TeamName.sort();
  for (elem of TeamName) {
    DteamTeamName = DteamTeamName + elem;
  }
  return DteamTeamName;
}


module.exports = {
  createDreamTeam
};
