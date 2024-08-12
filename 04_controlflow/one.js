// if

const isUserLoggedIn = true
const temperature = 41

// if (temperature === 40) {
//     console.log("less than 50");
// } else{
//     console.log("greater than 50");
    
// }

// < , > ,<= ,>= ,!= , === , !==

const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`UserPower: ${power}`);
}
// console.log(`UserPower: ${power}`);    // No scope outside if else

const balance = 1000

// if (balance>500) console.log("test"), console.log("test2");  // must ends up with semicolon  !!  NOT A GOOD CODER PRACTICE LIKE THIS

//  -------------------------------- NESTED ELSE IF -----------------------------------------------------------

// if (balance <500) {
//     console.log("less than 500");
// } else if (balance <700) {
//     console.log("less than 750");
    
// } else if (balance < 999) {
//     console.log("less than 999");
    
    
// } else {
//     console.log("greater than 1000");
// }


const userLoggedIn = true
const debitcard = true
const loogedInfromGoogle = false
const loggedInFromGmail = true

if (userLoggedIn && debitcard  && 2==="2") {    // all the conditions must be true--> and operator
    console.log("Allow to buy course");
}

if (loggedInFromGmail || loogedInfromGoogle) {  // one of the conditon must be true --> or Operator
    console.log("User Logged In");
    
    
}