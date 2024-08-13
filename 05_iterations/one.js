// for

// for (let index = 0; index < 10; index++) {
//     const element = index
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(` The inner loop value: ${j} and the outer loop value: ${i}`);
        // console.log(i + "*" + j + "=" + i*j);
    }
}
let myArr = ["flash", "batman", "superman"]
console.log(myArr.length);
    for (let index = 0; index < myArr.length; index++) {
         const element = myArr[index];
            // console.log(element);
}

// console.log(element);   No scope outside for loop

//    BREAK AND CONTINUE

for (let index = 0; index < 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        break    // when 5 detected it will wxit the loop
    }
    // console.log(`Value of i is ${index}`);
}

for (let index = 0; index < 10; index++) {
    const element = index;
    if (index == 5) {
        console.log(` Detected 5`);
        continue     // when  5 detected it will continue after 5 from 6
    }
    console.log(`Value of i is ${index}`);
}
