/* Задание
Реализовать вертикальное меню, которое "выезжает" по клику на кнопку-бургер и закрывается по клику на кнопку-крестик. 
*/

const openBtn = document.querySelector('.burger');
const main = document.querySelector('main');
const sidebar = document.querySelector('.side-panel');
const closeBtn = document.querySelector('.closed-btn')


openBtn.addEventListener('click', () => {
    sidebar.style.width = '20%';
    main.style.marginLeft = '20%';
    openBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    sidebar.style.width = '0';
    main.style.marginLeft = '0';
    openBtn.style.display = 'block';
});
