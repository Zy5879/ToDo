//  const Todo = (task,description,duedate,project) => {
//     let todoTask = task;
//     let todoDescription = description;
//     let todoDuedate = duedate;
//     let todoProject = project;

//     let todos = {
//         task:task,
//         description:description,
//         duedate:duedate,
//         project:project
//     }

//     return {
//         get task() {
//             return todoTask
//         },
//         set task(task) {
//             todoTask = task;
//         },
    
//         get description() {
//             return todoDescription
//         },
//         set description(description) {
//             todoDescription = description
//         },
//         get duedate() {
//             return todoDuedate
//         },
//         set duedate(duedate) {
//             todoDuedate = duedate
//         },
//         get project() {
//             return todoProject
//         },
//         set project(project) {
//             todoProject = project
//         },
//         todos
//     }
// }


// console.log(user1.project)


// let user2 = Todo('task','task','task','task')
// user2.task = 'Play Game'
// user2.duedate = '11/22/2022'
// console.log(user2)

// export  class Todo {
//     constructor(task,duedate = 'DueDate?') {
//         this.task = task;
//         this.duedate = duedate;
//     }
//     setTaskName(task) {
//         this.task = task
//     }
//     getTaskName() {
//         return this.task
//     }
//     getDate() {
//         return this.duedate
//     }
//     setDate(duedate) {
//         this.duedate = duedate
//     }
    // getDateFormatted() {
    //     const day = this.duedate.split('/')[0]
    //     const month = this.duedate.split('/')[1]
    //     const year = this.duedate.split('/')[2]
    //     return `${day}/${month}/${year}`
    // }
// }

// import { isDate } from "date-fns/esm"

export const TodoTask = (task,duedate = 'DueDate?') => {
    return {
        task:task,
        duedate: duedate,
        setTask(task) {
            task = task
        },
        getTask() {
            return task
        },
        getDate() {
            return duedate;
        },
        setDate(duedate) {
            duedate = duedate
        },
        // getDateFormatted() {
        //     const day = duedate.split('/')[0]
        //     const month = duedate.split('/')[1]
        //     const year = duedate.split('/')[2]
        //     return `${day}/${month}/${year}`
        // }
        
    }
}

// let user1 = Todo('Create','11/12/2022')


// console.log(user1)






