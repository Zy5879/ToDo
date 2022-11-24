import { v4 as uuidv4 } from "uuid"
export const TodoFactory = (task,duedate,id = uuidv4()) => {
    // let id = uuidv4()
    return {
        task:task,
        duedate:duedate,
        id,

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

