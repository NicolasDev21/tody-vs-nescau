const left = document.querySelector('.left');
const right = document.querySelector('.right');

const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');

const container = document.querySelector('.container');


console.log('left ->'+ left);
console.log('right ->'+right);
console.log('container ->'+container);

btnLeft.addEventListener('click', () => {
    container.classList.add('hover-left');
    container.classList.remove('hover-right');

});
// btnLeft.addEventListener('mouseleave', () => {
//     container.classList.remove('hover-left');
// });

right.addEventListener('click', () => {
    container.classList.remove('hover-left');
    container.classList.add('hover-right');

});
// right.addEventListener('mouseleave', () => {
//     container.classList.remove('hover-left');
// });