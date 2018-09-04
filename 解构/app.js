var expense={
    type:"es6",
    amount:"45"
}
// var type=expense.type;
// var amount=expense.amount;
// console.log(type,amount);

// const{type,amount}=expense;
// console.log(type,amount);


var saveFiled={
    extension:"jpg",
    name:"girl",
    size:14040
}

// es5
// function fileSammary(file){
//     return `${file.name}.${file.extension}的总大小是${file.size}`
// }
// es6
//    function fileSammary({name,extension,size}){
//            return `${name}.${extension}的总大小是${size}`
//    }
// console.log(fileSammary(saveFiled))

const names=["Henry","Bucky","Emily"];
// 解构
// const [name1,name2,name3]=names;
// console.log(name1,name2,name3);
// // 返回数组个数
// const {length}=names;
// console.log(length);
const[name,...rest]=names;
console.log(name);