import {v4 as uuidv4} from "uuid"
import { Task } from "./task"

 export const Projects = (name, id = uuidv4()) => {
    let todos = []
    return {
        name:name,
        id,
        todos,
        setProjectName(value) {
            name = value
        },
        getProjectName() {
            return name
        },
        setTodo(tasks,date) {
            todos.task == tasks
            todos.date == date
        },
        addTask(task) {
            // if(todos.find((todo) => todo.getProjectName() === task)) return
             return todos.push(Task(task))
        },
        deleteTask(target){
            const grabTask = todos.find((todo) => todo.name === target)
            todos.splice(todos.indexOf(grabTask),1)
        },
        editTodo(newTask,newDate) {
            todos = todos.map((todo) => {
                todo.task = newTask,
                todo.duedate = newDate
                return todo
                // if(todo.id === id) {
                //     todo.id = id
                //     todo.task = newTask
                //     todo.duedate = newDate
                // }
                // return todo
            })
        }
    }
}

let user1 = Projects('New Project')
user1.addTask('Create','11/22/2022')
user1.editTodo('crate','1/2/2022')
console.log(user1)
