import pubsub from "./pubsub";

export const todolist = (() => {
    // const templatecontain = document.createElement('template')
    // templatecontain.classList.add('todoListTemplate')
    // const templatediv = document.createElement('div')
    // templatediv.classList.add('todotask')
    // const templateul = document.createElement('ul')
    // templatediv.appendChild(templateul)
    // templatecontain.appendChild(templatediv)
    // const main = document.querySelector('main')
    let list = []
    function renderForm(container) {
        // let template = document.querySelector('.todoListTemplate')
        // let templatediv = template.content.cloneNode(true)
        // container.appendChild(templatediv)
        let template = document.getElementById('todoListTemplate')
        let div = template.content.cloneNode(true)
        container.appendChild(div)
        //tell pubsub that we want to know about a todo being added
        console.log('TODO: want to know if a todo is being added')
        pubsub.subscribe('todoAdded',adTodo)
    }
    function adTodo(task) {
        console.log(`I hear that a ${task} is being added`)
        let taskList = list;
        taskList.push(task)
        console.log(taskList)
        taskList = Array.from(list).sort()
        console.log('todoUpdated', task)
        pubsub.publish('todoUpdated',task)

        let ul = document.querySelector('.todoTask ul')
        ul.innerHTML =''
        let df = document.createDocumentFragment()
        taskList.forEach(name => {
            let button = document.createElement('button')
            let li = document.createElement('li')
            button.innerText = name;
            li.appendChild(button)
            df.appendChild(li)
        });
        ul.appendChild(df);

        // let ul2 = document.querySelector('.todoTask ul')
        // ul2.innerText = ''
        // const df = createDocumentFragment()

        // taskList.forEach(task => {
        //     let button = document.createElement('button')
        //     button.innerHTML = task
        //     ul2.appendChild(button)
        // })
        // let df2 = document.createDocumentFragment()
        // taskList.forEach(task => {
        //     let li2 = document.createElement('li')
        //     li2.innerText = task
        //     df2.appendChild(li2)
        // });

        // ul2.appendChild(df2)
            // main.appendChild(ul2)
        // let li = document.createElement('li')
        // li.innerText = task
        // df.appendChild(li)
        // renderForm(main)
    }
    return {
        renderForm,
        adTodo
    }
})()