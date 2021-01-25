const root = document.getElementById('root')
const mainContainer = document.createElement('div')

const addActive = (selectedTabLink) => {
    let areActive = document.querySelectorAll('.active')
    if (areActive.length > 0) {
        areActive[0].classList.remove('active')
    }
    selectedTabLink.classList.add("active")
}

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
        tabLink.addEventListener('click', () => {
            startPage(tab);
            addActive(tabLink)
        })
        nav.appendChild(tabLink);
    });

    headerContainer.appendChild(nav)
    root.appendChild(headerContainer);
};


const startPage = (selectedTab) => {
    if (selectedTab === 'About Me') {
        mainContainer.innerHTML = '<h2>About Me</h2> <p>Me humble self</p>'
    } else if (selectedTab === 'My Projects') {
        mainContainer.innerHTML = '<h2>My Projects</h2> <p>Prepare to be totally mindblown by my awesome skills</p>'
    } else {
        mainContainer.innerHTML = "<h1>Lucas's World</h1>"
    };
    
    mainContainer.classList.add('ui', 'container')

    root.appendChild(mainContainer);
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