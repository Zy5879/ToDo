import { v4 as uuidv4 } from "uuid"
export const TodoFactory = (task,duedate,id) => {
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

let task = TodoFactory('Create','11/22/2022')
// let task1 = TodoFactory('Resume','12/2/2023')
// console.log(task.getID())

