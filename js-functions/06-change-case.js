// Напиши функцию которая заменяет регистр
// каждого символа в строке на противоположный.

// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = "";

// console.log(letters);

// for (const letter of letters) {
//   if (letter === letter.toLowerCase()) {
//     invertedString += letter.toUpperCase();
//   } else {
//     invertedString += letter.toLowerCase();
//     }

//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }

// console.log(invertedString);

const changeCase = function (string) {
  const letters = string.split("");
  let invertedString = "";

  for (const letter of letters) {
    const isInLoverCase = letter === letter.toLowerCase();
    invertedString += isInLoverCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
};

console.log(changeCase("qweRTY"));
console.log(changeCase("mAnGo"));
console.log(changeCase("AjAx"));
