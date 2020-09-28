const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (str === null) str = 'null';

  console.log(options);
  let repeat;
  options.repeatTimes ? repeat = options.repeatTimes : repeat = 1;

  let separator;
  options.separator ? separator = options.separator : separator = '+';

  let addition;
  if (options.addition === null) {
    addition = 'null';
  } else {
    options.addition || (typeof options.addition  === 'boolean') ?
      addition = options.addition.toString() : addition = '';
  }

  let additionRepeat;
  options.additionRepeatTimes ? additionRepeat = options.additionRepeatTimes : additionRepeat = 1;

  let additionSeparator;
  options.additionSeparator ? additionSeparator= options.additionSeparator : additionSeparator = '';

  let newStr = '';

  for (let i = 0; i < repeat; i++) {
    newStr += str + addition;

    if (additionRepeat > 1) {
      for (let j = 0; j < additionRepeat - 1; j++) {
        if (j <= additionRepeat - 1) newStr += additionSeparator;
        newStr += addition;
      }
    }

    if (i < repeat - 1) newStr += separator;
  }

  return newStr;
};
