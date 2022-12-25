import { Projects } from "./project";
import pubsub from "./pubsub";
import { Task } from "./task";
import TodoController from "./TodoController";
import { format } from "date-fns";
import close from '../assets/close.svg'
import differenceInCalendarISOWeeks from "date-fns/esm/fp/differenceInCalendarISOWeeks/index.js";
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

// const projects = (() => {
//     let list = [];
//     function renderTemp(container) {
//         let template = document.getElementById('projectListTemplate')
//         let div = template.content.cloneNode(true);
//         container.appendChild(div)

//         console.log('PROJECTS: we want to know if a project is added')
//         pubsub.subscribe('projectAdded',addProject)
    // }
    // function addProject(name) {
    //     project added event publish
    //     console.log(`I hear that ${name} is being added`)
    //     let projectlist = list
    //     let userone = TodoController
    //     let projects = userone.projects
    //     console.log(projects)
    //     userone.addProject(name)
    //     console.log(userone.getProject(name))
    //     projectlist.push(userone)
    //     console.log(userone)
    //     console.log('This is',userone)
    //     console.log(projectlist)
    //     projectlist = Array.from(list).sort()
    //     console.log('projectUpdated')
    //     pubsub.publish('projectUpdated', name)

    //     let projectnamediv = document.querySelector('.projectname')
    //     projectnamediv.textContent = ''
    //     let df = document.createDocumentFragment()
    //     projects.forEach(name => {
    //         let div = document.createElement('div')
    //         div.classList.add('project-content')
    //         let button =  document.createElement('button')
    //         button.classList.add('projectindex')
    //         let buttondiv = document.createElement('div')

            // button.addEventListener('click', (e) => {
            //     if(e.target.className == 'name') {
            //         const currentproject = document.querySelector('.currentproject')
            //         currentproject.textContent = `${name.name}`
            //         const displaytodos = document.querySelector('.hold-todos')
            //         while(displaytodos.firstChild) {
            //             displaytodos.removeChild(displaytodos.firstChild)
            //         }
            //         displayTodos()
            //         showCurrentTodos()
            //         const addTask = document.getElementById('add-task')
            //         addTask.style.display = 'block'
            //     }
            //     else if(e.target.className == 'close') {
            //         const currentproject = document.querySelector('.project-content')
            //         const
            //         console.log(userone.deleteProject(currentproject))
                // }
                // const currentproject = document.querySelector('.currentproject')
                // currentproject.textContent = `${name.name}`
                // const displaytodos = document.querySelector('.hold-todos')
                // while(displaytodos.firstChild) {
                //     displaytodos.removeChild(displaytodos.firstChild)
                // }
            //     const todosubmit = document.getElementById('taskbtn')
            //     todosubmit.addEventListener('click',displayTodo)
            //     showCurrentTodos()
            //     const addTask = document.getElementById('add-task')
            //     addTask.style.display = 'block'
            //     displayTodos()
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
            // })
            // let spanbutton = document.createElement('span')
            // spanbutton.textContent = `${name.name}`
            // spanbutton.classList.add('name')
            // let pimg = new Image()
            // pimg.classList.add('close')
            // pimg.src = close
            // buttondiv.append(pimg,spanbutton)
            // button.appendChild(buttondiv)
            // div.appendChild(button)
            // df.appendChild(div)

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
        // })
        // projectnamediv.appendChild(df)
        // const div = document.querySelector('.project-content')
        // const spanbutton = document.querySelector('.name').textContent
        // div.addEventListener('click', (e) => {
        //     if(e.target.className == 'close') {
        //         const button = e.target.parentElement
        //         div.removeChild(button)
        //         console.log(userone.deleteProject(spanbutton))
        //     }
        // })

        // const pimg = document.querySelector('.close')
        // pimg.addEventListener('click',deleteProject)


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
        // })
    // }

    // function deleteProject(e) {
    //     if(e.target.className === 'close') {
    //         console.log('Hey')
        // }
        // let userone = TodoController
        // const pbutton = document.querySelector('.name').textContent
        // console.log(userone.deleteProject(pbutton))
    // })

    // const taskbtn = document.getElementById('taskbtn')
    // taskbtn.addEventListener('click', displayTodo)


    // const openTodoModalButtons = document.querySelectorAll('[data-todomodal-target]')
    // const closeTodoModalButtons = document.querySelectorAll('[data-close-button]')
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

    // function displayTodo(e) {
    //     e.preventDefault()
    //     let userone = TodoController
    //     const currentproject = document.querySelector('.currentproject').textContent
    //     let input = document.getElementById('inputTask')
    //     let task = input.value
    //     input.value = '';

    //     let inputdate = document.getElementById('inputDate')
    //     let date = inputdate.value;
    //     inputdate.value = '';

    //     console.log(userone.addTodo(currentproject,task,date))
    //     const div = document.createElement('div')
    //     div.classList.add('task-content')

    //     const button = document.createElement('button')
    //     button.classList.add('taskindex')
    //     const divrightside = document.createElement('div')
    //     divrightside.classList.add('rightside')
        // divrightside.appendChild(p)

        // const divleftside = document.createElement('div')
        // divleftside.classList.add('leftside')

        // divleftside.appendChild(p2)
        // div.append(divleftside,divrightside)

        // const p = document.createElement('p')
        // p.textContent = task
        // const p2 = document.createElement('p')
        // p2.textContent = date;

        // const nav = document.querySelector('.hold-todos')

        // divrightside.appendChild(p)
        // divleftside.appendChild(p2)


        // button.append(divrightside,divleftside)
        // div.appendChild(button)


        // nav.appendChild(div)
        // nav.append(p,p2)

    // }

    // function showCurrentTodos() {
    //     let userone = TodoController
    //     const currentproject = document.querySelector('.currentproject').textContent
    //     console.log(userone.getProject(currentproject).todos)

    //     const nav = document.querySelector('.hold-todos')
    //     for(const objIndex of userone.getProject(currentproject).todos) {
    //         const div = document.createElement('div')
    //         div.classList.add('task-content')

    //         const button = document.createElement('button')
    //         button.classList.add('taskindex')

    //         const divleftside = document.createElement('div')
    //         divleftside.classList.add('leftside')
    //         const leftsidep = document.createElement('p')
    //         leftsidep.textContent = objIndex.task
    //         divleftside.appendChild(leftsidep)

    //         const divrightside = document.createElement('div')
    //         divrightside.classList.add('rightside')
    //         const rightsidep = document.createElement('p')
    //         rightsidep.textContent = objIndex.duedate
    //         divrightside.appendChild(rightsidep)

    //         button.append(divleftside,divrightside)
    //         div.appendChild(button)
    //         nav.appendChild(div)
    //         console.log(objIndex.duedate)
    //         const list = document.createElement('div')
    //         list.setAttribute('class',objIndex);
    //         for(const key in objIndex) {
    //             const div = document.createElement('div')
    //             div.classList.add('task-content')
    //             const button = document.createElement('button')
    //             const divleftside = document.createElement('div')
    //             divleftside.classList.add('leftside')
    //             divleftside.appendChild(liElemnt)
    //             const divrightside = document.createElement('div')
    //             divrightside.classList.add('rightside')
    //             const liElemnt = document.createElement('p');
    //             button.append(divleftside,divrightside)
    //             liElemnt.textContent = `${key}:${objIndex[key]}`;
    //             liElemnt.textContent = `${objIndex[key]}`
    //             list.appendChild(liElemnt)
    //         }
    //         nav.appendChild(list)
    //     }
    // }

    // const todosubmit = document.getElementById('taskbtn')
    // todosubmit.addEventListener('click', (e) => {
    //     let userone = TodoController
        // let projects = userone.projects
        // const currentproject = document.querySelector('.currentproject').textContent
        //  e.preventDefault()
        // let inputtext = document.getElementById('inputTask')
        // let task = inputtext.value;
        // inputtext.value = '';
            
        // let inputdate = document.getElementById('inputDate')
        // let date = inputdate.value;
        // inputdate.value =  ''
        // console.log(date)
        // console.log(userone.addTodo(currentproject,task,date))
        // const p = document.createElement('p')
        // p.innerText = task
        // const nav = document.querySelector('.hold-todos')
        // nav.appendChild(p)
        // console.log(userone.getProject(currentproject).todos)
        // let currenttodos = userone.getProject(currentproject).todos
        // currenttodos.forEach(task) 
 // projects.forEach(project => {
                    //     console.log(userone.addTodo(`${project.name}`,task))
                    // })

                // })
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

    // function displayTodos() {
    //     const nav = document.querySelector('.hold-todos')
        
    // }

//     function displayTodos() {
//         const currentproject = document.querySelector('.currentproject').textContent
//         let userone = TodoController
//         let projecttodos = userone.getProject(currentproject).todos

//         const nav = document.createElement('p')
//         nav.textContent = `${projecttodos}`
//         const holdtodos = document.querySelector('.hold-todos')
//         holdtodos.appendChild(nav)
//        console.log(projecttodos)
//     }

//     return {
//         renderTemp
//     }

// })()

const projects = (() => {
    let list = [];
    let userone = TodoController
    let projects = userone.projects
    list.push(userone)
    // console.log(list)
    function renderTemp(container) {
        let template = document.getElementById('projectListTemplate')
        let div = template.content.cloneNode(true)
        container.appendChild(div)
        console.log('PROJECTS: we want to know if a project is being added')
        pubsub.subscribe('projectAdded', addProject)
    }
    function addProject(name) {
        console.log(`I hear that ${name} is being added`)
        let projectlist = list
        userone.addProject(name)
        console.log(projectlist)
        projectlist = Array.from(list).sort()
        console.log('projectUpdated')
        pubsub.publish('projectUpdated',name)

        let projectnamediv = document.querySelector('.projectname')
        let userprojects = document.querySelector('.user-projects')
        const addTask = document.getElementById('add-task')
        const currentproject = document.querySelector('.currentproject')

        currentproject.textContent = name

        addTask.style.display = 'block'

        projectnamediv.textContent = '';
        let df = document.createDocumentFragment()
        projects.forEach(name => {
            let button = document.createElement('button')
            button.classList.add('projectindex')

            // button.addEventListener('click', (e) => {
            //     if(e.target.className == 'projectindex') {
            //         const currentproject = document.querySelector('.currentproject')
            //         currentproject.textContent = `${name.name}`
            //         const holdtodos = document.querySelector('.hold-todos')
            //         addTask.style.display = 'block'
            //         while(holdtodos.firstChild) {
            //             holdtodos.removeChild(holdtodos.firstChild)
            //         }
            //         showCurrentTodos()
            //     }

            // })

            let buttonleftpanel = document.createElement('div')
            buttonleftpanel.classList.add('left-panel')

            let buttonrightpanel = document.createElement('div')
            buttonrightpanel.classList.add('right-panel')


            let pbutton = document.createElement('p')
            pbutton.textContent = `${name.name}`
            pbutton.classList.add('name')
            let spanbutton = document.createElement('span')
            spanbutton.textContent = 'X'
            spanbutton.classList.add('close')

            // spanbutton.addEventListener('click', (e) => {
            //     if(e.target.className == 'name') {
            //         console.log()
            //     }
                // const pbutton = document.querySelector('.name').textContent
                // const button = e.target.closest(pbutton)
                // console.log(pbutton)
                // button.parentElement.removeChild(button)
                // const currentproject = document.querySelector('.currentproject')
                // currentproject.textContent = ''
                // addTask.style.display = 'none'
                // userone.deleteProject(name)
                // pubsub.publish('projectDeleted',name)

                // const holdtodos = document.querySelector('.hold-todos')
                //      while(holdtodos.firstChild) {
                //         holdtodos.removeChild(holdtodos.firstChild)
                //      }
                // parentNode.remove();
                // let target = e.target;
                // let itemIndex = 0;
                // for(const item of list) {
                //     if(item.index === target.parentNode.index) {
                //         list.splice(item.index,1);
                //         userone.deleteProject(item)
                //         break;
                //      }
                //      itemIndex++
                // }
            // })

            buttonleftpanel.appendChild(spanbutton)
            buttonrightpanel.appendChild(pbutton)

            button.append(buttonleftpanel, buttonrightpanel)
            // div.appendChild(button)
            df.appendChild(button)

            button.addEventListener('click', (e) => {
                if(e.target.className == 'projectindex') {
                    const currentproject = document.querySelector('.currentproject')
                    currentproject.textContent = `${name.name}`
                    const holdtodos = document.querySelector('.hold-todos')
                    addTask.style.display = 'block'
                    while(holdtodos.firstChild) {
                        holdtodos.removeChild(holdtodos.firstChild)
                    }
                    // showCurrentTodos()
                }
                if(e.target.className == 'close') {
                    const currentproject = document.querySelector('.currentproject').textContent
                    // currentproject.textContent = '';
                    userone.deleteProject(name)
                    addTask.style.display = 'none'
                    // list = list.filter(nm => nm !== `${name.name}`)
                    const button = e.target.closest('.projectindex')
                    button.parentElement.removeChild(button)
                    const holdtodos = document.querySelector('.hold-todos')
                    while(holdtodos.firstChild) {
                        holdtodos.removeChild(holdtodos.firstChild)
                    }
                    // addTask.style.display = 'none'
                    console.log(`PROJECTS: projectDeleted the ${name.name}`)
                    pubsub.publish('projectDeleletd', list)
                    console.log(list)
                }

            })

            // userprojects.addEventListener('click', (e) => {
            //     if(e.target.className == 'projectindex'){
            //         const currentproject = document.querySelector('.currentproject')
            //         currentproject.textContent = `${name.name}`
            //         const addTask = document.getElementById('add-task')
            //         addTask.style.display = 'block'
            //         const holdtodos = document.querySelector('.hold-todos')
            //         while(holdtodos.firstChild) {
            //             holdtodos.removeChild(holdtodos.firstChild)
            //         }
            //         currentproject.textContent = `${name.name}`
            //     }
            //      if(e.target.className == 'close'){
            //         const button = e.target.closest('.projectindex')
            //         button.parentElement.removeChild(button)
            //         userone.deleteProject(button)
            //         const currentproject = document.querySelector('.currentproject')
            //         currentproject.textContent = ''
            //         console.log(projectlist)
        //             const pbutton = document.querySelector('.name')
        //             let name = pbutton.textContent
        //             projectindex.parentNode.remove()
                 
        //     }
        // })


            // projectnamediv.addEventListener('click', (e) => {
            //     if(e.target.className == 'projectindex') {
            //         const currentproject = document.querySelector('.currentproject')
            //         currentproject.textContent = `${name.name}`
            //     }
            //     if(e.target.className == 'close') {
            //         const button = e.target.parentElement;
            //     }
            // })

            // button.addEventListener('click', (e) => {
            //     if(e.target.className == 'projectindex'){
            //         const currentproject = document.querySelector('.currentproject')
            //         currentproject.textContent = `${name.name}`
            //     }
            // })

            // const projectul = document.querySelector('.projectname ul')
            // projectul.addEventListener('click',(e) => {
            //     if(e.target.className == 'name') {
            //         console.log(`${name.name}`)
            //     }
            // })
            // let li = document.createElement('li')
            // li.textContent = `${name.name}`
            // let deletespan = document.createElement('span')
            // deletespan.textContent = 'X'
            // deletespan.classList.add('close')
            // let span = document.createElement('p')
            // span.classList.add('name')
            // span.textContent = `${name.name}`
            // li.append(deletespan,span)
            // df.appendChild(li)
        })
        projectnamediv.appendChild(df)

    //     userprojects.addEventListener('click', (e) => {
    //         if(e.target.className == 'close'){
    //             const button = e.target.closest('.projectindex')
    //             button.parentElement.removeChild(button)
    //             userone.deleteProject(button)
    //             const currentproject = document.querySelector('.currentproject')
    //             currentproject.textContent = ''
    //             console.log(projectlist)
    //             const addTask = document.getElementById('add-task')
    //             addTask.style.display = 'none'
    //             const holdtodo = document.querySelector('.hold-todos')
    //             while(holdtodo.firstChild) {
    //                 holdtodo.removeChild(holdtodo.firstChild)
    //             }                
    //             const pbutton = document.querySelector('.name')
    //             let name = pbutton.textContent
    //             projectindex.parentNode.remove()
             
    //     }
    // })

    //     userprojects.addEventListener('click', (e) => {
    //         if(e.target.className == 'projectindex'){
    //             const pbutton = document.querySelector('.name').textContent
    //             const currentproject = document.querySelector('.currentproject')
    //             currentproject.textContent = pbutton
    //         }
    //         else if(e.target.className == 'close'){
    //             const button = e.target.closest('.projectindex')
    //             button.parentElement.removeChild(button)
    //             userone.deleteProject(button)
    //             console.log(projectlist)
    //             const pbutton = document.querySelector('.name')
    //             let name = pbutton.textContent
    //             projectindex.parentNode.remove()
             
    //     }
    // })
        // console.log(projectlist)

        // const projectul = document.querySelector('.projectname ul')
        // projectul.addEventListener('click', (e) => {
        //     let item = e.target.closest('p')
        //     let name = item.textContent

        //     const currentproject = document.querySelector('.currentproject')
        //     currentproject.textContent = `${name}`
        // })
        // projectnameul.addEventListener('click', (e) => {
        //     if(e.target.className == 'name') {
        //         const currentproject = document.querySelector('.currentproject')
        //         currentproject.textContent = `${name}`
        //         const addTask = document.getElementById('add-task')
        //         addTask.style.display = 'block'
        //     } else if(e.target.className == 'close') {
        //         userone.deleteProject(`${name}`)
        //         console.log(userone)
        //         const li = e.target.parentElement
        //         projectnameul.removeChild(li)
                // const currentproject = document.querySelector('.currentproject')
                // currentproject.textContent  = '';
                // const addTask = document.getElementById('add-task')
                // addTask.style.display = 'none'

            // }
        // })  
    }



    const taskbtn = document.getElementById('taskbtn')
    taskbtn.addEventListener('click',displayTodo)

    function displayTodo(e) {
        e.preventDefault()
        const currentproject = document.querySelector('.currentproject').textContent
        let input = document.getElementById('inputTask')
        let task = input.value
        input.value = '';

        let inputdate = document.getElementById('inputDate')
        let date = inputdate.value;
        inputdate.value = ''

        userone.addTodo(currentproject,task,date)
        const nav = document.querySelector('.hold-todos')

        const todobutton = document.createElement('button')
        todobutton.classList.add('task-content')

        todobutton.addEventListener('click', (e) => {
            if(e.target.className == 'delete') {
                const currentproject = document.querySelector('.currentproject').textContent
                const button = e.target.closest('.task-content')
                button.parentElement.removeChild(button)
                userone.deleteTodo(currentproject,task)
                console.log(`PROJECTS: removed ${task} from ${currentproject}`)
                pubsub.publish('taskDeleted',list)
                console.log(projects)
            }
        })

        const todoleft = document.createElement('div')
        todoleft.classList.add('left-panel')
        const tododelete = document.createElement('span')
        tododelete.textContent = 'X'
        tododelete.classList.add('delete')
        const todoname = document.createElement('p')
        todoname.classList.add('todo-name')
        todoname.textContent = task
        
        todoleft.append(tododelete,todoname)

        const todoright = document.createElement('div')
        todoright.classList.add('right-panel')
        const tododate = document.createElement('span')
        tododate.classList.add('task-date')
        tododate.textContent = date

        todoright.appendChild(tododate)

        todobutton.append(todoleft,todoright)

        nav.appendChild(todobutton)

        const todomodal = document.getElementById('todomodal')

    }

    function showCurrentTodos() {
        const currentproject = document.querySelector('.currentproject').textContent
        // userone.getProject(currentproject).todos

        const holdtodos = document.querySelector('.hold-todos')
        for(const objIndex of userone.getProject(currentproject).todos) {
            const leftpanel = document.createElement('div')
            leftpanel.classList.add('left-panel')

            const tododelete = document.createElement('span')
            tododelete.textContent = 'X'
            tododelete.classList.add('delete')

            const todoname = document.createElement('p')
            todoname.classList.add('todo-name')
            todoname.textContent = objIndex.task

            const rightpanel = document.createElement('div')
            const tododate = document.createElement('span')
            tododate.classList.add('task-date')
            tododate.textContent = objIndex.duedate

            leftpanel.append(tododelete,todoname)
            rightpanel.appendChild(tododate)

            holdtodos.append(leftpanel,rightpanel)
        }
    }

    // const holdtodos = document.querySelector('.hold-todos')
    // holdtodos.addEventListener('click',(e) => { 
    //     if(e.className == 'delete') {
    //         const span = e.target.closest('span')
    //         console.log(span)
    //     }
    // })


    const openTodoModalButtons = document.querySelectorAll('[data-todomodal-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
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

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modals = document.querySelectorAll('.todomodal')
            modals.forEach(modal => {
                closeModal(modal)
            })
        })
    })

    function openModal(todomodal) {
        if(todomodal == null) return
        todomodal.classList.add('active')
        overlay.classList.add('active')
    }
    
    function closeModal(todomodal) {
        if(todomodal == null) return 
        todomodal.classList.remove('active')
        overlay.classList.remove('active')
    }


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