//    {} --> Scope
var c = 300 
let a = 400    // Let is Block Scoped.
if (true) {

    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner:" , a);
    
}
//  console.log(a);
 
// console.log(a);
// console.log(b);
// console.log(c);


function one(params) {
    const username= "Shubham"

    function two(params) {
        const website = "Telegram"
        console.log(username);
        
        
    }
    //console.log(website);  --> scope ends here, because its scope is in function two.


    // two()
}

// one()

if (true) {
    const username = "shubham"
    if (username === "shubham") {
        const website = " youtube"
        console.log(username + website);
        
        
    }
    // console.log(website);    error --> scope not defined
    
    
}
// console.log(username);  error --> scope is not defined here for username



// ========================   intresting   ================================
//              2 WAYS OF DECLARING A FUNCTION

addone(5) // --> we can access this function | this way of declaration supports early access.
console.log(addone(5));

function addone(num) {
    return num +1
    
}


// addTwo(5)   --> we cannot access this function first| this way of declaration not support early access.
const addTwo = function(num) {
    return num +2
    
}
addTwo(5)
