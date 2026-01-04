// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('hi') === 'ih'
//   reverse('hello') === 'olleh'
//   reverse('CodingMoney') === 'yenoMgnidoC'


const input1="CodingMoney"
const input2="hello"
const input3="hi"
// using traditional for loop
const reverse1 = (str: string): string => {
  let reversed = "";

  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
};

// using for of
const reverse2 = (str: string): string => {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  
  }
  return reversed;
};

// using built-in functions
const reverse3 = (str: string): string => {

const reversed=str.split("").reverse().join("")
  
  return reversed;
};

console.log("Using Traditional for loop. Input:",input1,",Output:",reverse1(input1));
console.log("Using for of loop. Input:",input2,",Output:",reverse2(input2));
console.log("Using built in function. Input:",input2,",Output:",reverse3(input2));
