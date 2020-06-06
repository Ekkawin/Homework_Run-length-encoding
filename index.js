/*
 This function eliminate all of the white space between any word or character.
 It also a case sensitive function.

*/

let argument = '';
for (let k = 2; k < process.argv.length; k++) {
  argument = argument + process.argv[k];
}
const input = argument || '';

const encode = require('./encode')(input);
console.log(encode);
