// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('How are you?') --> 5
//   vowels('Coding Money') --> 4
//   vowels('why?') --> 0 

function vowels(str:string):number {
const vowels=["a","e","i","o","u"]
let result=0
for (let char of str){
if (vowels.includes(char)) result+=1
}
return result
}

console.log(vowels('Coding Money'));
