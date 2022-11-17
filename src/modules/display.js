import { ProjectName } from "./ProjectManager";
import { Todo } from "./TodoManager";
import { ProjectManager } from "./Todo";

export const UI = (() => {
   const main = document.querySelector('.main')
   const projectBtn = document.getElementById('add-project')
   projectBtn.addEventListener('click', showInput)

   function showInput() {      
      projectBtn.style.display = 'none'
      const addInput = document.querySelector('.add-project-popup');
      addInput.style.display = 'block';
      addInput.style.flexDirection = 'column'
   }

   function funcTodayMain() {
      const mainh1 = document.createElement('h2')
      mainh1.textContent = ''
      main.appendChild(mainh1)
   }
   const todayBtn  = document.getElementById('today')
   todayBtn.addEventListener('click', () => {
      const todaycontent = document.querySelector('.main')
      while(todaycontent.firstChild) {
         todaycontent.removeChild(todaycontent.firstChild)
      }
      funcTodayMain()
   })

   // const todayBtn = document.getElementById('today')
   // todayBtn.addEventListener('click', displayToday)

   // function displayToday() {
   //    console.log('click')
   //    const main = document.querySelector('.main')

   // }
   return {
   }
})();