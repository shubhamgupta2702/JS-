const name = "shubham"  //normal way of introducing a string
const repocount = 50

// console.log(name + repocount + "value");   //outdated way of adding strings

console.log(`hello My name is ${name} and my repo count is ${repocount}`);   //string interpolation / string addition

const gameName = new String('shubhamg-sg-vg')  //mordern way of introducing a string
console.log(typeof gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toLocaleLowerCase);
console.log(gameName.length);
console.log(gameName.charAt(5));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4) //it always starts from zero ..doesnt support negative value!!
console.log(newString);

const anotherString = gameName.slice(-5,4)   //starts from back and ends on 4 character  eg--> shubhamg
console.log(anotherString);

const newStringOne = "     shubham    "
console.log(newStringOne);
console.log(newStringOne.trim());   // used to remove starting and ending spaces

const url = "https://shubham.com/shubham%20gupta"

console.log(url.replace('%20' , '_'));   //used to replace the value in string ('search value' , 'replace value')

console.log(url.includes('shubham'));  //used to search in the string

console.log(gameName.split('-'));  //used to convert string to array by using any character as split..











