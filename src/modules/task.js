import pubsub from "./pubsub";
import { ProjectFactory, TodoFactory } from "./todo";

export const todo = (() => {
    let list = [];
    console.log('TODO: we want to know if a task is being added')
    pubsub.subscribe('taskAdded', addTask)
   



    // const holdtask = document.querySelector('.holdtask')

    // function renderTemp(container) {
        // let template = document.getElementById('todoListTemplate')
        // let div = template.content.cloneNode(true)
        // container.appendChild(div)
    //     const div = document.createElement('div')
    //     div.classList.add('todotask')
    //     const divul = document.createElement('ul')

    //     div.appendChild(divul)

    //     container.appendChild(div)

        // console.log('TODO: we want to know if a task is being added')
    //     pubsub.subscribe('taskAdded', addTask)
    // }

    function addTask(todo) {
        //task added event publish
        console.log(`I hear that ${todo} is being added`)
        let tasklist = list;
        tasklist.push(TodoFactory(todo))
        console.log(tasklist)
        tasklist = Array.from(list).sort()
        console.log('taskUpdated',todo)
        pubsub.publish('taskUpdated',todo)

        let div = document.createElement('div')
        div.classList.add('todotask')
        
        // let divul = document.createElement('ul')
        // div.appendChild(divul)
        let divbutton = document.createElement('button')
        divbutton.classList.add('task-content')
        let btnright = document.createElement('div')
        btnright.classList.add('right-area')
        let btnp = document.createElement('p')

        btnp.classList.add('task-name')
        // })

        // btnp.addEventListener('click', (e) => {
        //         const taskname = document.querySelector('.task-name')
        //         taskname.style.display = 'none';
        
        //         const inputtask = document.querySelector('.change-task')
        //         inputtask.style.display = 'block';
                
        //         e.preventDefault()
    
        // })

        // let btninput = document.createElement('input')
        // btninput.setAttribute('type','text')
        // btninput.setAttribute('placeholder', `${todo}`)
        // btninput.classList.add('change-task')


        btnright.append(btnp,)
        divbutton.appendChild(btnright)
        div.appendChild(divbutton)

        btnp.innerText = ''
        // let df = document.createDocumentFragment()
        tasklist.forEach(todos => {
            btnp.innerText = `${todos.task}`
            // btnp.addEventListener('click', changeTask)
            // btnp.addEventListener('click', () => {
            //     console.log(`${todos.task}`)
            // })
            // let li = document.createElement('li')
            // li.classList.add('task-name')
            // li.innerText = `${todos.task}`;
            // df.appendChild(li)
        })

        // function changeTask() {
            
        // }


        

        // divul.appendChild(df)

        const holdtask = document.querySelector('.holdtask')
        holdtask.appendChild(div)

        console.log(document.querySelectorAll('.task-name'))

        // const btn = document.querySelectorAll('.task-name')


        document.querySelectorAll('.task-name').forEach(btn => {
            btn.addEventListener('click',() => {
                btn.style.display  = 'none';
                const input = document.createElement('input')
                input.setAttribute('type','text')
                input.classList.add('change-task')
                btnright.appendChild(input)
            })
        })

        // let ul = document.querySelector('.todotask ul')
        // ul.innerText = ''
        // let df = document.createDocumentFragment()
        // tasklist.forEach(task => {
        //     let li = document.createElement('li')
        //     li.classList.add('task-name')
        //     li.innerText = task.todo

        //     df.appendChild(li)
        // })
        // ul.appendChild(df)
    }
    // document.querySelectorAll('.task-name').forEach(btn => {
    //     btn.addEventListener('click', changeTask)
    // })
    // function changeTask() {
        // document.addEventListener('DOMContentLoaded', () => {
        //     document.querySelectorAll('.task-name').forEach((btn) => {
        //         btn.onclick = () => changeTask

        //     })
        // })

        // document.querySelectorAll('.task-name').forEach(btn => {
        //     btn.addEventListener('click', () => {
        //         console.log('Hey')
        //     })
        // })
    //    const input = document.querySelectorAll('.change-task')
    //    input.forEach(inp => {
    //    inp.style.display = 'block'
    //    const btn = document.querySelector('.task-name')
    //    btn.style.display = 'none'
    //    })

    // const btn = document.querySelectorAll('.task-name')
    // btn.forEach(button => {
    //     button.style.display = 'none'
    //     const input = document.querySelectorAll('.change-task')
    //     input.forEach(inp => {
    //         inp.style.display = 'block'
    //     })
    // })

    // }

    // function changeTask() {
    //     const input = document.querySelectorAll('.change-task')
    //     input.forEach(inp => {
    //     inp.style.display = 'block'
    //     })
    // }


    // const btn = document.querySelectorAll('.task-name')
    // btn.forEach((button, index) => {
    //     button.addEventListener('click',() => {
    //         console.log(index)
    //     })
    // })


    // function changeTask() {
        // e.preventDefault()

        // const btn = document.querySelectorAll('.task-name')
        // btn.forEach(function(button) {
        //     button.addEventListener('click', function() {
        //         console.log(`${list.task}`)

        //     })
        // })
        // btn.addEventListener('click', (e) => {
        //     const taskname = document.querySelector('.task-name')
        //     taskname.style.display = 'none';
    
        //     const inputtask = document.querySelector('.change-task')
        //     inputtask.style.display = 'block';
            
        //     e.preventDefault(e)

        // })
    // }

        // const taskname = document.querySelector('.task-name')
        // taskname.style.display = 'none';

        // const inputtask = document.querySelector('.change-task')
        // inputtask.style.display = 'block';

    // }


    return {
        addTask,
        list
    }

})()