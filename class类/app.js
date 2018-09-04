// // 万事皆对象
// // 创建类
// function Car(options){
//     this.title=options.title;
// }
// // 创建方法
// Car.prototype.drive=function(){
//     return "Vroom";
// }
// // 创建对象
// const car=new Car({title:"BMW"});
// console.log(car);
// // 继承
// function Toyota(options){
//     Car.call(this,options);
//     this.color=options.color;
// }
// Toyota.prototype=Object.create(Car.prototype);
// Toyota.prototype.constructor=Toyota;

// const toyota=new Toyota({color:"red",title:"Focus"});
// console.log(toyota);
// console.log(toyota.drive());

// es6
class Car{
    constructor({title}){
        this.title=title;
    }
    drive(){
        return 'vroom';
    }
}
// const car =new Car({
//     title:"BMW"
// });
// console.log(car);
// console.log(car.drive());
class Toyota extends Car{
    constructor(options){
        super(options);
        this.color=options.color;
    }
}
const toyota=new Toyota({color:"red",title:"Focus"})
console.log(toyota);