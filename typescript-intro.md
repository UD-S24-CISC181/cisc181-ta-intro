# TypeScript Basics
This is by no means a comprehensive TypeScript course! Here, I have summarized some essential basics you'll find helpful as you're learning, practicing, or refreshing yourself. Think of this like a "cheat sheet" in a way.
If this is your first experience with TS, you will definitely want to utilize other resources to learn as well.

- [What is TypeScript?](#what-is-typescript)
- [Basic Types](#basic-types)
- [Logging](#logging)
- [Variables](#variables)
- [Arrays](#arrays)
- [Functions](#functions)
- [Equality](#equality)
- [Objects](#objects)
    - [Interfaces](#interfaces)
    - [Classes](#classes)
- [Testing](#testing)


## What is TypeScript?
TypeScript is a programming language that adds static typing to JavaScript. It helps catch errors early in development, making code more reliable. With static typing, developers can declare types for variables and functions, improving code clarity. TypeScript works well with existing JavaScript code, allowing for a smooth transition. It offers enhanced tooling support, making it easier for developers to write and maintain large-scale applications. It's an object-oriented language, and very popular, hence why we are using it for CISC181!

## Basic Types
**The three primitive types:**
- `string`: represents string values like `"Hello, world"`
- `number`: there is no distinguished type for ints & floats in TypeScript, it is all represented as a `number`
- `boolean`: `true` or `false`

There are other types, such as `null`, `undefined`, `enum`, and we will also get into object types below.

Don't use the `any` type :-)

## Logging
Logging is just "printing" data. You do this with `console.log`

```typescript
console.log("Hello World!");
//you would see "Hello World!" in your developer console
```

## Variables
You can declare variables with `const` or `let` (there is also `var` but that is old, and although it's possible, don't use it)

- `const` is used for unchanged, "constant" variables
- `let` is used for declaring variables that may be reassigned/changed later

Here's how to declare variables:
```typescript
//you can type variables before they are declared:
const CONSTANT_VALUE: number;

//or while you are declaring them:
let myName: string = "Faith";

//or, you don't have to type the variable at all:
let count = 0;
```

## Arrays
There are two ways to delcare an array:
- *type*[]
- Array<*type*>

...where you replace *type* with the value type of the array.

```typescript
//an array of numbers
let myArray: number[];
myArray = [0, 1, 2, 3, 4];

//another array, but of strings
let anotherArray: Array<string> = ["cat", "dog", "wolf", "sheep", "horse"];
```

## Functions
You can define functions using the `function` keyword or with arrow `=>` syntax. Typing the parameters is optional in TypeScript, but required for the purpose of this class. If the function returns nothing, you can use the `void` return type.

```typescript
//using the function keyword
function add(a: number, b: number): number {
    return a + b;
}

//using arrow (aka lambda) syntax
const sayHi = (name: string): void => {
    console.log("Hi ", name);
}
```
In the context of OOP, there are differnces between using function syntax or arrow syntax. [This Stack Overflow post](https://stackoverflow.com/questions/34361379/are-arrow-functions-and-functions-equivalent-interchangeable) explains it very well, please read it!

You can also use union types, which represents values that could be any one of the specified types. It is simply written with `|` between the types the value could be.
The example below shows its use in the function's return type, but it can be used anywhere. TypeScript will only allow an operation if it is valid for *every* member of the union. 
Read more about it in [the handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)!

```typescript
//returns true if the string contains "yes," false if the string contains "no," and null if the string contains neither or both
function yesOrNo(sentence: string): boolean | null{
    const yes = sentence.includes("yes");
    const no = sentence.includes("no");
    return yes && !no ? true : !yes && no ? false : null; 
}
```

Side note, you should how to use the ternary operator (above) if you don't already. Here's the function with the return written as if/else:

```typescript
function yesOrNo(sentence: string): boolean | null{
    const yes = sentence.includes("yes");
    const no = sentence.includes("no");
    if(yes && !no){
        return true;
    }
    else if (!yes && no){
        return false;
    }
    else{
        return null;
    }
}
```


## Equality
TypeScript has all the usual logical operators; I've already used some in my examples.

When you are testing for equality, you can use `===`, `!==`, `==`, and `!=`.\
**There is a difference between `===` and `==`!** You will want to use `===` for "strict equality" and in most cases, this is what you will use.
You can read more about this [here](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#equality-narrowing) if you'd like, but it's important you know what to use.


## Objects
You can use interfaces or classes for objects.

*What's the difference?*\
In short: An interface doesn't have things like constructors & default values, and you do not instantiate them. You would use this to structure or outline data.
In classes, you can set default values and create functions.

There's more difference than this, but you can read more about it (and the difference become more clear in examples).
- [TypeScript Handbook on Interfaces & Classes](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#interfaces)
- [Classes vs. Interfaces](https://passionfordev.com/typescript-classes-vs-interfaces/) - very detailed explanation with examples!


### Interfaces
[The TypeScript Interface cheat sheet is very helpful!](https://www.typescriptlang.org/static/TypeScript%20Interfaces-34f1ad12132fb463bd1dfe5b85c5b2e6.png)

Interfaces are used to define the "shape" of objects. You define an interface with a name, and attributes with their respective types:

```typescript
interface House{
    floors: number;
    color: string;
    vacant: boolean;
    residents: number;
}
```

You then can create objects that fulfill the attributes listed above.
```typescript
const myHouse: House = {floors: 3, color: "brown", vacant: false, residents: 4};

//to access these attributes like so:
const myResidents: number = myHouse.residents;
```

### Classes
[The TypeScript Class cheat sheet is very helpful!](https://www.typescriptlang.org/static/TypeScript%20Classes-83cc6f8e42ba2002d5e2c04221fa78f9.png)

To declare classes, use the `class` keyword. You can create fields with properties of the class that you would like to include, with either just their types or with a value.

```typescript
//here, we are creating a class Car that has 4 wheels, and one of the attributes we will need to define is its color.
class Car{
    wheels: number = 4;
    color: string;
}
```

You can create a constructor of a class using `constructor`:

```typescript
class Car{
    wheels: number = 4;
    color: string;

    constructor(color: string){
        this.color = color;
    }
}
```

Lastly, here is an example of a simple method that will log something.

```typescript
class Car{
    wheels: number = 4;
    color: string;

    constructor(color: string){
        this.color = color;
    }
    
    horn(){
        console.log("honk");
    }
}
```

With this class, I can instantiate it with `new` and use the methods I created.

```typescript
//creating a car
let newCar = new Car();

//honking the horn
newCar.horn();
//"honk" would be logged.
```

Using these basics, you will be able to apply your knowledge of OOP in TypeScript. You are able to use inheritance, super calls, getters/setters, etc.

## Testing
We will write unit tests using [Jest](https://jestjs.io/). In this repository, all you will need to do is `npm install` for the required packages.

It's easier to take an example and break it down. Assume the function isMultiple takes a number and returns a boolean whether or not the number is a multiple of 3 or 7.
```typescript
describe('isMultiple function', () => {
  test('Should return true for multiples of 3', () => {
    expect(isMultiple(6)).toEqual(true);
    expect(isMultiple(9)).toEqual(true);
    expect(isMultiple(12)).toEqual(true);
  });
});
```

The `describe` function groups related tests together. In this case, we could add multiple tests below the first one to test the function.
The `test` function defines individual test cases (in the example, testing multiples of 3)
We then use `expect(value).toEqual(value)` to `expect` the result of our function call `toEqual` the correct result.

If everything is set up correctly, you can use `npm run test` to run your tests. In this repository, some of the test files are blank for you to fill in. Empty test files ("test suites") will appear as failed when you run it until you add tests.
