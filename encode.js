module.exports = (input) => {
  const value = input.replace(/ /g, '');

  const extractString = (a) => value.substr(a, 1);
  let result = '';

  for (let i = 0; i < value.length; i++) {
    let nonExistingString = result.indexOf(extractString(i)) === -1;
    let count = 0;
    if (nonExistingString) {
      result = result + extractString(i);
      for (let j = i; j < value.length; j++) {
        if (extractString(i) === extractString(j)) {
          count = count + 1;
        }
      }
      result = result + count;
    }
  }
  if (result === '') {
    return 'Please Input Something';
  } else {
    return result;
  }
};
