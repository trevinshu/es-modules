/*
Module can have one default export. 
Modules can have unlimited exports.
*/

// import sayHello from './sayHelllo';

// console.log(sayHello());

/* 
Promises 
Asyn Programming

req for data --------------- request
return data ---------------- response

mimic setTimeout(()=>{},delay)
*/

// function asyncTask() {
//   //firebase return promises
//   //grab data from data
//   //data success resolve
//   //an then there is an error reject
//   const num = Math.random() * 10;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num > 5) {
//         resolve('you got data');
//       } else {
//         reject('error');
//       }
//     }, 1500);
//   });
// }

// let store = [];
// asyncTask()
//   .then((theData) => {
//     console.log(theData);
//     //configUI
//   })
//   .catch((error) => console.log(error));

import { dataFetcher } from './utilities/dataFetcher';

// console.log(dataFetcher());

const temp = dataFetcher('https://jsonplaceholder.typicode.com/posts/1');

temp.then((data) => {
  console.log(data);
});
