// Arrays

const myArr = [0 , 1 ,2, 3, 4, 5 , true , "shubham"]
console.log(myArr[0]);

// Array Methods

myArr.push(7)  // used to add values in the array
myArr.push(3)
myArr.pop()  // pop is used to remove the last element of the array
myArr.unshift(9) // unshift add the element in the starting of the array and shift all other elements
myArr.shift()  // shift removes the starting element of the array

console.log(myArr.includes(9));  // it returns boolean type-> True or False that 9 includes in array or not
console.log(myArr.indexOf(9)); // it gives index of the element in the array.



const newArr = myArr.join() // it converts the array type into a string (Bind + Convert)

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// SLICE , SPICE

console.log("A", myArr);
const myn1 = myArr.slice(1,3) //slice doesnt take any portion from original array

console.log(myn1);
console.log("B" , myArr);
const myn2 = myArr.splice(1,3) //splice takes out the portion from the original array i.e ORIGINAL ARRAY WILL CHANGE
console.log("C" , myArr);

console.log(myn2);






