const body = document.querySelector('body');
const images = document.querySelectorAll('img');
const savedBackground = localStorage.getItem('backgroundImage');

if(savedBackground){
    body.style.backgroundImage = `url(${savedBackground})`;
    body.style.backgroundSize = 'cover';
} else if(images.length > 0){
    const firstImgSrc = images[0].getAttribute('src');
    body.style.backgroundImage = `url(${firstImgSrc})`;
    body.style.backgroundSize = 'cover';
}

window.addEventListener('click', (e) => {
    images.forEach(image => {
        if(image === e.target){
            const src = image.getAttribute('src');

            body.style.backgroundImage = `url(${src})`;
            body.style.backgroundSize = 'cover';
            body.style.transition = '.2s';

            localStorage.setItem('backgroundImage', src);
        }
    });
});
