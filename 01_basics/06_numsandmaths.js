const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(5));

const otherNumber = 123.877

console.log(otherNumber.toPrecision(3));

const anotherNumber = 11234.44
console.log(anotherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());  // us Standard
console.log(hundreds.toLocaleString('en-IN'));    //indian standard

//+++++++++++++  Maths ++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));   // abs changes negative value to positive value {+ becomes +}
console.log(Math.round(4.56));  //roundoff to the nearest integer
console.log(Math.ceil(4.56));  //ceil means ceiling --> always take upper value
console.log(Math.floor(4.99)); // floor always takes lower value
console.log(Math.sqrt(260));  //used to find square root
console.log(Math.pow(2 , 4)); // used to find power of the number {2-> base , 4->exponential power}
console.log(Math.min(4,4,4,2));  //used to find minimum value
console.log(Math.random());  // returns random value between 0 and 1
console.log((Math.random()*10) + 1); // decimal shifts after one place

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min);  //returns value between 10 and 20 















