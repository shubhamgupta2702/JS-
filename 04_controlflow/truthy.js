const usermail = []

if (usermail) {
    console.log("Got user email");
    
} else {
    console.log("Doesn't have user email")
    
}


//   FALSY VALUES
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// TRUTHY VALUES
//  true , "0" , 'false' or "false", " " , [] , {} , function (){} 

if (usermail.length ===0) {
    console.log("Array is empty");
    
    
} else {"array is not empty"}

const emptyobj = {}    /// truthy values -> it is true and forced to be true

if (Object.keys(emptyobj).length ===0) {
    console.log("obj is empty");
    
    
} else {
    console.log("Obj is not empty");
    
}

//  NULLISH COALESCING OPERATOR (??) : NULL UNDEFINED 
// IT returns left hand side operand when its right hand side operand is "null" or "undefined" and vice versa.

// let value1= 5 ?? 10
// let value1= 245 ?? null
// let value1= 20 ?? undefined
// let value1= "." ?? ""

let value1= null ??10 ??3
console.log(value1);


//      TERNARY OPERATOR

//conditon  ? true : false   


const shakeprice = 299
shakeprice <= 300 ? console.log("less than 300") : console.log("greater than 300");

