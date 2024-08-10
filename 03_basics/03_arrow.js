const user = {
    username: "panda",
    price: "99",

    welcomeMsg: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}
user.welcomeMsg()
// user.username = "shubham"
user.welcomeMsg()

console.log(this);

// function panda() {
//     let username = "shubh"
//     console.log(this.username);
    
    
// }

// const panda = function(){
//     let username = "shubh"
//     console.log(this.username);
// }

// panda() 

// ---------------------------------------  ARROW FUNCTIONS --------------------------------------


const panda = () => {
    let username = "shubh"
    console.log(this);
}
// panda()

            // 1ST WAY OF DECLARING ARROW FUNCTIONS


// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

            // 2ND WAY OF DECLARING ARROW FUNCTIONS

// const addTwo = (num1 , num2) => num1 + num2  // 

            // 3RD WAY OF DECLARING ARROW FUNCTIONS   #MOST USED METHOD

const addTwo = (num1 , num2) => (num1 + num2)  // no need to write return while using parethesis

console.log(addTwo(7 , 8));
