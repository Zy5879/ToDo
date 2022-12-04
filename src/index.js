import pubsub from "./modules/pubsub";
import { TodoFactory, ProjectFactory } from "./modules/todo";
import {todo} from './modules/task'
import { UI }  from './modules/UI'
import { projectForm } from "./modules/projectform";
import { projects } from "./modules/project";
import style from './style/styles.css'

document.addEventListener('DOMContentLoaded', () => {
    let aside = document.querySelector('.hold-projects')
    //render template for projects
    projects.renderTemp(aside)
    // todo.renderTemp(aside2)
})