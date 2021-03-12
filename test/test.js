const assert = require("assert");
const { expect } = require("chai");
const { fruitMerger } = require("../fruitMerger.js");

describe("Fruit Merger", () => {
  it("should not accept non strings", () => {
    const result = fruitMerger({}, "banana");
    expect(result).to.throw;
  });
  it("should merge fruit together", () => {
    const result = fruitMerger("pineapple", "apple");
    expect(result).to.equal("pineappleapple");
  });
});
