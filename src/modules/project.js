 projectArray = []

 const projectFactory = function(name) {
    const project = {name}
    return {
        project,
        addProjectToLibrary() {
            projectArray.push(project)
            console.log('Project has been pushed!')
        }
    };
 }

 const project1 = projectFactory('Webpack')
 const project2 = projectFactory('WebpackDev')

 project1.addProjectToLibrary()
 project2.addProjectToLibrary()