import { ProjectName } from "./project";
import { Todo } from "./todolist";
import { User } from "./user";

export const UI = (() => {
   const projectBtn = document.getElementById('add-project')
   projectBtn.addEventListener('click', showInput)

   function showInput() {      
      projectBtn.style.display = 'none'
      const addInput = document.querySelector('.add-project-popup');
      addInput.style.display = 'block';
      addInput.style.flexDirection = 'column'
   }

   const todayBtn = document.getElementById('today')
   todayBtn.addEventListener('click', displayToday)

   function displayToday() {
      console.log('click')
      const main = document.querySelector('.main')
   }
   return {
   }
})();