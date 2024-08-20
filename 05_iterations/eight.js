const mynum = [ 1, 2 ,3 ]

// const myTotal = mynum.reduce(function(acc , currval){
//     console.log(`acc: ${acc} and currval :${currval}`);
    
//     return acc + currval    

// }, 3)

const myTotal = mynum.reduce((acc, curr) => acc + curr , 0)

console.log(myTotal);

const shoppingcart =  [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName : "py course",
        price: 999
    } ,
    {
        itemName : "app dev course",
        price:5999
    } , 
    {
        itemName : "mob dev course" ,
        price:12999
    }
]
 const priceToPay = shoppingcart.reduce((acc, item) => acc + item.price , 0)

 console.log(priceToPay);
 