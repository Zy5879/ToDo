import {v4 as uuidv4} from "uuid"

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
        setTodo(tasks) {
            todos = tasks
        },
        addTodo(task) {
            if(todos.find((todo) => todo.getProjectName() === task)) return
            todos.push(task)
        },
        deleteTask(target){
            const grabTask = todos.find((todo) => todo.name === target)
            todos.splice(todos.indexOf(grabTask),1)
        },
        
    }
}

let user1 = Projects('Name')