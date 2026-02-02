//get element from dom
document.querySelector('#section')
document.getElementById('section')


//get elements from dom
document.querySelectorAll('.section');
document.getElementsByTagName('section');
document.getElementsByClassName('section')

// create element
const a = document.createElement('a');
document.body.appendChild(a);
// Or
const a1 = document.createElement('a')
document.body.append(a, a1);

// Update element

a.textContent = 'Home';
a.style.background = 'red'

a1.textContent = 'About';
a1.style.background = 'red'

// delete element
// a1.remove();

// event listener
a.addEventListener('click', (e) => {
    console.log(e.target);
})

// event bubbling + delegetion

document.body.addEventListener('click', e => {
    console.log(e.target) // print the target of event <a>
})