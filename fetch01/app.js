// 构造函数：promise
// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve();
//     },3000);
//     // resolve();
//     // reject();
// });
// console.log(promise);
// promise
//        .then(()=>{console.log("成功，没有任何问题")})
//        .then(()=>{console.log("成功，可以无限调用")})
//        .catch(()=>{console.log("出重大问题了")})
let url="http://jsonplaceholder.typicode.com/posts";
// console.log(fetch(url));
fetch(url)
         .then(response=>response.json())
         .then(data=>console.log(data))