import { TodoFactory } from "./module/todofactory";
import { ProjectFactory } from "./module/projectfactory";
import { projectForm } from "./module/projectForm";
import { projects } from "./module/project";
import { todolist } from "./module/todolist";
import { UI } from "./module/ui";
import { todoForm} from "./module/todolistform";
// import {ui} from './module/ui'
// import { projectForm } from "./module/readprojects";
import './styles/style.css';

document.addEventListener('DOMContentLoaded', () => {
    let aside = document.querySelector('.hold-projects');
    let main = document.querySelector('main')
    //add project module
    projects.renderTemp(aside)
    todolist.renderForm(main)
    
})