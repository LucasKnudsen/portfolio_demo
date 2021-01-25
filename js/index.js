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
        make_button()
    } 
    else {
        mainContainer.innerHTML = "<h1>Lucas's World</h1>"

    };
    
    mainContainer.classList.add('ui', 'container')

    root.appendChild(mainContainer);
};

const make_button = () => {
    button = document.createElement('button')
    button.classList.add('my_button')
    button.innerText = 'Click me?'

    button.addEventListener('click', () => {
        get_image = document.querySelector('.image')

        if (get_image.innerHTML !== '<img src="./assets/me.png">') {
            get_image.innerHTML = '<img src="./assets/me.png">'
            button.innerText = 'No, give me back dog!'
        } else {
            get_image.innerHTML = '<img src="https://images.unsplash.com/photo-1516222338250-863216ce01ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80">'
            button.innerText = "Actually, let's look at the dude again"
        }
    })

    mainContainer.appendChild(button)   
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

const fetchCV = async () => {
    let response = await (await fetch('./js/cv.json')).json()
    return response.cv
}

const displayCV = async () => {
    let cv = await fetchCV()
    mainContainer.innerHTML = ''
    const cvContainer = document.createElement('div')
    cvContainer.classList.add('ui', 'card', 'cv')

    
    let card = document.createElement('div')
    let image = document.createElement('div')
    let meta = document.createElement('div')
    let cardContent = document.createElement('div')
    let cardDescription = document.createElement('div')
    
    card.classList.add('ui', 'card', 'cv')
    image.classList.add('image')
    image.innerHTML = `<img src=${cv.image}>`
    cardContent.classList.add('content')
    cardContent.innerHTML = `<div class="header">${cv.title}</div>`
    meta.classList.add('meta')
    meta.innerHTML = `<span>${cv.meta}</span>`
    cardDescription.classList.add('description')
    cardDescription.innerText = cv.text

    card.append(image, cardContent, meta, cardDescription)
    cvContainer.appendChild(card)
    mainContainer.appendChild(cvContainer)
}

document

const footer = () => {
    let footerContainer = document.createElement('footer')
    footerContainer.innerHTML = '<h4>Made with HTML, CSS & Javascript</h4>'
    root.appendChild(footerContainer)
}
    
document.addEventListener('DOMContentLoaded', async () => {
    header()
    startPage()
    footer()
});