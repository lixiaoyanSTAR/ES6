let name="star";
function makeUppercase(word){
    return word.toUpperCase();
}
let template=`<h1>${makeUppercase('Hello')}, ${name}</h1>
<p>好好学习，天天向上</p>
<p>fightting!</p>
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>
`
document.getElementById('template').innerHTML=template;