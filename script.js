const searchBar = document.querySelector(".search-bar");
const searchQuery = document.getElementById('query-text');

searchBar.addEventListener("click", searchBarClick);
searchQuery.addEventListener("focus", showDropdown);
searchQuery.addEventListener("focusout", hideDropdown);

function search() {
    console.log(searchQuery.value);
    window.location.href = "https://www.google.com/search?q=" + searchQuery.value;
}

function searchBarClick() {
    searchQuery.focus();
}

var dropdown = document.querySelector('.dropdown');
function showDropdown() {
    dropdown.style.display = 'block';
}

function hideDropdown() {
    dropdown.style.display = 'none';
}