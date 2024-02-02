// Assignment Operator

// let x = 10;
// let y = 5;

// x += y
// console.log(x)

let x = 10;
let y = 5;
 
x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;

// Comparison Operator

let g = 10;
let h = 12;

console.log(g > h)
console.log(g < h)

let c = 'yusuf';
let v = 2;

// console.log(c === 2)


// console.log(typeof(c))

let a = 10;
let b = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false

console.log(a < 15 ^ b > 15)

