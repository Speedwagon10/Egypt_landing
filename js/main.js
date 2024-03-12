let imgSearch = document.querySelector('.header_search svg');
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
