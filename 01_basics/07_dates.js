//Dates

var myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

var myCreatedDate = new Date(2023 , 0 ,23 , 5 ,5)  // Months starts from 0 in Array
console.log(myCreatedDate.toLocaleString());

var myNewDate = new Date("01-14-2024")  // months starts from 1 in Object  //mm-dd-yy
console.log(myNewDate.toLocaleString());








