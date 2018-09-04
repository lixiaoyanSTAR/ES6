// 展开运算符更快、更便捷的操作数组
function addNumbers(numbers){
    return numbers.reduce((sum,number)=>{
        return sum+number;
    },0)
}
// const numbers=[1,2,3,4,5];
// console.log(addNumbers(numbers));

// function addNumbers(a,b,c,d,e){
//     var numbers=[a,b,c,d,e];
//     return numbers.reduce((sum,number)=>{
//         return sum+number;
//     },0)
// }
// console.log(addNumbers(1,2,3,4,5));

// function addNumbers(...numbers){
//     return numbers.reduce((sum,number)=>{
//         return sum+number;
//     },0)
// }
// console.log(addNumbers(1,2,3,4,5,6,8,9));

var defaultColors=["red","greed"];
var favoriteColors=["orange","yellow"];
// concat
// defaultColors=defaultColors.concat(favoriteColors);
// console.log(defaultColors);

console.log([...defaultColors,...favoriteColors]);
console.log(["red","blue",...defaultColors,...favoriteColors]);

// 练习
function validateShoppingList(...items){
    if(items.indexOf('milk')<0){
        return ['milk',...items];
    }
    return items;
}
console.log(validateShoppingList("orange","bread","eggs"));