//Practice writing simple functions in TypeScript

//basics

/**
 * Computes and returns the area of the triangle given its base and height.
 */
function triangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

/**
 * Consumes three numbers and produces their sum. If a number is negative, ignore it.
 */
function addNumbers(first: number, second: number, third: number): number {
  let sum = 0;
  sum += first > 0 ? first : 0;
  sum += second > 0 ? second : 0;
  sum += third > 0 ? third : 0;
  return sum;
}

/**
 * Returns true if the given number is a multiple of 3 or 7, false otherwise.
 */
function isMultiple(num: number): boolean {
  return num % 3 === 0 || num % 7 === 0;
}

//loops

/**
 * Multiplies two numbers together using a for loop
 */

function multiplicationLoop(x: number, y: number): number {
  let product = 0;
  for (let i = 0; i < y; i++) {
    product += x;
  }
  return product;
}

/**
 * Adds elements of an array using a for..of statement
 * Read about iterators here: https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
 */
function sumArray(arr: number[]): number {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

//arrays

/**
 * Filters out all failing grades from a list of grades, assume failing grade is anything below a 70
 * Use the filter method to solve this problem!
 */
function filterPassingGrades(grades: number[]): number[] {
  const passingGrades = grades.filter((grade: number) => grade >= 70);
  return passingGrades;
}

/**
 * Given a list of grades, adjust the grades if the last grade is less than 95.
 * Return new array with an extra 5 points to the last grade in the array if the grades need to be adjusted.
 * If the grades do not need to be adjusted, return a copy of the original array.
 * Do not use a loop to solve this problem!
 */
function adjustGrades(grades: number[]): number[] {
  let newGrades = [...grades];
  return newGrades[newGrades.length - 1] < 95
    ? newGrades.splice(
        newGrades.length - 1,
        1,
        newGrades[newGrades.length - 1] + 5
      )
    : newGrades;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
function allRGB(colors: string[]): boolean {
  const rgbcolors = colors.filter(
    (color: string): boolean =>
      color === "red" || color === "blue" || color === "green"
  );
  return colors.length === rgbcolors.length;
}

//strings

/**
 * Consumes a string and a keyword returns whether or not the string contains that word.
 * If the string is empty, return null.
 */
function containsWord(str: string, keyword: string): boolean | null {
  return str.length === 0 ? null : str.includes(keyword);
}

/**
 * Given a string, return a new string where "not " has been added to the
 * front. However, if the string already begins with "not", return the
 * string unchanged.
 */
function notString(str: string): string {
  return str.startsWith("not") ? str : "not " + str;
}

/**
 * Given a string, return a new string where the first and last characters
 * have been exchanged.
 */
function frontBack(str: string): string {
  return str.length <= 1
    ? str
    : str.slice(-1) + str.slice(1, -1) + str.slice(0, 1);
}
