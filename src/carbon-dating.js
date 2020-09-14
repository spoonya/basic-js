const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(smplAct) {
    let num = parseFloat(smplAct);
    if ( (typeof smplAct !== 'string' || isNaN(num)) || !(num > 0 && num < MODERN_ACTIVITY) ) {
        return false;
    } else {
        return Math.ceil(Math.log(MODERN_ACTIVITY / num) / (0.693 / HALF_LIFE_PERIOD));
    }
};
