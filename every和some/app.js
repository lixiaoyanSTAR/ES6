// 场景1：计算对象数组中每个电脑的操作系统是否可用
// 大于16位操作系统表示可用，否则不可用
// es5
var computers=[
    {name:"Apple",ram:8},
    {name:"IBM",ram:4},
    {name:"Acer",ram:32}
]
var everyComputerCanRunProgram=true;
var someComputerCanRunProgram=false;
for(var i=0;i<computers.length;i++){
    var computer=computers[i];
    if(computer.ram<16){
        everyComputerCanRunProgram=false;
    }else{
        someComputerCanRunProgram=true;
    }
}
console.log(everyComputerCanRunProgram)
console.log(someComputerCanRunProgram)
console.log("=========");

var every=computers.every(function(computer){
    return computer.ram>16;
});
console.log(every);
var some=computers.some(function(computer){
    return computer.ram>16;
});
    console.log(some);
    console.log("============");
    // 场景2
    // 假定有一个注册页面，判断所有input内容的长度是否大于0；
    function Field(value){
        this.value=value;
    }
    Field.prototype.validate=function(){
        return this.value.length>0;
    }
    var username=new Field("star");
    var telephone=new Field("182");
    var password=new Field("123");
    // console.log(username.validate()&&telephone.validate()&&password.validate())
    var fields=[username,telephone,password];
    var formIsValid=fields.every(function(field){
          return field.validate();
    })
     console.log(formIsValid);
     if(formIsValid){
         //注册成功
     }else{
         //给用户一个友善的错误提醒
     }