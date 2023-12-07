createArray = (min, max) => {
  let newArr = new Array(20);
  for (i = 0; i < 20; i++) {
    const x = Math.floor(Math.random() * (max + 1 - min) + min);
    newArr[i] = x;
  }
  return newArr;
};

//------------------------------
sortArray = (arr) => {
  function copmpareNr(a, b) {
    return a - b;
  }
  const sortedArray = arr.sort(copmpareNr);
  const cutedArr = sortedArray.slice(sortedArray.length - 10, sortedArray.length);
  return cutedArr;
};

//--------------------------------
averageFromArray = (table) => {
  const sum = table.reduce((accum, item) => accum + item);
  return sum;
};

//------------
// ALL in ONE
(init = () => {
  const rangeNumbersArr = createArray(10, 200);
  const getLargestNumbers = sortArray(rangeNumbersArr);
  const averageArithmetic = averageFromArray(getLargestNumbers);
  console.log(`Tablica z wylosowanymi liczbami: ${rangeNumbersArr}`);
  console.log(`Największe numery to: ${getLargestNumbers}`);
  console.log(`Średnia arytmetyczna z największych liczb to: ${averageArithmetic}`);
})();
