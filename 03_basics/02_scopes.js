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
    //console.log(website);  --> scope ends here because its scope is in function two


    two()
}

one()

