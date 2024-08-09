const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = new Array('superman' , 'batman' , 'flash')


//marvel_heros.push(dc_heros)
//console.log(marvel_heros);  //it treats the whole dc heros array as an element of marvel heros
//console.log(marvel_heros[3][2]);  //accessing the 3rd element of 2nd element of marvel heros

const all_heros = marvel_heros.concat(dc_heros) //used to merge 2 arrays 
console.log(all_heros);
console.log(typeof all_heros);

const all_newHeros = [...marvel_heros, ...dc_heros]  // it is also way of merge 2 arrays
console.log(all_newHeros);

const another_array = [1,2,3,[4,5,6],7,[8,9]]
const real_another = another_array.flat(Infinity) //returns a new array with all sub-array elements concatenated into it
console.log(real_another);

console.log(Array.isArray("Shubham"));  //
console.log(Array.from("Shubham"));  //creates an array from the object shubham
console.log(Array.from({name:"shubham"}))  //intresting

let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1 , score2 , score3));  //returns a new array from  the set of elements








