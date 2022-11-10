import {Todo}  from "./todolist";
import  {ProjectName}  from "./project";
import { isToday, subDays, isThisWeek, toDate } from "date-fns";

// export class User {
//     constructor() {
//         this.projects = []
//         this.projects.push(new ProjectName('Today'));
//         this.projects.push(new ProjectName('Upcoming'));

//     }
//     getProjects() {
//        return this.projects
//     }
//     getProject(project) {
//         return this.projects.find((projects) => projects === project)
//     }
//     setProjects(projects) {
//         this.projects = projects
//     }
//     addProject(newProject) {
//        if (this.projects.find((project) => project === newProject))
//         return 
//         this.projects.push(newProject)
//     }
//     deleteProject(targetDelete) {
//         grabbing the project
//         const grabProject = this.projects.find((project) => project.name === targetDelete.name)
//         grabbing whatever project that you are
//         this.projects.splice(this.projects.indexOf(grabProject), 1)
//     }
//     getToday() {
//         this.getProject('Today').task = []
//         this.projects.forEach((project) => {
//           if(project === 'Today' || project === 'Upcoming')
//           return 
//           const updateToday = project.getTodayTask()
//           updateToday.forEach((task) => {
//             const todayTask = `${task.getName()}` `${project.getName()}`
//             this.getProject('Today').addTask(new Todo(todayTask, task.getDate()))
//         })

//         })
//     }
//     getUpcomingTask() {
//         this.getProject('Upcoming').task = []
//         this.projects.forEach((project) => {
//             if(project === 'Today' || project === 'Upcoming')
//             return
//             const grabUpcoming = project.getUpcoming()
//             grabUpcoming.forEach((task) => {
//                 const upcomingTask = `${task.getName()}` `${project.getName()}`
//                 this.getProject('Upcoming').addTask(new Todo(upcomingTask, task.getDate()))
//             })
//         })
//     }
// }

export const User = () => {
    const projects = []
    projects.push(ProjectName('Today'))
    projects.push(ProjectName('Upcoming'))
    return {
        projects,
        getProjects() {
            return projects
        },
        getSingleProject(projectName) {
            return projects.find((project) => project === projectName)
        },
        setProjects(projectName) {
            projects = projectName
        },
        addProject(newProject) {
            if(projects.find((project) => project === newProject))
            return
            projects.push(newProject)
        },
        deleteProject(targetProject) {
            const grabProjectName = projects.find((project) => project === targetProject)
            projects.splice(projects.indexOf(grabProjectName), 1)
            },
        grabToday() {

        },
        grabUpcoming() {

        },
    }
}

let user1 = User()
user1.addProject('NNN')
console.log(user1)

console.log(user1.getSingleProject('NNN'))