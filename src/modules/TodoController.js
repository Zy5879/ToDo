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
    let projects = JSON.parse(localStorage.getItem('myprojects')) || [];
    const addProject = (projectname) => {
        if(projects.find((project) => project.name === projectname.name))
        return
        projects.push(Projects(projectname)) 
        localStorage.setItem('myprojects', JSON.stringify(projects))


    }
    const deleteProject = (projectname) => {
        const grabProject = projects.find((project) => project === projectname)
        return projects.splice(projects.indexOf(grabProject),1)
    }
    const getProject = (projectname) => {
       return projects.find((project) => project.name === projectname)
    }
    const addTodo = (projectname,task,date) => {
        // localStorage.setItem('myprojects', JSON.stringify(task,date) )
        // const grabProject = getProject(projectname).todos
        // return getProject(projectname).addTask((task,date))
          getProject(projectname).todos.push(Task(task,date))
          localStorage.setItem('myprojects', JSON.stringify(projects))
        //   getProject(projectname).todos.push(Task(task,date))
        //   localStorage.setItem('myprojects',todos)
    //  const grabProject = projects.find((project) => project.getProjectName() === projectname)
    //  return grabProject.addTask(Task(task,date))
    }
    const deleteTodo = (projectname, task) => {
         getProject(projectname).deleteTask(task)
         localStorage.setItem('myprojects',JSON.stringify(projects))
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