const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',
  subChain: '',
  getLength() {
      this.chain.split('~~').length - 1;
      return this;
  },
  addLink(value) {
    this.subChain += `( ${value} )~~`;
    return this;
  },
  removeLink(position) {
    if (!position || isNaN(position) || !Number.isInteger(position) || position <= 0 ||
        position-1 > this.subChain.split('~~').length) {
      this.subChain = '';
      throw Error;
    } else {
      this.subChain = this.subChain.split('~~');
      this.subChain.splice(position-1, 1);
      this.subChain= this.subChain.join('~~');
      return this;
    }
  },
  reverseChain() {
    this.subChain = this.subChain.split('~~').filter(el => el !== '').reverse().join('~~').concat('~~');
    return this;
  },
  finishChain() {
    this.subChain = this.subChain.slice(0, this.subChain.length - 2);
    this.chain.length <= 1 ? this.chain += this.subChain: this.chain += '~~' + this.subChain;
    let copy = this.chain;
    this.chain = '';
    this.subChain = '';
    return copy;
  }
};

module.exports = chainMaker;
