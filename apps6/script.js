const navTabs = document.querySelector('.nav-tabs');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const infoBlocks = document.querySelectorAll('.info-item');

navTabs.addEventListener('click', (e) => {
    if (e.target.matches('.nav-link')) {
        
        navLinks.forEach(item => {
            item.classList.remove('active');
            e.target.classList.add('active');
        });

        const index = navLinks.indexOf(e.target);
        
        infoBlocks.forEach(item => {
            item.classList.remove('active');
        });

        infoBlocks[index].classList.add('active');
    }
});
