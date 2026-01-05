// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('coding money', 'money coding') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// solution 1
// const charMap=(str:string):Record<string,number> =>{
//     let charMap:Record<string,number>={}
//     str = str.toLowerCase().replace(/[\W]/g,'')
//     for (let char of str){
//         charMap[char]=++charMap[char] || 1
//     }
//     return charMap
// }

// function anagrams(stringA: string, stringB: string): boolean {
// const charMapA=charMap(stringA)
// const charMapB=charMap(stringB)

// if(Object.keys(charMapA).length!== Object.keys(charMapB).length) return false

// for (let key in charMapA){
//     if(charMapA[key] !==charMapB[key]) return false
// }
// return true

// }

// solution 2

// const charMap=(str:string):Record<string,number> =>{
//     let charMap:Record<string,number>={}
//     str = str.toLowerCase().replace(/[\W]/g,'')
//     for (let char of str){
//         charMap[char]=++charMap[char] || 1
//     }
//     return charMap
// }

const sorted = (string: string): string => {
  return string.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
};

function anagrams(stringA: string, stringB: string): boolean {
  const sortedA = sorted(stringA);
  const sortedB = sorted(stringB);
  if (sortedA != sortedB) return false;
  return true;
}

console.log(anagrams("Hi there", "Bye there"));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
