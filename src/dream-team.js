const { NotImplementedError } = require("../extensions/index.js");

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
  createDreamTeam,
};
console.log(createDreamTeam(3));
console.log(createDreamTeam(3.312312));
console.log(createDreamTeam(false));
console.log(createDreamTeam(null));
console.log(createDreamTeam(undefined));
console.log(createDreamTeam({ foo: "bar" }));
console.log(createDreamTeam(["Amelia", "Grace", "Lily", "Ruby"]));
console.log(
  createDreamTeam([
    ["David Abram"],
    ["Robin Attfield"],
    "Thomas Berry",
    ["Paul R.Ehrlich"],
    "donna Haraway",
    " BrIaN_gOodWiN  ",
    { 0: "Serenella Iovino" },
    "Erazim Kohak",
    "  val_plumwood",
  ])
);
//'BDETV'
