

function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");

}

sayMyName()        // sayMyName is Refrence of Function !  sayMyName() is Excution of function.

function addTwoNumbers(number1,number2){   // values passes in function is called functions parameter.
    // let result = number1 + number2
    // return result
    return number1 + number2
}

addTwoNumbers(7,9)
addTwoNumbers(3 , "4")   //  js takes both as string
const result = addTwoNumbers(3 , 4)

console.log("Result:" , result);

function loginUserMsg(username){
    if (!username) {    // it means username == undefined
        console.log("Pls enter Username");
        
    }
    return `${username} just logged in`

}

// console.log(loginUserMsg("shubham"))
console.log(loginUserMsg());   // undefined

// function calculateCartPrice(...num1){   /// three dot is the rest operator which makes an array of all values
//     return num1
// }

// console.log(calculateCartPrice(200 ,300 , 400 , 700));

function calculateCartPrice(val1 , val2 , ...num1){   /// three dot is the rest operator which makes an array of all values
    return num1
}

console.log(calculateCartPrice(200 ,300 , 400 , 700));

//    Method of passing Array in the Function
const user = {
    username: "shubham",
    prices: "199"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

//    Another Method of passing object in a Function
handleObject({
    username: "shubham",
    price: "499"
})

const myNewArr = [200 , 300 , 400 , 600]

function returnThirdValue(getArray){
    return getArray[2]
}
console.log(returnThirdValue(myNewArr))  //passing array in a function
console.log(returnThirdValue([200 , 300  , 400 , 600]));   //another method of passing array in function

