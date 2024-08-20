const lang = ["js" , "ruby" , "python" , "java"]

// lang.forEach( function (item) {  // normal function
//     console.log(item);
    
// } )

// lang.forEach( (item) => {    // arrow functions
//     console.log(item);
    
// })

// function printme(item) {
//     console.log(item);
// }

// lang.forEach(printme)  // function can be call in foreach

lang.forEach( (item , index , arr) => {  // it prints value index and array.
    // console.log(item ,index, arr);
    
} )

const myCoding = [
    {
    languageName: "Javascript" ,
    languageFile: "Js"

} ,
{
    languageName: "C plus plus" ,
    languageFile: "Cpp"
} ,{
    languageName: "JAVA" ,
    languageFile: "J"
}
]

myCoding.forEach( (val) => {
    console.log(val.languageName);
    console.log(val.languageFile);
} )