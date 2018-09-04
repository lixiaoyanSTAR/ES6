// 斐波那契数列
// function fib(max){
//     var a=0,b=1,arr=[0,1];
//     while(arr.length<max){
//         [a,b]=[b,a+b];
//         arr.push(b);
//     }
//     return arr;
// }
// console.log(fib(5));
// console.log(fib(10));
// function*fib(max){
//     var a=0,b=1,n=0;
//     while(n<max){
//         yield a;
//         [a,b]=[b,a+b];
//         n++;
//     }
//     return;
// }
// for(var x of fib(10)){
//     console.log(x);
// generator生成器，可以返回多次的函数
// function* numbers(){
//     yield;
// }
// const gen=numbers();
// console.log(gen.next());
// console.log(gen.next());
// 迭代器还原生成器的结构
// function nameIterator(names){
//     let nextIndex=0;
//     return{
//         next:function(){
//             return nextIndex<names.length?
//                    {value:names[nextIndex++],done:false}:
//                    {value:undefined,done:true}
//         }
//     }
// }
// const nameArray=["Henry","Bucky","Emily"];
// const names=nameIterator(nameArray);
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// function*sayName(){
//     yield 'Henry';
//     yield 'Bucky';
//     yield 'Emily';
// }
// const name=sayName();
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());
// id自增(es生成器)
function* createIds(){
    let index=1;

    while(true){
        yield index++;
    }
}

const gen=createIds();

// console.log(gen.next().value);
// console.log(gen.next().value);

for(var i=0;i<10;i++){
    console.log(gen.next().value);
}