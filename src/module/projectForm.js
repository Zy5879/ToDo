import pubsub from './pubsub'

export const projectForm = (() => {
    const addBtn = document.getElementById('add-projects')
    addBtn.addEventListener('click', showInput)
    const addpopup = document.querySelector('.add-popup')

    function showInput() {
        addBtn.style.display = 'none'
        // let addpopup = document.querySelector('.add-popup')
        addpopup.style.display = 'block'
        // let formadd = document.getElementById('adding')
        // formadd.addEventListener('click',addProjectForm)
        let form = document.querySelector('.project-form')
        form.querySelector('button').addEventListener('click', addProjectForm)

        // let goBack = document.getElementById('goback')
        // goBack.addEventListener('click', )
        // form.getElementById('adding').addEventListener('click', addProjectForm)
    };
    function addProjectForm(e) {
        //stops page from reloading once form button is clicked
        e.preventDefault()
        let input = document.querySelector('.project-form input')
        let name = input.value;
        input.value  = '';

        //let people know that project is being added
        // console.log(`PROJECT FORM: a project ${name} has been added`)
        // pubsub.publish('projectAdded',name)
        addBtn.style.display = 'block'
        addpopup.style.display = 'none'

        console.log(`PROJECT FORM: a project ${name} has been added`)
        pubsub.publish('projectAdded',name)

    }
})()