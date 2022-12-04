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
        div.appendChild(divbutton)

        divbutton.innerText = ''
        // let df = document.createDocumentFragment()
        tasklist.forEach(todos => {
            divbutton.innerText = `${todos.task}`
            // let li = document.createElement('li')
            // li.classList.add('task-name')
            // li.innerText = `${todos.task}`;
            // df.appendChild(li)
        })

        // divul.appendChild(df)

        const holdtask = document.querySelector('.holdtask')
        holdtask.appendChild(div)

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

    return {
        addTask,
        list
    }

})()