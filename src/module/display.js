import { TodoFactory, ProjectFactory } from "./todo";
import pubsub from "./pubsub";

export const UI = (() => {
    const main = document.querySelector('.main')
    const projectBtn = document.getElementById('add-projects')
    projectBtn.addEventListener('click', showInput)

    function showInput() {
        projectBtn.style.display = 'none'
        const addPopup = document.querySelector('.add-popup');
        addPopup.style.display = 'block'
        addPopup.style.flexDirection = 'column'
    }
    const goBack = document.getElementById('goback')
    goBack.addEventListener('click', cancel)

    function cancel() {
        projectBtn.style.display = 'block'
        const addPopup = document.querySelector('.add-popup')
        addPopup.style.display = 'none'
    }

    function funcToday() {
        const maintoday = document.createElement('h2')
        maintoday.textContent = 'TODAY'
        main.appendChild(maintoday)
    }

    const todayBtn = document.getElementById('today')
    todayBtn.addEventListener('click', () => {
        const todaycontent = document.querySelector('.main')
        while(todaycontent.firstChild) {
            todaycontent.removeChild(todaycontent.firstChild);
        }
        funcToday()
    });

    function funcUpcoming() {
        const mainUpcoming = document.createElement('h2')
        mainUpcoming.textContent = 'UPCOMING'
        main.appendChild(mainUpcoming)
    }

    const upcomingBtn = document.getElementById('upcoming')
    upcomingBtn.addEventListener('click', () => {
        const upcomingcontent = document.querySelector('.main')
        while(upcomingcontent.firstChild) {
            upcomingcontent.removeChild(upcomingcontent.firstChild)
        }
        funcUpcoming()
    })

    function funcHome() {
        const mainHome = document.createElement('h2')
        mainHome.textContent = 'HOME'
        main.appendChild(mainHome)
    }

    const homeBtn = document.getElementById('home')
    homeBtn.addEventListener('click', () => {
        const homecontent = document.querySelector('.main')
        while(homecontent.firstChild) {
            homecontent.removeChild(homecontent.firstChild)
        }
        funcHome()
    })

})()