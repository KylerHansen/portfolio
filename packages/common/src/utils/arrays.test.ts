import { describe, it } from "mocha";
import { assert } from "chai";
import { areArraysStrictlyEqual } from "./arrays";

describe(areArraysStrictlyEqual.name, () => {
  it("rejects two arrays who have different types but are of the same length", () => {
    //@ts-expect-error  both types of arrays must match.
    areArraysStrictlyEqual(["a"], [4]);
  });

  it("rejects two arrays of differing length", () => {
    assert.isFalse(areArraysStrictlyEqual([2], [3, 4]));
  });

  it("rejects arrays with differing order", () => {
    assert.isFalse(areArraysStrictlyEqual([4, 3], [3, 4]));
  });

  it("accepts strictly equal arrays", () => {
    assert.isTrue(areArraysStrictlyEqual([1, 2, 2, 3, 4], [1, 2, 2, 3, 4]));
  });
});
