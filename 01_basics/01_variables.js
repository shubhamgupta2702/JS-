const accountId = 2702
let accountEmail = "sgupta4345@google.com"
var accountPassword = "1234"
accountCity = " Jaipur"    //variables can also be declared by this way!!
let accountState;

// accountId = 2 // Not allowed !!!

accountEmail = "sgsg@gmail.com"
accountPassword = "9878584"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var..
bcoz of issue in block scope and functional scope. 

*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])