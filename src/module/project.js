import pubsub from "./pubsub";

export const projects = (() => {
    let list = [];
    function renderTemp(container) {
        let template = document.getElementById('projectListTemplate')
        let div = template.content.cloneNode(true);
        container.appendChild(div)
        console.log('PROJECTS: we want to know if a project is added')
        pubsub.subscribe('projectAdded', addProject)
    }

    //tell pubsub controller that we want to know about a project being added
    function addProject(name) {
        //project added event publish
        console.log(`I hear that ${name} is being added`)
        let projectlist = list
        projectlist.push(name)
        console.log(projectlist)
        projectlist = Array.from(list).sort()
        // list = Array.from(list).sort()
        console.log('projectUpdated',name)
        pubsub.publish('projectUpdated', name)

        let ul = document.querySelector('.projectName ul')
        ul.innerHTML =''
        let df = document.createDocumentFragment()
        projectlist.forEach(name => {
            let li = document.createElement('li')
            li.innerText = name;
            df.appendChild(li)
        });
        ul.appendChild(df);

     }
     return {
        renderTemp,
        addProject
     }

})()