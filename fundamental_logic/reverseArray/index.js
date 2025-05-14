// function reverseArray(arr) {
//   // code here
//   return arr.reverse();
// }

function reverseArray(arr) {
  // code here
  let result = [];

  for (let i = arr.length; i > 0; i--) {
    result.push(i);
  }

  return result;
}

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
