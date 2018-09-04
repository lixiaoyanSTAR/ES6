function makeAjaxRequest(url,method="GET"){
       return method;
}
console.log(makeAjaxRequest("Google.com"));
console.log(makeAjaxRequest("Goole.com","POST"));

function user(id){
    this.id=id;
}
// console.log(new user(1));
function randomId(){
    return Math.random()*999999;
}
console.log(new user(randomId()));