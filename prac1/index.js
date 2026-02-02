const section = document.querySelector('section');

section.addEventListener('click', (e) => {
    document.body.style.background = e.target.textContent;
    
})
const buttons = Array.from(document.querySelectorAll('button')).slice(0, 2);

buttons.forEach(button => {
    button.addEventListener('click', e => {
        e.target.style.background = e.target.textContent;
        e.stopPropagation();
    })
})