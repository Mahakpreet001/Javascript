const coding = ['js', "ruby", "java", "python", "cpp"]

// coding.forEach(function (item) {
//     console.log(item);
// });


// coding.forEach((item) => {
//     console.log(item);
// });


// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr); 
// });

const mycoding = [
    {
        languagename: "javascript",
        languagefile: "js"
    },
    {
        languagename: "python",
        languagefile: "py"
    },
    {
        languagename: "Ruby",
        languagefile: "rb"
    }
]

mycoding.forEach((item) => {
    console.log(item.languagename);
});