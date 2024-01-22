# TypeScript Basics
This is by no means a comprehensive TypeScript course! Here, I have summarized some essential basics you'll find helpful as you're learning, practicing, or refreshing yourself. Think of this like a "cheat sheet" in a way.
If this is your first experience with TS, you will definitely want to utilize other resources to learn as well.

## What is TypeScript?

## Types
**The three primitive types:**
- `string`: represents string values like `"Hello, world"`
- `number`: there is no distinguished type for ints & floats in TypeScript, it is all represented as a `number`
- `boolean`: `true` or `false`

There are other types, such as `null` and `undefined`, and we will also get into object types below.

Don't use the `any` type :-)

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



## Classes

## Logging

## Equality

## Functions

## 


