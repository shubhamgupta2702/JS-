//  IMMEDIATELY INVOKED FUNCTIONS EXPRESSIONS (IIFE) --> it is used for immedietly execute the functions expresions and used to save the functions from globally scoped pollutions.


(function chai(){
    // named IIFE 
    console.log(`DB CONNECTED`);
})();   // first parenthesis used to save the function from global scope pollution and second parenthesis is used to excute the function.
//semicolon is must for ending the IIFE

((myname) => {
    // IFFE
    console.log(`DB CONNECTED ${myname}`);
})("shubham")  //input for myname