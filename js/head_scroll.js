let lastScroll = 0;
const header = document.querySelector('.header');
const menu = document.querySelector('.nav_menu');
const classHide = 'hide';

const scrollPosition = () => document.documentElement.scrollTop || window.pageYOffset;
const containsClass = (elm, nameOfClass) => elm.classList.contains(nameOfClass);

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containsClass(header, classHide) && scrollPosition() > 200) {
        header.classList.add(classHide);
        menu.classList.add(classHide);
    } else if (scrollPosition() < lastScroll && containsClass(header, classHide)) {
        header.classList.remove(classHide);
        menu.classList.remove(classHide);
    }

    lastScroll = scrollPosition();
})