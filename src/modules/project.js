import {v4 as uuidv4} from "uuid"
import { Task } from "./task"

 export const Projects = (name) => {
    let todos = [];
    return {
        name:name,
        // id,
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
        addTask(task,date) {
            // localStorage.setItem('mytodos',JSON.stringify(todos))
            // if(todos.find((todo) => todo.getProjectName() === task))
            // const storagetodos = JSON.parse(localStorage.getItem('mytodos'))
            return todos.push(Task(task,date))
            //   localStorage.setItem('myprojects',JSON.stringify(todos))
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