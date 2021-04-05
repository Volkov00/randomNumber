'use strict'

function RanNumber(min, max) {
  let masInt = [];
  for (let i = 0; i < 10; i++){
    const hel = Math.floor(Math.random() * (max - min + 1)+min);
    masInt.push(+ hel);
  }
  return masInt;
}
console.log(RanNumber(100, 200));




