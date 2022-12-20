import { Projects } from "./project";
import { Task } from "./task";

// export const TodoController = () => {
//     let projects = [];
//     return {
//         projects,
//         setProjects(project) {
//             projects = project
//         },
//         addProject(projectname) {
//             if(projects.find((project) => project.name === projectname.name))
//             return
//             projects.push(projectname)
//         },
//         deleteProject(projectname) {
//             const grabProject = projects.find((project) => project.getProjectName() === projectname.name)
//             return projects.splice(projects.indexOf(grabProject),1)
//         },
//         getProject(projectname) {
//             if(projects.find((project) => project.getProjectName() === projectname.name)) 
//             return projectname

//         },

//     }
// }

 const TodoController = (() => {
    let projects = []
    const addProject = (projectname) => {
        if(projects.find((project) => project.name === projectname.name))
        return
        projects.push(Projects(projectname))

    }
    const deleteProject = (projectname) => {
        const grabProject = projects.find((project) => project.name === projectname.name)
        return projects.splice(projects.indexOf(grabProject),1)
    }
    const getProject = (projectname) => {
       return projects.find((project) => project.getProjectName() === projectname)
    }
    const addTodo = (projectname,task) => {
        // const grabProject = getProject(projectname).todos
        return getProject(projectname).addTask((task))
    //  const grabProject = projects.find((project) => project.getProjectName() === projectname)
    //  return grabProject.addTask(Task(task,date))
    }
    const deleteTodo = (projectname, task) => {
        return getProject(projectname).deleteTask(task)
    }

    const editProjectTodo = (projectname,task,date) => {
        return getProject(projectname).editTodo(task,date)
    }

    // const editTodo = (projectname)
   
    return {
        projects,
        addProject,
        deleteProject,
        getProject,
        deleteTodo,
        addTodo,
        editProjectTodo
    }
})()

export default TodoController

let user1 = TodoController
// let user1 = TodoController().addProject('Name')
// user1.addProject('Name')
// user1.addTodo('Name','task')
// user1.editProjectTodo('Name','netask','1/2/2022')



// console.log(user1)