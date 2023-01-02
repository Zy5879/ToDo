import pubsub from "./modules/pubsub";
import { Task } from "./modules/task";
import { Projects } from "./modules/project";
import TodoController from "./modules/TodoController";
// import { projects } from "./modules/storage";
import {projectForm, projects } from "./modules/UI";
import styles from './style/styles.css'

document.addEventListener('DOMContentLoaded', () => {
    let div = document.querySelector('.user-projects')

    projects.renderTemp(div)
})
// // document.addEventListener('DOMContentLoaded', () => {
//     let nav = document.querySelector('.hold-projects');

//     projects.renderTemp(nav)
// })

// import { TodoFactory, ProjectFactory, ProjectManger } from "./modules/todo";
// import {todo} from './modules/task'
// import { UI }  from './modules/UI'
// // import { projectForm } from "./modules/projectform";
// import { projects } from "./modules/project";
// import { taskform } from "./modules/taskform";
// import style from './style/styles.css'

// document.addEventListener('DOMContentLoaded', () => {
//     let aside = document.querySelector('.hold-projects')
//     render template for projects
//     projects.renderTemp(aside)
//     todo.renderTemp(aside2)
// })