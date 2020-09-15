const OPERATIONS = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

module.exports = function transform(initArr) {
    if (!Array.isArray(initArr)) {
        throw new Error();
    } else if (!initArr.length) {
        return initArr;
    } else {
        let arr = initArr.map(el => el);
        return chooseOperation(arr);
    }
};

function chooseOperation(arr) {
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case OPERATIONS[0]:
                discardNext(arr, i);
                i -= 2;
                break;
            case OPERATIONS[1]:
                discardPrev(arr, i);
                i--;
                break;
            case OPERATIONS[2]:
                doubleNext(arr, i);
                i--;
                break;
            case OPERATIONS[3]:
                doublePrev(arr, i);
                i--;
                break;
        }
    }
    return arr;
}

function doubleNext(arr, ind) {
    if ( OPERATIONS.indexOf(arr[ind + 1]) === -1) {
        return ind + 1 === arr.length ? arr.splice(ind, 1) : arr.splice(ind, 1, arr[ind + 1]);
    } else {
        return arr.splice(ind, 1);
    }
}

function doublePrev(arr, ind) {
    return ind - 1 < 0 ? arr.splice(ind, 1) : arr.splice(ind, 1, arr[ind - 1]);
}

function discardNext(arr, ind) {
    if (ind + 1 === arr.length) {
        return arr.splice(ind, 1);
    } else if (arr[ind + 2] === OPERATIONS[1] || arr[ind + 2] === OPERATIONS[3]) {
        return arr.splice(ind, 3);
    } else {
        return arr.splice(ind, 2);
    }
}

function discardPrev(arr, ind) {
    return ind - 1 < 0 ? arr.splice(ind, 1) : arr.splice(ind - 1, 2);
}