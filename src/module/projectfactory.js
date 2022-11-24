import { v4 as uuidv4 } from "uuid";
export const ProjectFactory = (name,id = uuidv4()) => {
    let todos = [];
    return {
        name:name,
        todos,
        // id:uuidv4(),

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
