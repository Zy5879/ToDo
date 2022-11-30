import pubsub from "./pubsub";
// import { UI } from "./ui";

// export const todoForm = (() => {
//     const todoAdd = document.querySelector('.todo-adder')
//     const todoshow = document.querySelector('.todo-popup')

//     todoAdd.addEventListener('click',showTodoInput)
//     function showTodoInput() {
//         todoAdd.style.display = 'none'
//         todoshow.style.display = 'block'
//         let form = document.querySelector('.todo-form')
//         form.querySelector('button').addEventListener('click',addTodoForm)

//     }
//     function addTodoForm(e) {
//         e.preventDefault()
//         let input = document.querySelector('.todo-form input');
//         let task = input.value;
//         input.value = '';
//         //tell people that a task has been added
//         console.log(`TODO FORM: a task ${task} was added`)
//         pubsub.publish('todoAdded',task)
//     }

// })()

export const todoForm = (() => {
    const homeBtn = document.getElementById('home')
    
    homeBtn.addEventListener('click', showHome)

    const homemain = document.querySelector('.homemain')
    const homeaddtask = document.querySelector('.todoadd')
    // const todoadder = document.querySelector('.addT')
    const todopop = document.querySelector('.todopoup')

    homeaddtask.addEventListener('click', showForm)



    function showHome() {
        homemain.style.display = 'block'
        document.querySelector('.hometoday').style.display = 'none'
        document.querySelector('.homeupcoming').style.display = 'none'
        document.querySelector('.projectmain').style.display = 'none'

        // homeaddtask.addEventListener('click', showForm)
    
    }

    function showForm() {
        homeaddtask.style.display = 'none'
        document.querySelector('.todopoup').style.display = 'block'
        let form = document.querySelector('.todo-form')
        form.querySelector('button').addEventListener('click', addTaskForm)


    }

    // function showFormInput() {
    //     homeaddtask.style.display = 'none';
    // }
    // const homeBtn = document.getElementById('home')
    // homeBtn.addEventListener('click', () => {
    //     const homecontent = document.querySelector('.main')
    //     while(homecontent.firstChild) {
    //         homecontent.removeChild(homecontent.firstChild)
    //     };
        // const main = document.querySelector('.main')

        // const mainhome = document.createElement('h2')
        // mainhome.textContent = 'HOME'
        // mainhome.classList.add('Home-header')
        // const todaybutton = document.createElement('button')
        // todaybutton.textContent = 'Add Task'
        // todaybutton.classList.add('add-home')
        // const holdTask = document.createElement('main')
        // holdTask.classList.add('holdtask')
        // const taskpop = document.createElement('div')
        // taskpop.classList.add('task-popup')
        // const todoform = document.createElement('form')
        // todoform.classList.add('todo-form')
        // const todoinput = document.createElement('input')
        // todoinput.setAttribute('type','text')
        // const todoadd = document.createElement('button')
        // todoadd.classList.add('todoadd')
        // todoadd.textContent = 'Add'
    
        // todoform.append(todoinput,todoadd)
        // taskpop.appendChild(todoform)
    
        // main.append(mainhome,todaybutton,holdTask,taskpop)
    
    // })

    // const holdTask = document.querySelector('holdtask')
    // const main = document.querySelector('.main')

    // const mainhome = document.createElement('h2')
    // mainhome.textContent = 'HOME'
    // mainhome.classList.add('Home-header')
    // const todaybutton = document.createElement('button')
    // todaybutton.textContent = 'Add Task'
    // todaybutton.classList.add('add-home')
    // const holdTask = document.createElement('main')
    // holdTask.classList.add('holdtask')
    // const taskpop = document.createElement('div')
    // taskpop.classList.add('task-popup')
    // const todoform = document.createElement('form')
    // todoform.classList.add('todo-form')
    // const todoinput = document.createElement('input')
    // todoinput.setAttribute('type','text')
    // const todoadd = document.createElement('button')
    // todoadd.classList.add('todoadd')
    // todoadd.textContent = 'Add'

    // todoform.append(todoinput,todoadd)
    // taskpop.appendChild(todoform)

    // main.append(mainhome,todaybutton,holdTask,taskpop)


    // const homeBtn = document.getElementById('home')
    // homeBtn.addEventListener('click', () => {
    //     const homecontent = document.querySelector('.main')
    //     while(homecontent.firstChild) {
    //         homecontent.removeChild(homecontent.firstChild)
    //     };

    // })

    function displayHome() {
    // const main = document.querySelector('.main')

    // const mainhome = document.createElement('h2')
    // mainhome.textContent = 'HOME'
    // mainhome.classList.add('Home-header')
    // const todaybutton = document.createElement('button')
    // todaybutton.textContent = 'Add Task'
    // todaybutton.classList.add('add-home')
    // const holdTask = document.createElement('main')
    // holdTask.classList.add('holdtask')
    // const taskpop = document.createElement('div')
    // taskpop.classList.add('task-popup')
    // const todoform = document.createElement('form')
    // todoform.classList.add('todo-form')
    // const todoinput = document.createElement('input')
    // todoinput.setAttribute('type','text')
    // const todoadd = document.createElement('button')
    // todoadd.classList.add('todoadd')
    // todoadd.textContent = 'Add'

    // todoform.append(todoinput,todoadd)
    // taskpop.appendChild(todoform)

    // main.append(mainhome,todaybutton,holdTask,taskpop)
        
        // const mainhome = document.createElement('h2')
        // mainhome.textContent = 'HOME'
        // mainhome.classList.add('Home-header')
        // const todaybutton = document.createElement('button')
        // todaybutton.textContent = 'Add Task'
        // todaybutton.classList.add('add-home')
        // const holdTask = document.createElement('main')
        // holdTask.classList.add('holdtask')
        // const taskpop = document.createElement('div')
        // taskpop.classList.add('task-popup')
        // const todoform = document.createElement('form')
        // todoform.classList.add('todo-form')
        // const todoinput = document.createElement('input')
        // todoinput.setAttribute('type','text')
        // const todoadd = document.createElement('button')
        // todoadd.classList.add('todoadd')
        // todoadd.textContent = 'Add'

        // todoform.append(todoinput,todoadd)
        // taskpop.appendChild(todoform)

        // main.append(mainhome,todaybutton,holdTask,taskpop)

    }


    // const divmain = document.querySelector('.main')
    // const todopop = document.querySelector('.todo')
    // const todoshow = document.querySelector('.todo-popup')
    // const mainhome = document.querySelector('.main-home')
    // const homeBtn = document.getElementById('home')
    // const todoadder = document.getElementById('todo-adder')
    // const todoform = document.querySelector('.todo-form')
    // const todopop = document.querySelector('todo-pop')
    // homeBtn.addEventListener('click', showHome)

    // function showHome() {
    //     mainhome.style.display = 'block'
    //     todoadder.addEventListener('click', showTodoInput)
        // todoadder.addEventListener('click',() => {
        //     document.querySelector('.todo-form').style.display = 'block'
        //     todoadder.style.display = 'none'
        // })
        // let form = document.getElementById('.todo-form')
        // form.querySelector('button').addEventListener('click', addTaskForm)

    // }

    // function showTodoInput() {
    //     todoadder.style.display = 'none'
    //     document.querySelector('.todo-form').style.display = 'block'
    //     todoform.querySelector('button').addEventListener('click',addTaskForm)
    // }

    // function showForm() {
    //     todoForm.style.display = 'block'
    //     todoadder.style.display = 'none'
    //     todopop.style.display = 'block'
    // }
    // function headList() {

        // const mainh2 = document.createElement('h2')
        // mainh2.textContent = 'HOME'
        // const createButton = document.createElement('button')
        // createButton.classList.add('todo-adder')
        // createButton.textContent = 'Add Task';

        // const createDivForm = document.createElement('div')
        // createDivForm.classList.add('todo-popup')
        // createDivForm.style.display = 'none'

        // const createmain = document.createElement('main')

        // mainh2.appendChild(createmain)

        // const form = document.createElement('form')
        // form.classList.add('todo-form')

        // const forminput = document.createElement('input')
        // forminput.classList.add('addT')

        // const btnaddtask = document.createElement('button')
        // btnaddtask.classList.add('addtodo')
        // btnaddtask.textContent = 'Add Task'

        // form.append(forminput,btnaddtask)
        // createDivForm.appendChild(form)
       
        // divmain.append(mainh2,createButton,createDivForm)

        // createButton.addEventListener('click', showTodoInput)
    // } 
    // function showTodoInput() {
    //     const addTask = document.querySelector('.todo-adder')
    //     addTask.style.display = 'none'
    //     const todoform = document.querySelector('.todo-popup')
    //     todoform.style.display = 'block'
    //     let form = document.querySelector('.todo-form')
    //     form.querySelector('button').addEventListener('click', addTaskForm)
    //     const todoshow = document.querySelector('.todo-popup')
    //     todoshow.style.display = 'block'
    // }

    // const addTaskBtn = document.querySelector('.add-home')
    // addTaskBtn.addEventListener('click', () => {
    //     addTaskBtn.style.display = 'none'
    // })
    // addTaskBtn.addEventListener('click', showForm)

    // function showForm() {
    //     addTaskBtn.style.display = 'none';
        // const taskpopup = document.querySelector('.task-popup')
        // taskpopup.style.display = 'block';
    // }

    function addTaskForm(e) {
        e.preventDefault()
        // let input = document.querySelector('.todo-form input')
        let input = document.querySelector('.todo-form input')
        let task = input.value;
        input.value = ''

        // todoadder.style.display = 'block'
        // document.querySelector('.todo-form').style.display = 'none'
        homeaddtask.style.display = 'block'
        todopop.style.display = 'none'
        //tell people that a task has been added
        console.log(`TODO FORM: a task ${task} has been added`)
        pubsub.publish('todoAdded', task)
    }

//    const todayBtn = document.getElementById('today')
//    todayBtn.addEventListener('click', () => {
//         document.querySelector('.homemain').style.display = 'none';
//         document.querySelector('.homeupcoming').style.display = 'none'
//         document.querySelector('.hometoday').style.display = 'block'
//    })

//    const upcomingBtn = document.getElementById('upcoming')
//    upcomingBtn.addEventListener('click', () => {
//     document.querySelector('.homemain').style.display = 'none'
//     document.querySelector('.hometoday').style.display = 'none'
//     document.querySelector('.homeupcoming').style.display = 'block'
//    })

    // function showClick() {
    //     console.log("REGISTER CLICK")
    // }
    // const btn = document.querySelector('.todo-adder')
    // btn.addEventListener('click', showClick)
    // const homeBtn = document.getElementById('home').addEventListener('click', () => {
    //     const homecontent = document.querySelector('.main')
    //     while(homecontent.firstChild) {
    //         homecontent.removeChild(homecontent.firstChild)
    //     }
    //     headList()
    // })

})()