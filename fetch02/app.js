document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJson);
document.getElementById('button3').addEventListener('click',getExternal);
// 获取本地纯文本数据
function getText(){
    fetch('text.txt')
        .then((res)=>res.text())
        .then(data=>{
            console.log(data);
            document.getElementById('output').innerHTML=data;
        })
        .catch(err=>console.log(err));
}
function getJson(){
    fetch('post.json')
    .then((res)=>res.json())
    .then(data=>{
        console.log(data);
        // document.getElementById('output').innerHTML=data;
        let output='';
        data.forEach((post1)=>{
            output+=`<li>${post1.title}</li>
                     <li>${post1.body}</li>
            `
                  
        })
        document.getElementById('output').innerHTML=output;
    })
    .catch(err=>console.log(err));
}
function getExternal(){
    fetch('https://api.github.com/users')
    .then((res)=>res.json())
    .then(data=>{
        console.log(data);
        // document.getElementById('output').innerHTML=data;
        let output='';
        data.forEach((user)=>{
            output+=`<li>${user.login}</li>
                     <li>${user.url}</li>
            `
                  
        })
        document.getElementById('output').innerHTML=output;
    })
    .catch(err=>console.log(err));
}