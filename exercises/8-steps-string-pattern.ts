// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n: number) {
    let char='#'
  for (let i = 1; i <= n; i++) {
    console.log("'"+char.repeat(i)+" '")
    // for (let j = 1; j <= i; j++) {
    //     console.log("'"+char.repeat(j)+" '")
    // }
  }
}
function steps2(n: number) {
    let char='#'
    let lines=""
    let space=""
  for (let i = 1; i <= n; i++) {
    // console.log("'"+char.repeat(i)+" '")
    for (let j = 1; j <= n; j++) {
        if(j<=i){ lines=lines+char}
        else lines=lines+" "
       
    }
    console.log("'"+lines+"'")
    lines=""
  }
}

// steps(3);
steps2(6);
