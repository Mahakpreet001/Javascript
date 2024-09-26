/*** Filter : only those values was passed whose condition is true   ***/


// const coding = ["js", "ruby","java","python","cpp"]
// const values = coding.forEach((item)=>{
//     console.log(item);
//     // return item;                        // still undefined
// })
// console.log(values);                       //undefined  : for each loop does not return values


const mynum = [1,2,3,4,5,6,7,8,9,10]
// const newnum1 = mynum.filter((num) => num>5)
// console.log(newnum1);                      // [6, 7, 8, 9, 10] : filter method returns a new array with the elements that pass the test implemented by the provided function.


// const newnum2 = mynum.filter((num) =>{
//     return num>4                           // we have to write return because we started the scope ,without return it will show empty array
// });
// console.log(newnum2);


// const newmun3 = []
// mynum.forEach((num) =>{
//     if(num>4)
//         newmun3.push(num)
// })

// console.log(newmun3);                         // if we want to do this with foreach then we have to make a new empty array and add the value to it.



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userbooks = books.filter((bk) => bk.genre === 'History')
const userbooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
})

// console.log(userbooks);