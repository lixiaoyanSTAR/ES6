var numbers=[10,20,30];
var sum=0;
// es5
for(var i=0;i<numbers.length;i++){
    sum+=numbers[i];
}
console.log(sum)
// es6
var sumValue=numbers.reduce(function(sum2,number2){
  return sum2+number2;
},0);
console.log(sumValue);

// 场景2
// 将数组中对象某个属性抽离到另外一个数组中
var primaryColors=[
    {color:"red"},
    {color:"yellow"},
    {color:"blue"}
];
var colors=primaryColors.reduce(function(pre,pry){
    pre.push(pry.color);
    return pre;
},[]);
console.log(colors);
// 场景3 判断字符串中括号是否对称
function balancedParents(string){
    return !string.split("").reduce(function(previous,char){
            if(previous<0){
                return previous;
            }
            if(char=="("){
                return ++previous;
            }
            if(char==")"){
                return --previous;
            }
    },0);
}
console.log(balancedParents("(()))"))