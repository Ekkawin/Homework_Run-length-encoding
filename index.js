/*
 This function eliminate all of the white space between any word or character.
 It also a case sensitive function.

 TODO
    Make a feature to guide the passorword for users when they forget.
    If users click "forget password" botton, it will generate the missing characters followed by 
    the number of the missing of those characters.
    For example,
    User sets the password as "Skooldio" but user forgets the password. User inputs "School" as
    his/her password. This feature will generate "k1d1i1o1" when user clicks "forget password" button.
    It will guide user the missing character. Eventually, user can guess their password.


*/

let argument = '';
for (let k = 2; k < process.argv.length; k++) {
  argument = argument + process.argv[k];
}
const input = argument || '';

const encode = require('./encode')(input);
console.log(encode);
