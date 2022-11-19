import { v4 as uuidv4 } from "uuid"
const TodoFactory = (task,duedate,id) => {
    // let id = uuidv4()
    return {
        task:task,
        duedate:duedate,
        id:uuidv4(),

        getTask() {
            return task
        },
        getDueDate() {
            return duedate
        },
        getID () {
            return id
        },
        setTask(value) {
            task = value
        },
        setDate(value) {
            duedate = value
        },

    }
    
}

const ProjectFactory = (name,id) => {
    let todos = [];
    return {
        name:name,
        id:uuidv4(),
        todos,
        id:uuidv4(),

        getProject() {
            return name
        },
        getID() {
            return id
        },
        addTask(task) {
            return todos.push(task)
        },
        deleteTask(targetTask) {
            const grabTask = todos.find((oldtask) => oldtask.task === targetTask)
            return todos.splice(todos.indexOf(grabTask), 1)
        },
    }
}

export {TodoFactory, ProjectFactory}

let task = ProjectFactory('CsKK')
task.addTask('NNN')