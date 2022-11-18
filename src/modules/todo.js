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

const ProjectFactory = (name, id) => {
    let todos = [];
    return {
        name:name,
        todos,
        id:uuidv4(),

        getProject() {
            return name
        },
        getID() {
            return id
        },
        
    }
}

export {TodoFactory, ProjectFactory}

// let task = ProjectFactory('MAMA')
// console.log(task)