// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str: string): string {
  let charMap: any = {};

  for (let char of str) {
    if (charMap[char]) charMap[char] += 1;
    else charMap[char] = 1;
  }

//   const [key,value]=Object.entries(charMap)

let max=0
let maxChar=""
for (const [key,value] of Object.entries(charMap)){
    if(Number(value)>max) {
        max=Number(value)
        maxChar=key
    }
  
}
 
  return maxChar;
}

// using for in
function maxChar1(str: string): string {
  let charMap: any = {};

  for (let char of str) {
    if (charMap[char]) charMap[char] += 1;
    else charMap[char] = 1;
  }

//   const [key,value]=Object.entries(charMap)

let max=0
let maxChar=""
for (let key in charMap){
if(charMap[key]>max){
    max=charMap[key]
    maxChar=key
}
  
}
 
  return maxChar;
}

console.log(maxChar("abcccccccd"))
console.log(maxChar1("abcccccaaaaaaaaaaaaaaccd"))
