var headone=document.getElementById('one')
var headtwo=document.getElementById('two')
var headthree=document.getElementById('three')
console.log(headone.textContent)
console.log(headtwo.textContent)
console.log(headthree.textContent)
headone.addEventListener('mouseover',function(){
    headone.style.color='red',
    headone.textContent='Mouse Over Me'
})
headone.addEventListener('mouseout',function(){
    headone.style.color='green',
    headone.textContent='Mouse has moved from me'
})

headtwo.addEventListener('click',function(){
    headtwo.style.color='blue',
    headtwo.textContent='Mouse clicked changed the text'
})

headthree.addEventListener('click',function(){
    headthree.style.color='purple',
    headthree.textContent='Text Changed due to double click'
})
