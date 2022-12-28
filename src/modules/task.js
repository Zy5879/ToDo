import { v4 as uuidv4 } from "uuid"
export const Task = (task,duedate, id = uuidv4()) => {
    return {
        task,
        duedate,
        id,
        // id:uuidv4(),

        getTask() {
            return task;
        },
        getDate() {
            return duedate;
        },

    }
}