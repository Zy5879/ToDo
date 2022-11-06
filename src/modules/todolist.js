 const Todo = (task,description,duedate,project) => {
    let todoTask = task;
    let todoDescription = description;
    let todoDuedate = duedate;
    let todoProject = project;

    let todos = {
        task:task,
        description:description,
        duedate:duedate,
        project:project
    }

    return {
        get task() {
            return todoTask
        },
        set task(task) {
            todoTask = task;
        },
    
        get description() {
            return todoDescription
        },
        set description(description) {
            todoDescription = description
        },
        get duedate() {
            return todoDuedate
        },
        set duedate(duedate) {
            todoDuedate = duedate
        },
        get project() {
            return todoProject
        },
        set project(project) {
            todoProject = project
        },
        
        todos
    }
}

// let user1 = Todo('task','task','task','task')


// user1.task = 'PS5'
// console.log('User Task has been changed', user1)

// let user2 = Todo('task','task','task','task')
// user2.task = 'Play Game'
// user2.duedate = '11/22/2022'
// console.log(user2)






