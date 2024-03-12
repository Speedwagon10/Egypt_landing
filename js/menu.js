const menuBtn = document.querySelector('.menu_btn');
const menuList = document.querySelector('.nav_block');

const popupBg = document.querySelector('.popup_bg');
const popup = document.querySelector('.popup');
const openPopupButtons = document.querySelectorAll('.open_popup');
const closePopupButton = document.querySelector('.close_popup');

menuBtn.addEventListener('click', () => {
    if (menuList.classList.contains('_click_btn')) {
        menuList.classList.remove('_click_btn');
    } else {
        menuList.classList.add('_click_btn');
    }
});

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        popupBg.classList.add('_active');
        popup.classList.add('_active');
        setTimeout(() => {
            menuList.classList.remove('_click_btn')
        }, 1000)
       ;
    });
});

closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('_active');
    popup.classList.remove('_active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('_active');
        popup.classList.remove('_active');
    }
});
