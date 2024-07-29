/* Задание 1
Реализовать функционал модального окошка, которое открывается с затемнением фона при нажатии на кнопку и закрывается по нажатию на кнопку-крестик или на тёмную область вокруг окошка.
*/

const popupOpen = document.querySelector('.popup-btn');
const popup = document.querySelector('#popup');
const popupWindow = document.querySelector('.popup-content');
const popupClose = document.querySelector('.popup-close');

window.addEventListener('click', (event) => {
    if(event.target.matches('.popup-btn')){
        popup.classList.add("open");
    }

    if(event.target.matches('.popup-close')){
        popup.classList.remove("open");
    }

    if(event.target.matches('div')){
        popup.classList.remove("open");
    }
});
