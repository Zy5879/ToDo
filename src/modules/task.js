import { v4 as uuidv4 } from "uuid"
export const Task = (task,duedate,id) => {
    return {
        task,
        duedate,
        id:uuidv4(),

        getTask() {
            return task;
        },
        getDate() {
            return duedate
        },

    }
}
