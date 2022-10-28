todoList = []

const factoryTodo = function(name,description,duedate) {
    const todo = {name, description,duedate}
    return {
        todo,
        // name: name,
        addTodo() {
            todoList.push(todo)
            console.log('Factory has been pushed')
        }
    };
}

const todo1 = factoryTodo('Resume', 'Project is Due Soon', 'November')
const todo2 = factoryTodo('Homework','Homework is Due Soon','December')
// const todo2 = factoryTodo('Homework')
todo1.addTodo()
todo2.addTodo()

// console.log(todo2)
// console.log(todo1)
// console.log(todo1.addTodo(todo1))
// todoList.push(factoryTodo('Resume'))
// todoList.push(factoryTodo('Project One'))
// todo1.addTodo()
// todo2.addTodo()
