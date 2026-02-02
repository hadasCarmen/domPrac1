const step1=document.querySelector('header')
const step2=document.querySelector('section')
const step3=document.createElement('aside')
step3.appendChild( document.createElement('a'))
console.log(step3);
const step3a=step3.querySelector('a')
step3a.innerText = 'step3'
document.body.append(step3)

step3a.addEventListener('click',(e)=>{
    console.log(e.target);
    e.target.style.background='blue'
    // e.stopPropagation()
})