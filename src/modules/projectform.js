import pubsub from './pubsub'
import { ProjectFactory } from './todo'

export const projectForm = (() => {
    const addBtn = document.getElementById('addprojects')
    addBtn.addEventListener('click', showInput)

    const projectpop = document.querySelector('.project-form')

    function showInput() {
        addBtn.style.display = 'none';
        projectpop.style.display = 'block';

        projectpop.querySelector('button').addEventListener('click', addProjectForm)
    }
    function addProjectForm(e) {
        e.preventDefault()
        let input = document.querySelector('.project-form input')
        let name  = input.value;
        input.value = '';


        addBtn.style.display = 'block';
        projectpop.style.display = 'none';

        console.log(`PROJECT FORM: a project ${name} has been added`)
        pubsub.publish('projectAdded', name)
    }
})()