// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. 

// --- Examples:
//   palindrome("kayak") === true
//   palindrome("madam") === true
//   palindrome("codingmoney") === false

// using built in functions
const palindrome1=(str:string):boolean=>{

    const isPallindrome=str.split("").reverse().join("")===str
    return isPallindrome
}
// using built in functions
const palindrome2=(str:string):boolean=>{
let reversed=""
for(let char of str){
reversed=char+reversed
}
return reversed===str
}
// using for of loop
const palindrome3=(str:string):boolean=>{
let reversed=""
for(let i=0;i<str.length;i++ ){
reversed=str[i]+reversed
}
return reversed===str
}

console.log("using built in functions",palindrome1("madam"))
console.log("using built in functions",palindrome2("mada"))
console.log("using for of loop",palindrome2("mada"))

// two pinters techniques




