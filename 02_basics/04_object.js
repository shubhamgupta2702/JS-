// const tinderUser = new Object () // SINGLETON OBJECT
const tinderUser = {}              //  NON SINGLETON OBJECT

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "rock@gmail.com" ,
    fullname: {
        userfullname:{
            firstname: "Shubham",
            lastname: "Gupta"

        }
    }


}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b" , 3: "c"}
const obj2 = {4: "a" , 5: "b" , 6: "c"}

// const obj3 = {obj1  ,obj2}  // It stores obj2 in object 1

// const obj3 = Object.assign({} , obj1 , obj2)  // used to merge the two object #Low used way


const obj3 = {...obj1,...obj2}  // it used to merge objects #Best Way like an array.
// console.log(obj3);


  //          Array's Object  --> arrays k andr objects
const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id:2,
        email:"v@gmail.com"
    }
]
//  console.log(users[1].email)  // Methods for accessing the array's Object
 console.log(tinderUser);

 console.log(Object.keys(tinderUser));    // It gives the array of the keys in the Object-> tinderuser
 console.log(Object.values(tinderUser));  // It gives the array of the values in the Object-> tinderuser

 console.log(Object.entries(tinderUser));  // Every key value pair get turns into array of Object ->tinderuser

 console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // used to detect the property of the object. it returns boolean value.
 
 
 
 
 
const course = {
    coursename: "js in hindi" ,
    price: "999",
    courseInstructor: "Hitesh Sir"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course // calling syntax for functions(Object) // we can destructure the object like Instructor. Course structure key becomes instructor

console.log(Instructor);
// JSON format
// {
//     "name": "Shubham",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]







