import { toDate, isToday, isThisWeek, subDays } from "date-fns";

// export class ProjectName {
//     constructor(name) {
//         this.name = name;
//         this.task = []
//     }
//     setName(name) {
//         this.name = name
//     }
//     getName() {
//         return this.name
//     }
//     getAllTasks() {
//         return this.task
//     }
//     getSingleTask(taskName) {
//         return this.task.find((task) => task === taskName)
//     }
//     contains(taskName) {
//         return this.task.some((task) => task === taskName)
//     }
//     addTask(newTask) {
//         if(this.task.find((task) => task === newTask)) 
//         return 
//         this.task.push(newTask)
//     }
//     deleteTask(taskName) {
//          const grabTask = this.task.find((tasks) => tasks === taskName)
//          this.task.splice(this.task.indexOf(grabTask), 1)
//     }
//     getTodayTask() {
//         this.task.filter((task) => {
//             const updateToday = new Date(task)
//             return isToday(toDate(updateToday))
//         })
//     }
//     getUpcoming() {
//         this.task.filter((task) => {
//             const updateUpcoming = new Date(task)
//             return isThisWeek(subDays(toDate(updateUpcoming)), 1)
//         })
//     }
// }

export const ProjectName = (name, task = []) => {
    // let task = []
    return {
        name:name,
        task,
        getName() {
            return name
        },
        setName(name) {
            name = name
        },
        getTask() {
            return task
        },
        contains(taskName) {
            return task.some((tasks) => tasks === taskName)
        },
        getSingleTask(taskName) {
            return task.find((tasks) => tasks === taskName)
        },
        addTask(newTask) {
            if(task.find((tasks) => tasks === newTask))
            return
            task.push(newTask)
        },
        deleteTask(targetTask) {
            const grabTask = task.find((tasks) => tasks === targetTask)
            return task.splice(task.indexOf(grabTask), 1)
        },
        getTodayTask() {
            task.filter((task) => {
                const updateToday = new Date(task)
                return isToday(toDate(updateToday))
            })
        },
        getUpcomingTask() {
            task.filter((tasks) => {
                const updateUpcoming = new Date(tasks)
                return isThisWeek(subDays(toDate(updateUpcoming)), 1)
            })
        }

    }
}

let user1 = ProjectName('Resume')
user1.addTask('Crete')
user1.addTask('CCC')

console.log(user1)