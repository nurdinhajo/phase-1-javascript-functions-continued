// code your solution here

//  defines mondayWork function expression as specified:
function saturdayFun(activity = 'roller-skate'){
 return `This Saturday, I want to ${activity}!`
}


// defines mondayWork function expression as specified

function mondayWork(activity = "go to the office"){
 return `This Monday, I will ${activity}.`
}

// defines wrapAdjective function according to the specification

function wrapAdjective(highlight = "*") {
 return function(adjective) {
   return `You are ${highlight}${adjective}${highlight}!`;
 }
}
