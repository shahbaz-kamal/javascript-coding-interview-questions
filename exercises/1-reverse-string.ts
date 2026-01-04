// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('hi') === 'ih'
//   reverse('hello') === 'olleh'
//   reverse('CodingMoney') === 'yenoMgnidoC'

const reverse = (str: string): string => {
  let reversed = "";

  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
    console.log("Using traditional for loop", reversed);
  }
  return reversed;
};
const reverse2 = (str: string): string => {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
    console.log("Using for of loop", reversed);
  }
  return "s";
};
const reverse3 = (str: string): string => {


  
  return "s";
};

console.log(reverse("CodingMoney"));
