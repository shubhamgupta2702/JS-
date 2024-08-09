// singleton
//object.create

//objects literals

const mySum = Symbol("key1")

const JsUser = {
    name: "shubham",
    "full name" :"Shubham Gupta",
    [mySum]: "mykey1",     //syntax for defining a symbol
    age :18,
    location: "Jaipur",
    email: "shubham@gmail.com",
    isLoggedIn: false ,
    lastLogginDay: ["Monday" , "Tuesday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySum]);


JsUser.email = "shubham@google.com"  // its a method to override the change in the key value pairs
Object.freeze(JsUser)               //used to freeze the object
JsUser.email = "shubham@microsoft.com"   
console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS User");
    
// }

// JsUser.greetingTwo = function(){
//     console.log('Hello JS User ${this.email}');
    
// }

// console.log(JsUser.greeting());
// console.log(JsUsergreetingTwo());


