import pubsub from "./pubsub";

export const projects = (() => {
    let list = [];
    function renderTemp(container) {
        let template = document.getElementById('projectListTemplate')
        let div = template.content.cloneNode(true);
        container.appendChild(div)
        let ul = document.querySelector('.projectName ul')
        ul.addEventListener('click',showProject)
        console.log('PROJECTS: we want to know if a project is added')
        pubsub.subscribe('projectAdded', addProject)
    }

    function showProject(ev) {
        document.querySelector('.homemain').style.display = 'none'
        document.querySelector('.hometoday').style.display = 'none'
        document.querySelector('.homeupcoming').style.display = 'none'
        document.querySelector('.projectmain').style.display = 'block'
        let input = document.querySelector('.project-content')
        let taskname = ev.target.closest('li')
        let name = taskname.textContent
        list = list.map((tn => tn !== name))
        input.textContent = name
        // document.querySelector('.addtaskproject').style.display = 'block'
        // if(list === name) {
        //     alert('PROJECTS MUST HAVE A DIFFERENT NAMES')
        // }
        // list.forEach(task => {
        //     let input = document.querySelector('.project-content')
        //     input.textContent = task
        // })
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

            // if(projectlist === name) {
            //     alert('PROJECTS MUST HAVE A DIFFERENT NAMES')
            // }
        });
        ul.appendChild(df);
     }


    // //  if(list === name) {
    // //     alert('PROJECTS MUST HAVE A DIFFERENT NAMES')
    // }
     return {
        renderTemp,
        addProject
     }

})()