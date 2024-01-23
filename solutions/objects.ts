/**
 * Practice with objects/ interfaces
 * See: https://www.typescriptlang.org/docs/handbook/2/objects.html
 */

/**
 * Create an interface called Person that has the following properties:
 * firstName (a string)
 * lastName (a string)
 * age (a number)
 */
export interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

/**
 * Create a person object called person1 and fill in the properties with your information.
 */
let person1: Person = {
  firstName: "Faith",
  lastName: "Lovell",
  age: 20,
};

/**
 * Create an interface called CandyJar that has the following properties:
 * chocolates (a number)
 * gummies (a number)
 * lollipops (a number)
 * owner (a Person)
 */
export interface CandyJar {
  chocolates: number;
  gummies: number;
  lollipops: number;
  owner: Person;
}

/**
 * Create a function that takes in a CandyJar and returns the total number of candies in the jar.
 */
export function totalCandies(candyJar: CandyJar): number {
  return candyJar.chocolates + candyJar.gummies + candyJar.lollipops;
}
