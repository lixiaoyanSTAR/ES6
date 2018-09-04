const posts=[
    {title:"Post one",body:"this is post one"},
    {title:"Post two",body:"this is post two"}
];
function createPost(post){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000)
})
}

createPost({title:"Post Three",body:"this is post three"},getPosts);