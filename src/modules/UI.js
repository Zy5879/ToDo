import { Projects } from "./project";
import pubsub from "./pubsub";
import { Task } from "./task";
import TodoController from "./TodoController";
import { format } from "date-fns";

//  const projectmodal = (() => {
//     const openModalButtons = document.querySelectorAll('[data-modal-target]')
//     const closeModalButtons = document.querySelectorAll('[data-close-button]')
//     const overlay = document.getElementById('overlay')

//     openModalButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const modal = document.querySelector(button.dataset.modalTarget)
//             openModal(modal)
//         })
//     })

//     overlay.addEventListener('click', () => {
//         const modals = document.querySelectorAll('.modal.active')
//         modals.forEach(modal => {
//             closeModal(modal)
//         })
//     })

//     closeModalButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const modal = button.closest('.modal')
//             closeModal(modal)
//         })
//     })

//     function openModal(modal) {
//         if(modal == null) return
//         modal.classList.add('active')
//         overlay.classList.add('active')
//     }
//     function closeModal(modal) {
//         if(modal == null) return 
//         modal.classList.remove('active')
//         overlay.classList.remove('active')
//     }
// })()

const projects = (() => {
    let list = [];
    function renderTemp(container) {
        let template = document.getElementById('projectListTemplate')
        let div = template.content.cloneNode(true);
        container.appendChild(div)

        console.log('PROJECTS: we want to know if a project is added')
        pubsub.subscribe('projectAdded',addProject)
    }
    function addProject(name) {
        //project added event publish
        console.log(`I hear that ${name} is being added`)
        let projectlist = list
        let userone = TodoController
        let projects = userone.projects
        // console.log(projects)
        userone.addProject(name)
        // console.log(userone.getProject(name))
        projectlist.push(userone)
        console.log(userone)
        // console.log('This is',userone)
        console.log(projectlist)
        projectlist = Array.from(list).sort()
        console.log('projectUpdated')
        pubsub.publish('projectUpdated', name)

        let projectnamediv = document.querySelector('.projectname')
        projectnamediv.textContent = ''
        let df = document.createDocumentFragment()
        projects.forEach(name => {
            let div = document.createElement('div')
            div.classList.add('project-content')
            let button =  document.createElement('button')
            button.addEventListener('click', () => {
                const currentproject = document.querySelector('.currentproject')
                currentproject.textContent = `${name.name}`
                // const taskbutton  = document.getElementById('taskbtn')
                // taskbutton.addEventListener('click', (e) => {
                //     e.preventDefault()
                //     let inputtext = document.getElementById('inputTask')
                //     let task = inputtext.value;
                //     inputtext.value = '';
            
                //     let inputdate = document.getElementById('inputDate')
                //     let date = inputdate.value;
                //     inputdate.value =  ''

                //     console.log(userone.addTodo(`${name.name}`,task))
                // })
            })
            let pbutton = document.createElement('p')
            pbutton.textContent = `${name.name}`
            button.appendChild(pbutton)
            div.appendChild(button)
            df.appendChild(div)

            // const taskbutton  = document.getElementById('taskbtn')
            //     taskbutton.addEventListener('click', (e) => {
            //         e.preventDefault()
            //         let inputtext = document.getElementById('inputTask')
            //         let task = inputtext.value;
            //         inputtext.value = '';
            
            //         let inputdate = document.getElementById('inputDate')
            //         let date = inputdate.value;
            //         inputdate.value =  ''

            //         console.log(userone.addTodo(`${name.name}`,task))
            //     })
        })
        projectnamediv.appendChild(df)


        // const displayprojects = document.querySelector('.showprojects')

        // let button = document.querySelector('.projectname button')
        // button.innerHTML = '';
        // let projectnamediv = document.querySelector('.projectname')
        // projectnamediv.innerText = ''
        // let df = document.createDocumentFragment()
        // projects.forEach(name => {
        //     let div = document.createElement('div')
        //     div.classList.add('project-content')
        //     let button = document.createElement('button')
        //     button.addEventListener('click', () => {
        //         const projectpage = document.querySelector('.showprojects')
        //         while(projectpage.firstChild) {
        //             projectpage.removeChild(projectpage.firstChild)
        //         }
        //         const div = document.createElement('div')
        //         const h2 = document.createElement('h2')
        //         h2.innerText = `${name.name}`
        //         const holdtodo = document.createElement('div')
        //         holdtodo.classList.add('hold-tasks')
        //         const addTodoButton = document.createElement('button')
        //         addTodoButton.setAttribute("data-todomodal-target",'#todomodal')
        //         addTodoButton.classList.add('add-task')
                // addTodoButton.addEventListener('click', todoModal)
                    // const todomodal = document.createElement('div')
                    // todomodal.classList.add('todomodal')
                    // todomodal.setAttribute("id","todomodal")
            
                    // const todomodalheader = document.createElement('div')
                    // todomodalheader.classList.add('todalmodal-header')
            
                    // const todomodaltitle = document.createElement('div')
                    // todomodaltitle.classList.add('title')
                    // todomodaltitle.innerText = 'New Task'
            
                    // const todoclosebutton = document.createElement('button')
                    // todoclosebutton.classList.add('close-button')
                    // todoclosebutton.innerText = `&times;`
            
                    // todomodalheader.append(todomodaltitle,todoclosebutton)
            
                    // const todomodalbody = document.createElement('div')
                    // todomodalbody.classList.add('todomodal-body')
            
                    // const todomodalform = document.createElement('form')
                    // todomodalform.setAttribute('id','todoform')
                    // const todotaskinput = document.createElement('input')
                    // todotaskinput.setAttribute('type','text')
                    // todotaskinput.classList.add('inputTask')
                    // const tododateinput = document.createElement('input')
                    // tododateinput.setAttribute('type','date')
                    // tododateinput.classList.add('inputDate')
                    // const todosubmit = document.createElement('button')
                    // todosubmit.setAttribute('type','submit')
                    // todosubmit.classList.add('todobtn')
                    // todosubmit.innerText = 'Submit'
            
                    // todomodalform.append(todotaskinput,tododateinput,todosubmit)
            
                    // todomodalbody.appendChild(todomodalform)
            
                    // todomodal.append(todomodalheader,todomodalbody)
            
                    // document.body.appendChild(todomodal)
            
                    // const openTodoModalButtons = document.querySelectorAll('[data-todomodal-target]')
                    // const closeTodoModalButtons = document.querySelectorAll('.close-button')
                    // const overlay = document.getElementById('overlay')
            
                    // openTodoModalButtons.forEach(button => {
                    //     button.addEventListener('click', () => {
                    //         const modal = document.querySelector(button.dataset.todomodalTarget)
                    //         openModal(modal)
                    //     })
                    // })
            
                    // overlay.addEventListener('click', () => {
                    //     const modals = document.querySelectorAll('.todomodal.active') 
                    //     modals.forEach(modal => {
                    //         closeModal(modal)
                    //     })
                    // })
            
                    // closeTodoModalButtons.forEach(button => {
                    //     button.addEventListener('click', () => {
                    //         const modal = button.closest('.todomodal')
                    //         closeModal(modal)
                    //     })
                    // })
                    // function openModal(modal) {
                    //     if(modal == null) return
                    //     modal.classList.add('active')
                    //     overlay.classList.add('active')
                    // }
                    // function closeModal(modal) {
                    //     if(modal == null) return
                    //     modal.classList.remove('active')
                    //     overlay.classList.remove('active')
                    // }
                // })
        //         addTodoButton.innerText = 'Add Todo'

        //         div.append(h2,holdtodo,addTodoButton)
                
        //         displayprojects.appendChild(div)

        //     })
        //     let pbutton = document.createElement('p')
        //     pbutton.innerText = `${name.name}`
        //     button.appendChild(pbutton)
        //     div.appendChild(button)
        //     df.appendChild(div)
        // })
        // projectnamediv.appendChild(df)
            // const openTodoModalButtons = document.querySelectorAll('[data-todomodal-target]')
            // const closeTodoModalButtons = document.querySelectorAll('.close-button')
            // const overlay = document.getElementById('overlay')
    
            // openTodoModalButtons.forEach(button => {
            //     button.addEventListener('click', () => {
            //         const modal = document.querySelector(button.dataset.todomodalTarget)
            //         openModal(modal)
            //     })
            // })
    
            // overlay.addEventListener('click', () => {
            //     const modals = document.querySelectorAll('.todomodal.active') 
            //     modals.forEach(modal => {
            //         closeModal(modal)
            //     })
            // })
    
            // closeTodoModalButtons.forEach(button => {
            //     button.addEventListener('click', () => {
            //         const modal = button.closest('.todomodal')
            //         closeModal(modal)
            //     })
            // })
            // function openModal(modal) {
            //     if(modal == null) return
            //     modal.classList.add('active')
            //     overlay.classList.add('active')
            // }
            // function closeModal(modal) {
            //     if(modal == null) return
            //     modal.classList.remove('active')
            //     overlay.classList.remove('active')
            // }

        // let df = document.createDocumentFragment()
        // projects.forEach(name => {
        //     let p = document.createElement('p')
        //     p.innerText = `${name.name}`;
        //     let div = document.createElement('div')
        //     div.appendChild(p)
        //     df.appendChild(div)
        // });
        // button.appendChild(df)
        // projects.forEach(name => {
        //     let p = document.querySelector('.projectname p')
        //     p.innerText  = `${name.name}`
        // })
        // projectlist.forEach(name => {
        //     if(projects.find((project) => project.name === name)) {
        //         return true
        //     } else {
        //         return false
        //     }
            // let p = document.querySelector('.projectname p')
    //         // p.innerText = `${name}`
    //     })
    }

    const openTodoModalButtons = document.querySelectorAll('[data-todomodal-target]')
    const closeTodoModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')

    openTodoModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.todomodalTarget)
            openModal(modal)
        })
    })

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.todomodal.active') 
        modals.forEach(modal => {
            closeModal(modal)
        })
    })

    closeTodoModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.todomodal')
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

    const todosubmit = document.getElementById('taskbtn')
    todosubmit.addEventListener('click', (e) => {
        let userone = TodoController
        // let projects = userone.projects
        const currentproject = document.querySelector('.currentproject').textContent
         e.preventDefault()
        let inputtext = document.getElementById('inputTask')
        let task = inputtext.value;
        inputtext.value = '';
            
        let inputdate = document.getElementById('inputDate')
        let date = inputdate.value;
        inputdate.value =  ''
        console.log(userone.addTodo(currentproject,task,date))
            

                    // projects.forEach(project => {
                    //     console.log(userone.addTodo(`${project.name}`,task))
                    // })

                })
    // const todosubmit = document.getElementById('taskbtn')
    // todosubmit.addEventListener('click',addTodoToProject)

    // function addTodoToProject(e) {
    //     e.preventDefault()
        // let inputtext = document.getElementById('inputTask')
        // let task = inputtext.value;
        // inputtext.value = '';

        // let inputdate = document.getElementById('inputDate')
        // let date = inputdate.value;
        // inputdate.value =  ''
        
    // }

    // const todomodal = document.createElement('div')
    //                 todomodal.classList.add('todomodal')
    //                 todomodal.setAttribute("id","todomodal")
            
    //                 const todomodalheader = document.createElement('div')
    //                 todomodalheader.classList.add('todalmodal-header')
            
    //                 const todomodaltitle = document.createElement('div')
    //                 todomodaltitle.classList.add('title')
    //                 todomodaltitle.innerText = 'New Task'
            
    //                 const todoclosebutton = document.createElement('button')
    //                 todoclosebutton.classList.add('close-button')
    //                 todoclosebutton.innerText = `&times;`
            
    //                 todomodalheader.append(todomodaltitle,todoclosebutton)
            
    //                 const todomodalbody = document.createElement('div')
    //                 todomodalbody.classList.add('todomodal-body')
            
    //                 const todomodalform = document.createElement('form')
    //                 todomodalform.setAttribute('id','todoform')
    //                 const todotaskinput = document.createElement('input')
    //                 todotaskinput.setAttribute('type','text')
    //                 todotaskinput.classList.add('inputTask')
    //                 const tododateinput = document.createElement('input')
    //                 tododateinput.setAttribute('type','date')
    //                 tododateinput.classList.add('inputDate')
    //                 const todosubmit = document.createElement('button')
    //                 todosubmit.setAttribute('type','submit')
    //                 todosubmit.classList.add('todobtn')
    //                 todosubmit.innerText = 'Submit'
            
    //                 todomodalform.append(todotaskinput,tododateinput,todosubmit)
            
    //                 todomodalbody.appendChild(todomodalform)
            
    //                 todomodal.append(todomodalheader,todomodalbody)
            
    //                 document.body.appendChild(todomodal)
            
    //                 const openTodoModalButtons = document.querySelectorAll('[data-todomodal-target]')
    //                 const closeTodoModalButtons = document.querySelectorAll('.close-button')
    //                 const overlay = document.getElementById('overlay')
            
    //                 openTodoModalButtons.forEach(button => {
    //                     button.addEventListener('click', () => {
    //                         const modal = document.querySelector(button.dataset.todomodalTarget)
    //                         openModal(modal)
    //                     })
    //                 })
            
    //                 overlay.addEventListener('click', () => {
    //                     const modals = document.querySelectorAll('.todomodal.active') 
    //                     modals.forEach(modal => {
    //                         closeModal(modal)
    //                     })
    //                 })
            
    //                 closeTodoModalButtons.forEach(button => {
    //                     button.addEventListener('click', () => {
    //                         const modal = button.closest('.todomodal')
    //                         closeModal(modal)
    //                     })
    //                 })
    //                 function openModal(modal) {
    //                     if(modal == null) return
    //                     modal.classList.add('active')
    //                     overlay.classList.add('active')
    //                 }
    //                 function closeModal(modal) {
    //                     if(modal == null) return
    //                     modal.classList.remove('active')
    //                     overlay.classList.remove('active')
    //                 }

    // function todoModal() {
    //     const todomodal = document.createElement('div')
    //     todomodal.classList.add('todomodal')
    //     todomodal.setAttribute("id","todomodal")

    //     const todomodalheader = document.createElement('div')
    //     todomodalheader.classList.add('todalmodal-header')

    //     const todomodaltitle = document.createElement('div')
    //     todomodaltitle.classList.add('title')
    //     todomodaltitle.innerText = 'New Task'

    //     const todoclosebutton = document.createElement('button')
    //     todoclosebutton.classList.add('close-button')
    //     todoclosebutton.innerText = `&times;`

    //     todomodalheader.append(todomodaltitle,todoclosebutton)

    //     const todomodalbody = document.createElement('div')
    //     todomodalbody.classList.add('todomodal-body')

    //     const todomodalform = document.createElement('form')
    //     todomodalform.setAttribute('id','todoform')
    //     const todotaskinput = document.createElement('input')
    //     todotaskinput.setAttribute('type','text')
    //     todotaskinput.classList.add('inputTask')
    //     const tododateinput = document.createElement('input')
    //     tododateinput.setAttribute('type','date')
    //     tododateinput.classList.add('inputDate')
    //     const todosubmit = document.createElement('button')
    //     todosubmit.setAttribute('type','submit')
    //     todosubmit.classList.add('todobtn')
    //     todosubmit.innerText = 'Submit'

    //     todomodalform.append(todotaskinput,tododateinput,todosubmit)

    //     todomodalbody.appendChild(todomodalform)

    //     todomodal.append(todomodalheader,todomodalbody)

    //     // document.body.appendChild(todomodal)

        // const openTodoModalButtons = document.querySelectorAll('[data-todomodal-target]')
        // const closeTodoModalButtons = document.querySelectorAll('.close-button')
        // const overlay = document.getElementById('overlay')

        // openTodoModalButtons.forEach(button => {
        //     button.addEventListener('click', () => {
        //         const modal = document.querySelector(button.dataset.todomodalTarget)
        //         openModal(modal)
        //     })
        // })

        // overlay.addEventListener('click', () => {
        //     const modals = document.querySelectorAll('.todomodal.active') 
        //     modals.forEach(modal => {
        //         closeModal(modal)
        //     })
        // })

        // closeTodoModalButtons.forEach(button => {
        //     button.addEventListener('click', () => {
        //         const modal = button.closest('.todomodal')
        //         closeModal(modal)
        //     })
        // })
        // function openModal(modal) {
        //     if(modal == null) return
        //     modal.classList.add('active')
        //     overlay.classList.add('active')
        // }
        // function closeModal(modal) {
        //     if(modal == null) return
        //     modal.classList.remove('active')
        //     overlay.classList.remove('active')
        // }

    //     document.body.appendChild(todomodal)
    // }

//     const openTodoModalButtons = document.querySelectorAll('[data-todomodal-target]')
//     const closeTodoModalButtons = document.querySelectorAll('[data-close-button]')
//     const overlay = document.getElementById('overlay')

//     openTodoModalButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const modal = document.querySelector(button.dataset.todomodalTarget)
//             openModal(modal)
//         })
//     })

//     overlay.addEventListener('click', () => {
//         const modals = document.querySelectorAll('.todomodal.active') 
//         modals.forEach(modal => {
//             closeModal(modal)
//         })
//     })

//     closeTodoModalButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const modal = button.closest('.todomodal')
//             closeModal(modal)
//         })
//     })
//     function openModal(modal) {
//         if(modal == null) return
//         modal.classList.add('active')
//         overlay.classList.add('active')
//     }
//     function closeModal(modal) {
//         if(modal == null) return
//         modal.classList.remove('active')
//         overlay.classList.remove('active')
//     }


    return {
        renderTemp
    }

})()

const projectForm = (() => {
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

    let projectsubmit = document.getElementById('btn')
    projectsubmit.addEventListener('click',addProjectForm)

    function addProjectForm(e) {
        e.preventDefault()
        let input = document.getElementById('inputProjectName')
        let name = input.value;
        input.value = '';

        closeModal(modal)
        console.log(`PROJECT FORM: a project ${name} has been added`)
        pubsub.publish('projectAdded',name)

    }

})()




export {projectForm, projects}
// export const projectmodal = (() => {
//    const openProjectModal = document.querySelectorAll('[data-modal-target]')
//    const closeProjectModal  = document.querySelectorAll('[data-close-button]')
//    const overlay = document.getElementById('overlay')

//    openProjectModal.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = document.querySelector('button.dataset.modalTarget')
//         openModal(modal)
//     })
//    })

//    overlay.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.project-modal.active')
//     modals.forEach(modal => {
//         closeModal(modal)
//     })
//    })

//    closeProjectModal.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = button.closest('.modal')
//         closeModal(modal)
//     })
//    })

//    function openModal(modal) {
//     if(modal == null) return 
//     modal.classList.add('active')
//     overlay.classList.add('active')
//    }

//    function closeModal(modal) {
//     if(modal == null) return 
//     modal.classList.remove('active')
//     overlay.classList.remove('active')
//    }
// })()