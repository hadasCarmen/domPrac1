const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const actions = document.querySelector(".actions");
const result = document.querySelector(".result");

// const add=document.querySelector('.add')
// const sub=document.querySelector('.sub')
// const mult=document.querySelector('.mult')
// const div=document.querySelector('.div')

number1.addEventListener("input", (e) => {
  localStorage.setItem("firstnumber", number1.value);
});

number2.addEventListener("input", (e) => {
  localStorage.setItem("secondnumber", number2.value);
});

[...actions.children].forEach((child) => {
    child.addEventListener("click", (e) => {
    const firstn=localStorage.getItem("firstnumber")
      const action=child.textContent
      const secondn=localStorage.getItem("secondnumber")
    result.textContent = `${firstn}${action}${secondn}=${eval(`${firstn}${action}${secondn}`)} `;
  });
});


// actions.addEventListener("click",e=>{
//     if(!e.target.classList.contains("actions"))console.log(e.target);
// })