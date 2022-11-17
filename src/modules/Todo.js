// import {Todo}  from "./TodoManager";
// import  {ProjectName}  from "./ProjectManager";
// import { isToday, subDays, isThisWeek, toDate } from "date-fns";

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

// export const ProjectManager = () => {
//     const projects = []
//     projects.push(ProjectName('Today'))
//     projects.push(ProjectName('Upcoming'))
//     return {
//         projects,
//         getProjects() {
//             return projects
//         },
//         getSingleProject(projectName) {
//             return projects.find((project) => project.name === projectName || project === projectName)
//         },
//         setProjects(projectName) {
//             projects = projectName
//         },
//         addProject(newProject) {
//             if(projects.find((project) => project === newProject))
//             return
//             projects.push(newProject)
//         },
//         deleteProject(targetProject) {
//             const grabProjectName = projects.find((project) => project === targetProject)
//             projects.splice(projects.indexOf(grabProjectName), 1)
//             },
//             pushTodayTasks() {
//                  projects.find((project) => project.name === 'Today')
//                  return this.getSingleProject('Today').task.push(Todo('Create','11/22/2022'))
//                 return


//             },
//         grabToday() {
//             const grabToday = projects.find((project) => project.name === 'Upcoming')
//             return this.getSingleProject('Upcoming').task
//         }
//            projects.getProjects('Today')
//            projects.forEach((project) => {
//             if(project.getName() === 'Today' || project.getName() === 'Upcoming')
//             return

//             const today = project.getTodayTask()
//             today.forEach((task) => {
//                 const todayTask = `${task.getName()}  ${project.getName()}`
//                 projects.getSingleProject('Today').addTask(new Todo(taskName, task.getDate()))

//             })
                
//             });
//         },
//         grabUpcoming() {

//         },

//      }
//  }



// console.log(user1.pushTodayTasks())
// console.log(user1.grabToday())
// console.log(user1.getSingleProject('Today'))
import { ProjectName } from "./ProjectManager";
import { TodoTask } from "./TodoManager";

export const Todo = () => {
    const projects = []
    projects.push(ProjectName('Today'))
    projects.push(ProjectName('Upcoming'))
    return {
        projects,
        addProject(project) {
            if(projects.find((project) => project.name === project))
            return
            projects.push(ProjectName(project))
        },
        deleteProject(targetProject) {
            const grabProject = projects.find((project) => project.name === targetProject)
            return projects.splice(projects.indexOf(grabProject), 1)
        },
        getProject(projectname) {
            // if(projects.find((project) => project.name === projectname))
            // return projectname
            return projects.find((project) => project.name === projectname)
        },
        getProjects() {
            // return projects.find((project) => project.name)
            return projects
        },
        getProjectTask(projectName) {
            // const grabTask = projects.find((project) => project.name === projectName)
            return this.getProject(projectName).task
        },
        // deleteProjectTask() {
        //     const grabTask = this.getProject(projectName).task
        // }
        // getProjectTasks() {
        //     // const  projects.filter((project) => project.task)
        //     // return ProjectName().task
        //   }
        // pushTodayTasks() {
        // projects.find((project) => project.name === 'Resume')
        // const projectResume = this.getProject('Resume').task
        // return this.getProject('Resume').task.push(addTas('Create','11/22/2022'))
        // return this.getProject('Resume').task.push(Todo('Create','11/22/2022'))
        //    },
        // getProjects() {
        //     return projects
        // },
        // addTodo() {
        //     const projectTask = ProjectName().task
        //     return projectTask
            
        // }
    }
}

let user1 = Todo()
console.log(user1.projects.find((project) => project.name === 'Today'))
// user1.addProject('Resume')
// user1.getProject('Resume').task.push(TodoTask('Create','11/22/2022'))
// console.log(user1.getProjectTask('Resume'))
// user1.addProject('Finish')
// user1.getProject('Finish').task.push(TodoTask('NOW','11/12/2022'))
// console.log(user1.getProjectTask('Finish'))
// console.log(user1)
// console.log(user1.getProjectTasks())
// console.log(user1.getProjectTask('Resume'))
// user1.getProject('Resume').task.push(TodoTask('Crrr','10/2/2023'))
// user1.addProject('Finish')
// user1.getProject('Finish').task.push(TodoTask('SSS','10/22/2022'))
// console.log(user1)