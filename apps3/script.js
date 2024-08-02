/* Задание
Самостоятельно реализовать меню, открывающееся по клику на бургер, который тут же превращается в крестик. 
*/

const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.remove('nav');
    menuIcon.style.display = 'none';
    closeIcon.classList.remove('hidden');
})

closeIcon.addEventListener('click', () => {
    menu.classList.add('nav');
    menuIcon.style.display = 'flex';
    closeIcon.classList.add('hidden');
});
