/* rozwiązanie z pętlą for */
// const x = 4;

const multiply = () => {
  const x = prompt("Podaj liczę: ");
  if (x >= 0 && x <= 9) {
    for (i = 0; i <= 9; i++) {
      console.log(x * i);
    }
  } else console.log("za duża liczba", multiply());
};

// multiply();

/* rozwiązanie z pętlą while  */

const a = 5;
const n = 3;

result = () => {
  let sum = 1;
  for (i = 1; i <= n; i++) {
    sum = sum * a;
  }
  console.log(sum);
};

result();
