const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!members || !members.length) {
        return false;
    } else {
        let arr = members.filter(el => typeof el === 'string');
        arr = arr.map(el => el.trim().substring(0, 1).toUpperCase()).sort();
        return arr.join('');
    }
};
