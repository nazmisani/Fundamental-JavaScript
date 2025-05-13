// My way
// function isPalindrome(str) {
//   // code here
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   if (reversed === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("nala")); // false
