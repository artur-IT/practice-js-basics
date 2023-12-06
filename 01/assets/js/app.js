const a = "1";
const b = 9;
// console.log(a, b);

// console.log(parseFloat(a) + b);
// console.log(a * b);
// console.log(b % a);
// console.log(a ** a);

const add = parseFloat(a) + b;
const multiply = a * b;
const modulo = b % a;
const potency = a ** a;

const result = [add, multiply, modulo, potency];
const number = 2;

for (item of result) {
  // console.log(item);
  if (item > number) {
    console.log(`Wynik działania to: ${item}, czyli jest większy od ${number}`);
  } else console.log(`Wynik działania to: ${item}, czyli jest mniejszy od ${number}`);
}
