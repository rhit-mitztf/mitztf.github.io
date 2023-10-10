const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const title = document.querySelector('title');
const main = document.querySelector('main');
const links = document.querySelectorAll('a');
const headings = document.querySelectorAll('h1, h2, h3');

// Function to toggle between dark and light theme
function toggleTheme() {
    body.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
    title.classList.toggle('dark-mode');
    links.forEach(link => link.classList.toggle('dark-mode'));
    headings.forEach(heading => heading.classList.toggle('dark-mode'));
    //save darkmode setting to local storage for later retrieval
    const darkModeSetting = body.classList.contains('dark-mode') ? 'enabled' : 'disabled';
    localStorage.setItem('dark-mode-setting', darkModeSetting);
}
//listener for darkmode button
toggleButton.addEventListener('click', toggleTheme);

//when page loads, check what current darkmode setting is, and set it accordingly
//allows for the darkmode setting to persist between all the pages of the document
window.addEventListener('DOMContentLoaded', () => {
    const darkModeSetting = localStorage.getItem('dark-mode-setting');
    if (darkModeSetting === 'enabled') {
        body.classList.add('dark-mode');
        main.classList.add('dark-mode');
        title.classList.add('dark-mode');
        links.forEach(link => link.classList.add('dark-mode'));
        headings.forEach(heading => heading.classList.add('dark-mode'));
    }
});