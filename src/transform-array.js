const CustomError = require("../extensions/custom-error");

module.exports = function transform(initArr) {
  if (!Array.isArray(initArr)) {
    throw Error;
  } else {
    let arr = initArr;
    return chooseOperation(arr);
  }
};

function doubleNext(arr, ind) {
    console.log(arr);
    // return arr.splice(ind, 1, arr[++ind]);
    return ++ind === arr.length ? arr.splice(--ind, 1) : arr.splice(--ind, 1, arr[++ind]);

}

function doublePrev(arr, ind) {
    console.log(arr);
    return --ind < 0 ? arr.splice(++ind, 1) : arr.splice(++ind, 1, arr[--ind]);
}

function discardNext(arr, ind) {
    console.log(arr);
    // return arr.splice(ind, 2);
    return ++ind === arr.length ? arr.splice(--ind, 1) : arr.splice(--ind, 2);
}

function discardPrev(arr, ind) {
    console.log(arr);
    return --ind < 0 ? arr.splice(++ind, 1) : arr.splice(ind, 2);
}

function chooseOperation(arr) {
  const OPERATIONS = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  for (let i = 0; i < arr.length; i++) {
      console.log(arr);
      // console.log(OPERATIONS.indexOf(arr[i]));
      if (OPERATIONS.indexOf(arr[i]) !== -1) {
          switch (arr[i]) {
              case OPERATIONS[0]: discardNext(arr, i); break;
              case OPERATIONS[1]: discardPrev(arr, i); break;
              case OPERATIONS[2]: doubleNext(arr, i); break;
              case OPERATIONS[3]: doublePrev(arr, i); break;
          }
          i = 0;
      }
  }
  console.log(arr);
  return arr;
}