function countVowels(string) {
  let result = 0;

  let lowString = string.toLowerCase();
  //   console.log(lowString);

  for (let i = 0; i < lowString.length; i++) {
    // console.log(lowString[i]);

    if (
      lowString[i] === "a" ||
      lowString[i] === "i" ||
      lowString[i] === "u" ||
      lowString[i] === "e" ||
      lowString[i] === "o"
    ) {
      result += 1;
    }
  }

  return console.log(result);
}

countVowels("Hello World");
// Output: 3
// Penjelasan: Huruf vokal = 'e', 'o', 'o'

countVowels("JAVASCRIPT");
// Output: 3
// Penjelasan: Huruf vokal = 'A', 'A', 'I'

countVowels("Ngoding itu asyik!");
// Output: 6
// Penjelasan: Huruf vokal = 'o', 'i', 'i', 'u', 'a', 'i'
