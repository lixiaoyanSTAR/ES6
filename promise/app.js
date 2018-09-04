// 构造函数：promise
let promise=new Promise((resolve,reject)=>{
    // resolve();
    reject();
});
console.log(promise);
promise
       .then(()=>{console.log("成功，没有任何问题")})
       .then(()=>{console.log("成功，可以无限调用")})
       .catch(()=>{console.log("出重大问题了")})