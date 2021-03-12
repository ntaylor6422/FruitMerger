function fruitMerger(fruitOne, fruitTwo) {
  if (typeof fruitOne !== "string" || typeof fruitTwo !== "string")
    return new Error("Only fruit please");

  return fruitOne + fruitTwo;
}

module.exports = { fruitMerger };
