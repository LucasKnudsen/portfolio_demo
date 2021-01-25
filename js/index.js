const root = document.getElementById('root')

const startPage () => {
    let content = document.createElement('h1')
    content.innerText = 'Hello World';
    root.appendChild(content);
};
    
document.addEventListener('DOMContentLoaded', () => {
    startPage()
});