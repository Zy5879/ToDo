
export const UI = (() => {

    const todayBtn = document.getElementById('today')
    todayBtn.addEventListener('click', () => {
         document.querySelector('.homemain').style.display = 'none';
         document.querySelector('.homeupcoming').style.display = 'none'
         document.querySelector('.hometoday').style.display = 'block'
    })
 
    const upcomingBtn = document.getElementById('upcoming')
    upcomingBtn.addEventListener('click', () => {
     document.querySelector('.homemain').style.display = 'none'
     document.querySelector('.hometoday').style.display = 'none'
     document.querySelector('.homeupcoming').style.display = 'block'
    })
//    const todayBtn = document.getElementById('today')
//    todayBtn.addEventListener('click', () => {
//         document.querySelector('body').style.display = 'none';
//    })
    // const main = document.querySelector('.main')
    // const homeBtn = document.getElementById('home')
    // homeBtn.addEventListener('click', () => {
    //     const homecontent = document.querySelector('.main')
    //     while(homecontent.firstChild) {
    //         homecontent.removeChild(homecontent.firstChild)
    //     };
    //     displayHome()
    // })

    // function displayHome() {
    //     const mainhome = document.createElement('h2')
    //     mainhome.textContent = 'HOME'
    //     mainhome.classList.add('Home-header')
    //     const todaybutton = document.createElement('button')
    //     todaybutton.textContent = 'Add Task'
    //     todaybutton.classList.add('add-home')
    //     const holdTask = document.createElement('main')
    //     holdTask.classList.add('holdtask')
    //     const taskpop = document.createElement('div')
    //     taskpop.classList.add('task-popup')
    //     const todoform = document.createElement('form')
    //     todoform.classList.add('todo-form')
    //     const todoinput = document.createElement('input')
    //     todoinput.setAttribute('type','text')
    //     const todoadd = document.createElement('button')
    //     todoadd.classList.add('todoadd')
    //     todoadd.textContent = 'Add'

    //     todoform.append(todoinput,todoadd)
    //     taskpop.appendChild(todoform)

    //     main.append(mainhome,todaybutton,holdTask,taskpop)
    // }
    // const todayBtn = document.getElementById('today')
    // todayBtn.addEventListener('click' ,() => {
    //     document.querySelector('.main-tody').style.display = 'block'
    //     const todaycontent = document.querySelector('.main-home')
    //     while(todaycontent.firstChild) {
    //         todaycontent.removeChild(todaycontent.firstChild)
    //         document.querySelector('.main-home').style.display = 'none'
    //     }
    //     hideHome()
    // })

    // function hideHome() {
    // }
    // const main = document.querySelector('.main')
    // const todopop = document.querySelector('.todo')
    // function headList() {
    //     const mainh2 = document.createElement('h2')
    //     mainh2.textContent = 'HOME'
    //     const createButton = document.createElement('button')
    //     createButton.classList.add('todo-adder')
    //     createButton.textContent = 'Add Task'
    //     main.append(mainh2,createButton)
    // }
    // const homeBtn = document.getElementById('home').addEventListener('click', () => {
    //     const homecontent = document.querySelector('.main')
    //     while(homecontent.firstChild) {
    //         homecontent.removeChild(homecontent.firstChild)
    //     }
    //     headList()
    //  })

})()