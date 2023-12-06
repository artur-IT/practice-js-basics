const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

let resultIsEven, sum;
// console.log(a, b, c);

getSum = (x, y, z) => {
  let big_1, big_2;
  const arguments = [x, y, z];
  const minNumber = arguments.indexOf(Math.min(...arguments));
  arguments.splice(minNumber, 1);
  big_1 = arguments[0];
  big_2 = arguments[1];
  return big_1 + big_2;
};
sum = getSum(a, b, c);

// czy parzysta?
isEven = (sum) => {
  let y = typeof sum;
  if (y !== "number") resultIsEven = null;
  else if (sum % 2) return (resultIsEven = false);
  else return (resultIsEven = true);
};
resultIsEven = isEven(sum);

showInfo = (a = 4, b) => {
  switch (b) {
    case null:
      return console.log(`Podany argument ${b} nie jest liczbą`);
    case true:
      return console.log(`Podany argument ${b} jest parzysty`);
    case false:
      return console.log(`Podany argument ${b} jest Nie parzysty`);
  }
};

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

showInfo(sum, resultIsEven);
