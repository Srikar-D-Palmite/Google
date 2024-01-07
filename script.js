function search() {
    const searchQuery = document.getElementById('query-text');
    console.log(searchQuery.value);
    window.location.href = "https://www.google.com/search?q=" + searchQuery.value;
}