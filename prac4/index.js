const form = document.getElementById("form");
// const username = document.getElementById("name");
// const password = document.getElementById("password");

// password.addEventListener('change',e=>{
//     console.log(e.target.name,e.target.value);

// })
form.addEventListener("change", (e) => {
  //   console.log(e.target.name, e.target.value);
  const { name, value } = e.target;
  data[name] = value;
  console.log(data);
});

// document.querySelector('a').addEventListener('click',e=>{
//     e.preventDefault()
//     window.location.href='https://chatgpt.com'
// })
const data = {};
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const template = await res.text();
  document.body.innerHTML += template;
  const users =localStorage.getItem('users')
  localStorage.setItem('users',(users||'')+(template||''))
  window.location.reload();
});
