// Напиши функцию для поиска логина

const logins = ["m4ngoDoge", "kiwidab3st", "poly1scute", "aj4xth3m4n"];

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден.`;

// console.log(message);

// const findLogin = function (allLogins, loginToFind) {
//   //   let message = `Пользователь ${loginToFind} не найден.`;

//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Пользователь ${loginToFind} найден.`;
//     }
//   }
//   return `Пользователь ${loginToFind} не найден.`;
// };

const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден.`
    : `Пользователь ${loginToFind} не найден.`;
};

console.log(findLogin(logins, "m4nggjfoDoge"));
console.log(findLogin(logins, "kiwidab3st"));
console.log(findLogin(logins, "poly1scute"));
console.log(findLogin(logins, "aj4xth3m4n"));
