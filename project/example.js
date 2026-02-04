// שמירה
localStorage.setItem("playerName", "Alice");

// קריאה
const name = localStorage.getItem("playerName");
console.log(name); // Alice

// מחיקה
localStorage.removeItem("playerName");

// מחיקה של הכל
localStorage.clear();



<div id="myDiv">שלום <b>עולם</b></div>

const div = document.getElementById("myDiv");
console.log(div.textContent); // "שלום עולם"

div.textContent = "היי!";
console.log(div.textContent); // "היי!"


<input id="nameInput" type="text" value="Alice">

const input = document.getElementById("nameInput");

// קריאה
console.log(input.value); // "Alice"

// שינוי
input.value = "Bob";
console.log(input.value); // "Bob"
