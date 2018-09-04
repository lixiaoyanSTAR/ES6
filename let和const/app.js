function testVar(){
    var a=30;
    if(true){
        var a=50;
        // console.log(a);
    }
    // console.log(a);
}
// testVar();

function testLet(){
    let a=30;
    if(true){
        let a=50;
        // console.log(a)
    }
    // console.log(a);
}
// testLet();
// {
//     let b=100;
// }
// console.log(b)
// for(var i=0;i<10;i++){
//     console.log(i);
// }
// console.log(i);
for(let i=0;i<10;i++){
    console.log(i)
}
// console.log(i);
const colors=[];
colors.push("red");
colors.push("blue");
console.log(colors);