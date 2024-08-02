//  Primitive

// 7 types : String, number , boolean , null , undefined , symbol , bigInt

const score  = 100
const scorevalue  = .1

const isLoggedIn = false
const outsideTemmp = null
let userEmail;  //its undefined

//Both are unique due to use of symbols
const id = Symbol('123')  
const anotherId = Symbol('123')

console.log(id=== anotherId);  //Not same

// const bigNumber = 476274672389432984792374n  ==> it is in BIG INT


//Reference (Non primitive)

//Arrays , Objects , Functions

const heros = ["shaktimaan" , "naagraj" , "doga"];

let myObj = {
    name: "shubham",
    age: 18,
}

 const myfunction = function(){
    console.log("Hello World");
    
 }