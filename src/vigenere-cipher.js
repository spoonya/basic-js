const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(str, key) {
    if (!str || !key) throw new Error('Undefined parametrs');

    str = str.toLowerCase();
    key = key.toLowerCase();
    let encode = '';
    let j = 0;

    for (let i = 0; i < str.length; i++) {

      if (str[i] === ' ') {
        encode += str[i];
        continue;
      }

      if (str.charCodeAt(i) > 122 || str.charCodeAt(i) < 97) {
        encode += str[i];
      } else {
        if (j === key.length) j = 0;

        if ((str.charCodeAt(i) + (key.charCodeAt(j) - 97)) > 122) {
          encode += String.fromCharCode(str.charCodeAt(i) + (key.charCodeAt(j) - 123));
        } else {
          encode += String.fromCharCode(str.charCodeAt(i) + (key.charCodeAt(j) - 97));
        }
        j++;
      }
    }
    return this.direct ? encode.toUpperCase() : encode.toUpperCase().split('').reverse().join('');
  }

  decrypt(str, key) {
    if (!str || !key) throw new Error('Undefined parametrs');

    str = str.toLowerCase();
    key = key.toLowerCase();
    let decode = '';

    let j = 0;

    for (let i = 0; i < str.length; i++) {

      if (str[i] === ' ') {
        decode += str[i];
        continue;
      }

      if (str.charCodeAt(i) > 122 || str.charCodeAt(i) < 97) {
        decode += str[i];
      } else {
        if (j === key.length) j = 0;

        if ((str.charCodeAt(i) - (key.charCodeAt(j) - 97)) < 97) {
          decode += String.fromCharCode(str.charCodeAt(i) - (key.charCodeAt(j) - 123));
        } else {
          decode += String.fromCharCode(str.charCodeAt(i) - (key.charCodeAt(j) - 97));
        }
        j++;
      }
    }
    return this.direct ? decode.toUpperCase() : decode.toUpperCase().split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;