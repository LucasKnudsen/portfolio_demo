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
    
    let tabs = ['My Portfolio', 'About Me', 'My Projects', 'My CV']
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


const startPage = async (selectedTab) => {
    if (selectedTab === 'About Me') {
        mainContainer.innerHTML = '<h2>About Me</h2> <p>Me humble self</p>'
    } else if (selectedTab === 'My Projects') {
        await displayProjects()
    } else if (selectedTab === 'My CV') {
        await displayCV()
    } 
    else {
        mainContainer.innerHTML = "<h1>Lucas's World</h1>"
    };
    
    mainContainer.classList.add('ui', 'container')

    root.appendChild(mainContainer);
};

const displayProjects = async () => {
    let projects = await fetchProjects()
    mainContainer.innerHTML = ''
    const projectsContainer = document.createElement('div')
    projectsContainer.classList.add('ui', 'cards')

    projects.forEach( project => {
        let card = document.createElement('div')
        let image = document.createElement('div')
        let cardContent = document.createElement('div')
        let cardDescription = document.createElement('div')
        
        card.classList.add('ui', 'card')
        image.classList.add('image')
        image.innerHTML = `<img src=${project.image}>`
        cardContent.classList.add('content')
        cardContent.innerHTML = `<div class="header">${project.title}</div>`
        cardDescription.classList.add('description')
        cardDescription.innerText = project.description

        card.append(image, cardContent, cardDescription)
        projectsContainer.appendChild(card)
    })
    
    mainContainer.appendChild(projectsContainer)
}

const fetchProjects = async () => {
    let response = await (await fetch('./js/projects.json')).json()
    return response.projects
}

const displayCV = async () => {

}

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