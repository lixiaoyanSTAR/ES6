// 键值对：与对象不同的是键和值可以是任何类型
const map1=new Map();
// 设置key值
const key1='some string',
      key2={},
      key3=function(){

      };
    //   为key设置value值
    map1.set(key1,'value of key1');
    map1.set(key2,'value of key2');
    map1.set(key3,'value of key3');
    // 根据key获取对应的value
    // console.log(map1.get(key1),map1.get(key2),map1.get(key3));
    // // 获取对应的value数量
    // console.log(map1.size);
//    for ....of 遍历map1中的key and value
// for(let [key,value] of map1){
//     console.log(`${key}=${value}`);
// }
// only key
// for(let key of map1.keys()){
//     console.log(key);
// }
// only value
// for(let value of map1.values()){
//     console.log(value);
// }
// forEach遍历map1
// map1.forEach((value,key)=>{
//     console.log(`${key}=${value}`);
// })
// 将map1转化为正常的数组
// const keyValueArray=Array.from(map1);
// console.log(keyValueArray);
// 将map1中的value值转化为数组
// const valueArray=Array.from(map1.values());
// console.log(valueArray);
// 将map1中的key转化为数组
const keyArray=Array.from(map1.keys());
console.log(keyArray);