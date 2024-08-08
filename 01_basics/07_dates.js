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

var myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());  //it gives value from 1st January refrence

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1); // months starts from 0 thatswhy we add 1 so that user dont get confused.
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {weekday:"long", hour:"numeric"}))









