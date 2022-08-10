// Псевдомассив arguments и Array.from

// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);

//   console.log(args);
// };

const fn = function (...args) {
  console.log(args);
};

fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);

// Напиши функцию add для сложения произвольного количества аргументов (чисел)
