import TodoController from "./TodoController"
import { Projects } from "./project"
import { Task } from "./task"
import pubsub from "./pubsub"


export const projects = (() => {
    let userone = TodoController;
    let projects = userone.projects
    // const list = JSON.parse(localStorage.getItem('project')) || [];
    // const addproject = document.getElementById('btn')
    // addproject.addEventListener('click', addProjectForm)


    const addproject = document.getElementById('btn')
    addproject.addEventListener('click', addProject)
    // addproject.addEventListener('click',(e) => {
    //     e.preventDefault()

    //     const input = document.getElementById('inputProjectName')
    //     userone.addProject(input.value)
    //     input.value = ''
        
    //     closeModal(modal)
    // })
    function renderProjects() {
        // let items = ''
        projects.forEach(project => {
            
            // items += `<button class='projectindex'>
            // <div class='left-panel'> 
            // <span class = 'close'>X</span>
            // </div>
            // <div class='right-panel'>
            // <p class='name'>${project.name}</p>
            // </div>
            // </button>`

            // const button = document.querySelectorAll('projectindex')
            // Array.from(button).forEach(btn => {
            //     btn.addEventListener('click',(e) => {
            //         console.log('hey')
            //     })
            // })
        })

        // Array.from(button).forEach(btn => {
        //     btn.addEventListener('click',(e) => {

        //         })
        //     })
    }

        function addProject(e) {
            e.preventDefault()
            let input = document.getElementById('inputProjectName')
            let name = input.value
            input.value = ''
            userone.addProject(name)

            console.log(`PROJECT FORM: a ${name} has been added`)
            console.log(projects)
            renderProjects()
            closeModal(modal)
        }

        window.onload = function() {
            renderProjects()
        }
        // console.log(list)

        // let myObj = JSON.parse(localStorage.getItem('myObj'))
        // if(myObj === null) {
        //     list = []
        // } else {
        //     list = myObj
        // }



        // let myObj_serialized = JSON.stringify(userone)
        // localStorage.setItem('myObj',myObj_serialized)

        // let myObj_serialized = JSON.stringify(userone)
        // localStorage.setItem('myObj', myObj_serialized)

        // let myObj_deserialized = JSON.parse(localStorage.getItem('myObj'))
        // console.log(myObj_deserialized)
        // localStorage.setItem('myObj',userone)
        // console.log(localStorage)

    // function displayProject() {
    //     let projectbutton = ''
    //     list.forEach(name => {

    //     })
    // }


    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        })
    })

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModal(modal)
        })
    })

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal)
        })
    })

    function openModal(modal) {
        if(modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
    }
    function closeModal(modal) {
        if(modal == null) return 
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }

    return {
        renderProjects
    }
})()