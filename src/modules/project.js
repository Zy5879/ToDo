import { lastDayOfISOWeek } from "date-fns/esm/fp";
import pubsub from "./pubsub";
import { ProjectFactory, TodoFactory } from "./todo";

export const projects = (() => {
    let list = [];
    const showProjects = document.querySelector('.ShowProjects')

    function renderTemp(container) {
        let template = document.getElementById('projectListTemplate')
        let div = template.content.cloneNode(true);
        container.appendChild(div)
        let ul = document.querySelector('.projects ul')
        console.log('PROJECTS: we want to know if a project is added')
        pubsub.subscribe('projectAdded',addProject)
    }
    //tell pubsub controller that we want to know about a project being added
    function addProject(name) {
        //project added event publish
        console.log(`I hear that ${name} is being added`)
        let projectlist = list
        projectlist.push(ProjectFactory(name))
        console.log(projectlist)
        projectlist = Array.from(list).sort()

        console.log('projectUpdated',name)
        pubsub.publish('projectUpdated',name)

        let ul = document.querySelector('.projects ul')
        ul.innerHTML = '';
        let df = document.createDocumentFragment()
        projectlist.forEach(projectname => {
            let li = document.createElement('li')
            li.classList.add('project-type')
            li.innerText = `${projectname.name}`;

            li.addEventListener('click', () => {
                const projectPage = document.querySelector('.ShowProjects')
                while(projectPage.firstChild) {
                    projectPage.removeChild(projectPage.firstChild)
                }
                const h2 = document.createElement('h2')
                h2.innerText = `${projectname.name}`
                const holdtask = document.createElement('aside')
                holdtask.classList.add('holdtask')
                const btn = document.createElement('button')
                btn.classList.add('task-button')
                btn.innerText = 'Add Task'
                
                const form = document.createElement('form')
                form.classList.add('task-form')
                const input = document.createElement('input')
                input.setAttribute('type','text')
                const btn2 = document.createElement('button')
                btn2.classList.add('newtodo')
                btn2.innerText = 'Add'

                btn.addEventListener('click',taskform)

                form.append(input,btn2)
                showProjects.append(h2,holdtask,btn,form)
            }) 
            
            // () => {
            //     const projectpage = document.querySelector('.ShowProjects')
            //     while(projectpage.firstChild) {
            //         projectpage.removeChild(projectpage.firstChild);
            //     }
            //     const h2 = document.createElement('h2')
            //     h2.textContent = `${projectname.name}`
            //     showProjects.appendChild(h2)
            // })
                // console.log(li.innerText)
            // li.innerText = `${projectname.name}`;
            df.appendChild(li)
        })
        ul.appendChild(df)
    }

    function taskform() {
        const btn = document.querySelector('.task-button')
        btn.style.display = 'none'

        const form = document.querySelector('.task-form')
        form.style.display = 'block'

        form.querySelector('button').addEventListener('click',addTodoForm)
    }

    function addTodoForm(e) {
        e.preventDefault()
        let input = document.querySelector('.task-form input')
        let todo = input.value;
        input.value = '';

        const form = document.querySelector('.task-form')
        form.style.display = 'none'

        const btn = document.querySelector('.task-button')
        btn.style.display = 'block';

        console.log(`TODO FORM: a task ${todo} has been added to a project`)
        pubsub.publish('taskAdded',todo)
    }

    // function renerTodoTemp(container) {
    //     const temp = document.createElement('template')
    //     temp.setAttribute('id','todoListTemplate')
    //     const tempdiv = document.createElement('div')
    //     tempdiv.classList.add('todotask')
    //     const tempul = document.createElement('ul')
    //     tempdiv.appendChild(tempul)
    //     temp.appendChild(tempdiv)

    //     let template = document.getElementById('todoListTemplate')
    //     container.appendChild(template.content.cloneNode(true))

    //     console.log('TODO: we want to know if a task is being added')
    //     pubsub.subscribe('taskAdded', addTask)
    // }

    // function addTask(todo) {
    //     task added event publish
    //     console.log(`I hear that ${todo} is being added`)
    //     let tasklist = list;
    //     tasklist.push(TodoFactory(todo))
    //     console.log(tasklist)
    //     tasklist = Array.from(list).sort()
    //     console.log('taskUpdated',todo)
    //     pubsub.publish('taskUpdated',todo)

    //     let ul = document.querySelector('.todotask ul')
    //     ul.innerText = ''
    //     let df = document.createDocumentFragment()
    //     tasklist.forEach(task => {
    //         let li = document.createElement('li')
    //         li.classList.add('task-name')
    //         li.innerText = todo

    //         df.appendChild(li)
    //     })
    //     ul.appendChild(df)
    // }

    // function addTodoForm(e) {
    //     e.preventDefault()
    //     let input = document.querySelector('.task-form input')
    //     let todo = input.value;
    //     input.value = '';

    //     const form = document.querySelector('.task-form')

    //     const addTask = document.querySelector('.task-button')

    //     addTask.style.display = 'block';
    //     form.style.display = 'none';

    //     console.log(`TODO FORM: a todo ${todo} has been added to a project`)
    //     pubsub.publish('taskAdded',todo)
    // }
    // }

    // function displayProject(projectname) {
        // const h2 = document.createElement('h2')
        // h2.textContent = projectname
        // showProjects.appendChild(h2)
    // }

    // function showProject() {
        // const projectpage = document.querySelector('.ShowProjects')
        // while(projectpage.firstChild) {
        //     projectpage.removeChild(projectpage.firstChild);
        // }
        // const h2 = document.createElement('h2')
        // h2.textContent = ``
        // projectpage.appendChild(h2)

        // list = list.filter(nm => {
        //     if(nm !== name)
        // })
        // document.querySelector('.project-type').addEventListener('click', () => {
        //     console.log('hey')
        // })
        // document.querySelector('.projects').addEventListener('click',(e) => {
        //     if(e.target.classList.contains('project-type')) {
        //         let item = e.target
        //         let name = item.textContent
        //         console.log(`${name}`)
        //     }
        // })
        // let item = ev.target
        // let name = item.textContent
        // console.log(ProjectFactory(name))
        // console.log(`${name}`)
        // console.log(`${name}`)

        // document.querySelector('.projects').addEventListener('click', (event) => {
        //     if(event.target.classList.contains('project-type')) {
        //          console.log(`${name}`)
        //     }
        // })


        // const btn = document.querySelectorAll('.project-type')
        // Array.from(btn).forEach((item) => {
        //     item.addEventListener('click', () => {
        //         const projectpage = document.querySelector('.ShowProjects')
        //         while(projectpage.firstChild) {
        //             projectpage.removeChild(projectpage.firstChild)
        //         }
        //         displayProject(`${name}`)
        //         console.log(`${name}`)
                // const h2 = document.createElement('h2')
                // h2.innerText = `${name}`
                // showProjects.appendChild(h2)
        //     })
        // })
        // Array.from(buttons).forEach(btn => {
        //     btn.addEventListener('click', () => {
        //         console.log('Hey')
        //     })
        // })

       
        // const btn = document.querySelectorAll('.project-type')
        // btn.addEventListener('click', () => {
        //     const projectpage = document.querySelector('.ShowProjects')
        //     while(projectpage.firstChild) {
        //         projectpage.removeChild(projectpage.firstChild)
        //     }
            // const h2 = document.createElement('h2')
            // h2.innerText = `${name}`
            // showProjects.appendChild(h2)

        // })
        // console.log(`${name}`)
    // }
    // const btn = document.querySelectorAll('.project-type')
    // Array.from(btn).forEach((item, index) => {
    //     item.addEventListener('click', () => {
    //         console.log(`${list}`)
            // const projectpage = document.querySelector('.ShowProjects')
            // while(projectpage.firstChild) {
            //     projectpage.removeChild(projectpage.firstChild)
            // }
            // const h2 = document.createElement('h2')
            // h2.innerText = `${list.name[index]}`
            // showProjects.appendChild(h2)
    //     })
    // })

    // const btn = document.querySelectorAll('.project-type')
    // Array.from(btn).forEach((item, index) => {
    //     item.addEventListener('click', () => {
    //         const h2
    //     })
    // })




    //     list = list.filter(nm => nm !== name)

    //     list.map((name) => {
    //         const div = document.createElement('div')
    //         div.innerText = `${name.name}`
    //         document.body.appendChild(div)
    //     })

        // list.forEach((item) => {
         
        //     const div = document.createElement('div')
        //     div.innerText = `${item.name}`
        //     document.body.appendChild(div)
        // })

        // document.querySelector('.project-type').addEventListener('click', () => {
        //     console.log(`${name}`)
        // })
    return {
        renderTemp,
        // renerTodoTemp,
        list
    }

})()