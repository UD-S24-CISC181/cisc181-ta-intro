import { totalCandies, CandyJar } from "./objects";

describe("totalCandies function", () => {
  test("calculates total candies correctly", () => {
    const candyJar: CandyJar = {
      chocolates: 5,
      gummies: 10,
      lollipops: 3,
      owner: {
        firstName: "John",
        lastName: "Doe",
        age: 25,
      },
    };

    expect(totalCandies(candyJar)).toEqual(18);
  });

  test("handles empty candy jar", () => {
    const emptyCandyJar: CandyJar = {
      chocolates: 0,
      gummies: 0,
      lollipops: 0,
      owner: {
        firstName: "Empty",
        lastName: "Jar",
        age: 30,
      },
    };

    expect(totalCandies(emptyCandyJar)).toEqual(0);
  });

  test("handles negative candies", () => {
    const negativeCandyJar: CandyJar = {
      chocolates: -2,
      gummies: 5,
      lollipops: 8,
      owner: {
        firstName: "Negative",
        lastName: "Candies",
        age: 22,
      },
    };

    expect(totalCandies(negativeCandyJar)).toEqual(11);
  });
});
