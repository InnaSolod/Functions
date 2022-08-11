function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  let total = message.split(" ").length;
  return total * pricePerWord;

  // Change code above this line
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
