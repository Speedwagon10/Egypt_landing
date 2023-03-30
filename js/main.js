let imgSearch = document.getElementById('search_img');
let searchBtn = document.getElementById('search_btn');
let searchInput = document.getElementById('search');

searchInput.addEventListener('focusin', function ()  {
    imgSearch.classList.add('_img_hidden');
    searchBtn.style.display = 'block';
});
searchInput.addEventListener('focusout', function () {
    imgSearch.classList.remove('_img_hidden');
    searchBtn.style.display = 'none';
});

let popupBg = document.querySelector('.popup_bg');
let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.open_popup');
let closePopupButton = document.querySelector('.close_popup');

openPopupButton.addEventListener('click', (e) => {
    popupBg.classList.add('_active');
    popup.classList.add('_active');
});

closePopupButton.addEventListener('click', (e) => {
    popupBg.classList.remove('_active');
    popup.classList.remove('_active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('_active');
        popup.classList.remove('_active');
    }
});
