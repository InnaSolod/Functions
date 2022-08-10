// Напиши функцию для поиска самого маленького числа в массиве.

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallesNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallesNumber) {
//     smallesNumber = number;
//   }
// }
// console.log(smallesNumber);

const findSmallesNumber = function (numbers) {
  let smallesNumber = numbers[0];

  for (const number of numbers) {
    if (number < smallesNumber) {
      smallesNumber = number;
    }
  }
  return smallesNumber;
};

console.log(findSmallesNumber([3, 8, 12, -2, 15]));
console.log(findSmallesNumber([100, 54, 8, 12, 47]));
console.log(findSmallesNumber([7, 21, 84, 15, 4]));
