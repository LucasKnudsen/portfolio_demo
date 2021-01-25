const root = document.getElementById('root')

const header = () => {
    let nav = document.createElement('nav')
    let headerContent = document.createElement("h1");
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
    let footer = document.create
}
    
document.addEventListener('DOMContentLoaded', () => {
    header()
    startPage()
    footer()
});