import { TodoFactory } from "./module/todofactory";
import { ProjectFactory } from "./module/projectfactory";
import { projectForm } from "./module/projectForm";
import { projects } from "./module/project";
// import {ui} from './module/ui'
// import { projectForm } from "./module/readprojects";
import './styles/style.css';

document.addEventListener('DOMContentLoaded', () => {
    let aside = document.querySelector('aside');

    //add project module
    projects.renderTemp(aside)
    
})