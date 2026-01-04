// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// using build in function

const reverseInt1 = (n: number): number => {
  const reversed = n.toString().split("").reverse().join("");
  console.log(reversed);
  return parseInt(reversed) * Math.sign(n);
};
// using for of loop

const reverseInt2 = (n: number): number => {
  let reversed=""

  for(let char of n.toString()){
    reversed = char+reversed
  }

//   console.log(reversed);
  return parseInt(reversed) * Math.sign(n);
};

console.log("Using built in",reverseInt1(-51));
console.log("Using for of",reverseInt2(51));
