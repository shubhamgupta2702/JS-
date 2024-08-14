//  for of

//  ["" ,"" , "" ]
//  [{} , {} , {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {  // object means where to apply loop
    //console.log(num);  // no need to declare any increament operator it will detect everything about the array or object

}

const greeting = "Hello World"
for (const greet of greeting) {
    if (greet == " ") {
        // console.log("Space detected !");
        continue


    }
    // console.log(`each char is ${greet}`);


}

// Maps

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('FR' , "France")

// console.log(map);

for (const [key] of map) {  // use this syntax for printing key only --> destructure of map
    // console.log(key);
    
}

for (const [key ,value] of map) {  // destructure of the map.
    // console.log(key , ":-" , value);
    
}
const gamename = {
    'game1' :"NFS" ,
    'game2' : "BGMI"
}

// for (const [key , value] of gamename) {  // object is not iteratable in forof loop..
//     console.log(key , value);
    
// }

