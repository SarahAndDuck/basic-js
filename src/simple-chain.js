const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  links: [],

  getLength() {
    throw new NotImplementedError("Not implemented");
    //return Object.key(this).length;
  },
  addLink(value) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (arguments.length) {
      let item = "( " + value + " )";
      this.links.push(item);
    } else {
      let item = "()";
      this.links.push(item);
    }

    return this;
  },
  removeLink(position) {
    //  throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here

    if (position < 1) {
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    } else if (position > this.links.length) {
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    } else if (typeof position !== "number") {
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    } else if (position % 1 !== 0) {
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.links.splice(position - 1, 1);
    }

    return this;
  },
  reverseChain() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    this.links.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError("Not implemented");

    let linksSt = "";
    linksSt = this.links[0];
    for (let i = 1; i < this.links.length; i++) {
      linksSt = linksSt + "~~" + this.links[i];
    }

    this.links = [];
    console.log(linksSt);
    return linksSt;
  },
};



module.exports = {
  chainMaker,
};
