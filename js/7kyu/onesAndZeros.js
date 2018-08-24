const binaryArrayToNumber = arr => {
var stringyArray = arr.toString().split(',').join('');
  return parseInt(stringyArray, 2);
};
