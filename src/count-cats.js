const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matr) {
    // let res = matr.flat();
    // return res.filter(item => item === '^^').length;
    let count = 0;
    for (let i = 0; i < matr.length; i++) {
        for (let j = 0; j < matr[i].length; j++) {
            if (matr[i][j] === '^^') count++;
        }
    }
    return count;
};
