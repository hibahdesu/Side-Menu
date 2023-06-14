const open = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-times');
const side = document.querySelector('.side-container');

open.addEventListener('click', () => {
    console.log("Open Menu");
    side.classList.toggle('show');
});

close.addEventListener('click', () => {
    console.log("Close Menu");
    side.classList.remove('show');

});

