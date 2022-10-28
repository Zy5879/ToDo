function createHeader() {
    const header = document.createElement('header')
    const title = document.createElement('div')
    const titlename = document.createElement('h1')
    titlename.innerHTML = 'ToDo App'
    title.appendChild(titlename)
    header.appendChild(title)
    document.body.appendChild(header)
}

// function createNav() {
//     const nav = document.createElement('nav')
//     document.body.appendChild(nav)
// }

function createMain() {
    const main = document.createElement('main')
    const leftside = document.createElement('div')
    leftside.classList.add('leftside')
    const home = document.createElement('button')
    home.innerHTML = 'Home'
    const today = document.createElement('button')
    today.innerHTML = 'Today'
    const upcoming = document.createElement('button')
    upcoming.innerHTML = 'Upcoming'

    const projects = document.createElement('h3')
    projects.innerHTML = 'Projects'

    const addprojects = document.createElement('button')
    addprojects.innerHTML = 'Add Project'

    const rightside = document.createElement('div')
    rightside.classList.add('rightside')
    const rightsideh2 = document.createElement('h2')
    rightsideh2.innerHTML = 'RightSide'
    leftside.append(home,today,upcoming,projects, addprojects)
    rightside.appendChild(rightsideh2)
    main.append(leftside, rightside)
    document.body.appendChild(main)
}

function createFooter() {
    const footer = document.createElement('footer')
    const footerh4 = document.createElement('h4')
    footerh4.innerHTML = 'Footer'
    footer.appendChild(footerh4)
    document.body.appendChild(footer)
}

function loadPage() {
    createHeader()
    // createNav()
    createMain()
    createFooter()
}

loadPage()