/* TUESDAY
Write a JavaScript function that takes two numbers as input and returns the larger number. Use the ternary operator (condition? valueIfTrue : valueIfFalse) for this task. */

function findLargerNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// console.log(findLargerNumber(2,7)); //output: 7
// console.log(findLargerNumber(9,1)); //output: 9



/*  WEDNESDAY
Write a JavaScript function that takes two arrays as input and returns a new array that contains all elements from both input arrays. Use the spread operator (...) to achieve this. */

//input: arr1, arr2
// output: arr1arr2

const arr1 = [1,2,3];
const arr2 = [4,5,6];

function combineArrays(arr1, arr2) {
  const combinedArrs = [...arr1,...arr2];
  return combinedArrs;
}

//console.log(combineArrays(arr1,arr2)); // output: [1,2,3,4,5,6]


/* THURSDAY
Write a JavaScript function that takes an array of numbers as input and returns a new array with all duplicates removed. Use the Set object to achieve this. */

function removeDuplicates() {

}

//console.log(removeDuplicates());

