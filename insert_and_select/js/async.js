const { reject } = require("async");

console.log(1);
console.log(2);
console.log(3);

// setTimeout(() => {
//     console.log(4);
//     setTimeout(() => {
//         console.log(5);
//     }, 2000);    
// }, 3000);

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("1번");
//     }, 2000);
//     resolve("3번");
// }).then((result) => {
//     console.log(result);
// });

// console.log("2번");

const p = new Promise((resolve, reject) => {
    console.log("2번");
    console.log("2번");
    console.log("2번"); 
    resolve();                                               
});
p.then((response) => {
    console.log("3초뒤에 출력");
}).catch((error) => {
    console.log(error);
}).finally(() => {

});