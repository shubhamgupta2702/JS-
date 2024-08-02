const name = "shubham"  //normal way of introducing a string
const repocount = 50

// console.log(name + repocount + "value");   //outdated way of adding strings

console.log(`hello My name is ${name} and my repo count is ${repocount}`);   //string interpolation / string addition

const gameName = new String('shubhamg')  //mordern way of introducing a string
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toLocaleLowerCase);
console.log(gameName.length);
console.log(gameName.charAt(5));
console.log(gameName.indexOf('h'));



