const lang = ["js", "ruby", "python", "java"]


// const value = lang.forEach((item) => {
//     console.log(item);
// })

// console.log(value);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4)
// no need to write return keyword bcoz no use of curly braces.

// console.log(newNums);

// const other = myNums.filter((num) => {   // return keyword is must
//     return num > 4
// })

// console.log(other);

// const newNums = []

// myNums.forEach((num) => {
//     if (num>4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    {
        title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004
    },
    {
        title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008
    },
    {
        title: 'Book Three', genre: 'History', publish: 1999, edition: 2007
    },
    {
        title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010
    },
    {
        title: 'Book FIve', genre: 'Science', publish: 2009, edition: 2010
    },
    {
        title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010
    },
    {
        title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996
    },
    {
        title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016
    },
    {
        title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989
    },

]
// filter used to fetch the data 
const userBooks = books.filter((bk) => bk.genre === 'History' )

const mybooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === "History")

console.log(mybooks);
