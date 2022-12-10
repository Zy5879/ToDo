import { v4 as uuidv4 } from "uuid"
export const Task = (task,duedate,id) => {
    return {
        task:task,
        duedate:duedate,
        id:uuidv4(),

        getTask() {
            return task;
        },
        setTask(value) {
            task = value
        },
        getDate() {
            return duedate
        },
        setDate(value) {
            duedate = value
        },     

    }

}