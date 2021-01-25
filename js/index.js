const root = document.getElementById('root')

const header = () => {
    let headerContainer = document.createElement('div');
    headerContainer.classList.add('ui', 'inverted', 'segment');
    let nav = document.createElement('nav');
    nav.classList.add('ui', 'inverted', 'secondary', 'menu')
    let headerContent = document.createElement("a");
    headerContent.classList.add('item')
    
    headerContent.innerText = "My Portfolio";
    nav.appendChild(headerContent);
    root.appendChild(nav);
};


const startPage = () => {
    let content = document.createElement('h1')
    content.innerText = 'Hello World';
    root.appendChild(content);
};

const footer = () => {
    let footerContainer = document.createElement('footer')
    footerContainer.innerHTML = '<h4>Made with HTML, CSS & Javascript</h4>'
    root.appendChild(footerContainer)
}
    
document.addEventListener('DOMContentLoaded', () => {
    header()
    startPage()
    footer()
});