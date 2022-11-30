import pubsub from './pubsub'

export const projectForm = (() => {
    const addBtn = document.getElementById('add-projects')
    addBtn.addEventListener('click', showInput)

    const taskAdd = document.getElementById('addprojectask')
    taskAdd.addEventListener('click', showTaskInput)

    const addpopup = document.querySelector('.add-popup')
    const addtask = document.querySelector('.addtask')

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
    function showTaskInput() {
        taskAdd.style.display = 'none';

        addtask.style.display = 'block';

        let form = document.querySelector('.projectasks')
        form.querySelector('button').addEventListener('click', addTaskToProject) 
    }

    function addTaskToProject(e) {
        e.preventDefault(e)
        let input = document.querySelector('.projectasks input')
        let name = input.value;
        input.value = '';

        taskAdd.style.display = 'block';
        addtask.style.display = 'none'

        console.log(`PROJECT FORM: a task ${name} has been added to a project`)
    }

})()