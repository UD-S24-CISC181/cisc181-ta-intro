# TypeScript Basics
This is by no means a comprehensive TypeScript course! Here, I have summarized some essential basics you'll find helpful as you're learning, practicing, or refreshing yourself. Think of this like a "cheat sheet" in a way.
If this is your first experience with TS, you will definitely want to utilize other resources to learn as well.

## What is TypeScript?

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

## Objects
You can use interfaces or classes for objects.

*What's the difference?*\
In short: An interface doesn't have things like constructors & default values, and you do not instantiate them. You would use this to structure or outline data.
In classes, you can set default values and create functions.

It's a little more complicated than this, but you can read more about it (and the difference become more clear in examples).
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
class Car{
    wheels: number = 4;
    color: string;

}

```

## Equality

## Functions

## 


