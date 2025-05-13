function countLetters(str) {
  // code here
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += 1;
    }
  }
  return result;
}

console.log(countLetters("hello world")); // 10
console.log(countLetters("javascript")); // 10
