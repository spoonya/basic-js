const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const reducer = (acc, el) => {
      return Math.max(this.calculateDepth(el), acc);
    }
    if (Array.isArray(arr)) {
      return 1 + arr.reduce(reducer, 0);
    } else {
      return 0;
    }
  }
};