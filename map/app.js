// 场景1 假定有一个数值数组（A）,将A数组中的值以双倍的形式放到B数组
var numbers=[1,2,3];
var doubleNumbers=[];
// es5
for(var i=0;i<numbers.length;i++){
    // doubleNumbers.push(numbers[i]*2);
}
// console.log(doubleNumbers);
for(var i=0;i<doubleNumbers.length;i++){
    // console.log(doubleNumbers[i])
}
// es6 map
var doubled=numbers.map(function(number){
    // return number*2
})
// es6 forEach
doubled.forEach(function(number){
    // console.log(number)
})
// 场景2 假定有一个对象数组（A），将A数中的对象某个属性的值存储到B数组中
var cars=[
    {model:"Buick",price:"CHEAP"},
    {model:"BMW",price:"expensive"}
] 
var prices=cars.map(function(car){
    return car.price;
})
console.log(prices);
// forEach
prices.forEach(function(number){
    console.log(number)
})