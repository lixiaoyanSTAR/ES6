const http =new EasyHttp;
// 请求数据
// http.get("http://jsonplaceholder.typicode.com/users")
//           .then((data)=>{
//               console.log(data);
//           })
//           .catch(err=>console.log(err))
// post user
// 传输数据
const data={
    name:"star",
    username:"小小",
    email:"110123@163.com"
};
// http.post("http://jsonplaceholder.typicode.com/users",data)
//       .then(data=>console.log(data))
//       .catch(err=>console.log(err));
// update user
//    http.put("http://jsonplaceholder.typicode.com/users/2",data)
//            .then(data=>console.log(data))
//            .catch(err=>console.log(err));
http.delete("http://jsonplaceholder.typicode.com/users/2")
           .then(data=>console.log(data))
           .catch(err=>console.log(err))