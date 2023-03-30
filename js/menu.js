const menuBtn = document.querySelector('.menu_btn');
const menuList = document.querySelector('.nav_block');

menuBtn.addEventListener('click', () => {
    if (menuList.classList.contains('_click_btn')) {
        menuList.classList.remove('_click_btn');
    } else {
        menuList.classList.add('_click_btn');
    }
});
