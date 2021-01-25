const root = document.getElementById('root')

const header = () => {
    let headerContainer = document.createElement('div');
    headerContainer.classList.add('ui', 'inverted', 'segment');
    
    let nav = document.createElement('div');
    nav.classList.add('ui', 'inverted', 'secondary', 'menu')
    
    let tabs = ['My Portfolio', 'About Me', 'My Projects']
    tabs.forEach(tab => {
        let tabLink = document.createElement("a");
        tabLink.classList.add("item");
        tabLink.innerText = tab
        nav.appendChild(tabLink);
    });

    headerContainer.appendChild(nav)
    root.appendChild(headerContainer);
};


const startPage = () => {
    let startPageContainer = document.createElement('div')
    startPageContainer.classList.add('ui', 'container')

    let content = document.createElement('h1')
    content.innerText = 'Hello World';

    startPageContainer.appendChild(content)
    root.appendChild(startPageContainer);
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