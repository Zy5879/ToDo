import pubsub from "./pubsub";
import { ProjectFactory } from "./projectfactory";

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

    // function showProject(ev) {
    //     document.querySelector('.homemain').style.display = 'none'
    //     document.querySelector('.hometoday').style.display = 'none'
    //     document.querySelector('.homeupcoming').style.display = 'none'
    //     const projectmain = document.querySelector('.projectmain')
    //     projectmain.style.display = 'block'
        // const div = document.createElement('div')
        // div.classList.add('project-content')
        // const h2 = document.createElement('h2')
        // const maintask = document.createElement('main')
        // div.append(h2,maintask)
        // projectmain.appendChild(div)

        // list = list.map((tn) => {
        //     if(tn === tn.name) {
        //         alert('TASK CANT BE THE SAME')
        //     }
        // })
        // let input = document.querySelector('.project-content')
        // let taskname = ev.target.closest('li')
        // let name = taskname.textContent
        // list = list.map((tn) => tn == name)
        // let projectasklist = list

        // projectasklist.forEach(name => {
        //     const div = document.createElement('div')
        //     div.classList.add('project-content')
        //     const h2 = document.createElement('h2')
        //     const maintask = document.createElement('main')
        //     h2.textContent = `${name.name}`
        //     div.append(h2,maintask)
        //     projectmain.appendChild(div)
        // })

        // input.textContent = name
        // document.querySelector('.addtaskproject').style.display = 'block'
        // if(list === name) {
        //     alert('PROJECTS MUST HAVE A DIFFERENT NAMES')
        // }
        // list.forEach(task => {
        //     let input = document.querySelector('.project-content')
        //     input.textContent = task
        // })
    // }


    //tell pubsub controller that we want to know about a project being added
    function addProject(name) {
        //project added event publish
        console.log(`I hear that ${name} is being added`)
        let projectlist = list
        projectlist.push(ProjectFactory(name))
        console.log(projectlist)
        projectlist = Array.from(list).sort()
        // list = Array.from(list).sort()
        console.log('projectUpdated',name)
        pubsub.publish('projectUpdated',name)

        let ul = document.querySelector('.projectName ul')
        ul.innerHTML =''
        let df = document.createDocumentFragment()
        projectlist.forEach(name => {
            let li = document.createElement('li')
            li.innerText = `${name.name}`;
            df.appendChild(li)

            // if(projectlist === name) {
            //     alert('PROJECTS MUST HAVE A DIFFERENT NAMES')
            // }
        });
        ul.appendChild(df);
     }

     function showProject(ev) {
        document.querySelector('.homemain').style.display = 'none'
        document.querySelector('.hometoday').style.display = 'none'
        document.querySelector('.homeupcoming').style.display = 'none'
        const projectmain = document.querySelector('.projectmain')
        projectmain.style.display = 'block'
        let projectasklist = list


        for(let i = 0; i < projectasklist.length; i++) {
            const h2 = document.createElement('h2')
            h2.innerText = projectasklist[i]
            projectmain.appendChild(h2)
        }

        // let item = ev.target.closest('li')
        // let name = item.textContent;
        // list = list.filter(nm => nm === name);
    
        // let input = document.querySelector('.project-content')
        // input.innerText = `${name}`
        // let projectasklist = list

        // projectasklist.forEach(function(i) {
        //     const div = document.createElement('div')
        //     div.classList.add('project-content')
        //     const h2 = document.createElement('h2')
        //     h2.innerText = i;
        //     div.appendChild(h2)
        //     h2.addEventListener('click', () => {
        //         console.log(i)
        //     })
        //     projectmain.appendChild(div)
        // });


        // const div = document.createElement('div')
        // div.classList.add('project-content')
        // const h2 = document.createElement('h2')
        // const maintask = document.createElement('main')
        // div.append(h2,maintask)
        // projectmain.appendChild(div)

        // list = list.map((tn) => {
        //     if(tn === tn.name) {
        //         alert('TASK CANT BE THE SAME')
        //     }
        // })
        // let input = document.querySelector('.project-content')
        // let taskname = ev.target.closest('li')
        // let name = taskname.textContent
        // list = list.map((tn) => tn == name)
        // input.textContent = name
        // let projectasklist = list

        // projectasklist.forEach(name => {
        //     const div = document.createElement('div')
        //     div.classList.add('project-content')
        //     const h2 = document.createElement('h2')
        //     const maintask = document.createElement('main')
        //     h2.textContent = `${name.name}`
        //     div.append(h2,maintask)
        //     projectmain.appendChild(div)
        // })

        // input.textContent = name
        // document.querySelector('.addtaskproject').style.display = 'block'
        // if(list === name) {
        //     alert('PROJECTS MUST HAVE A DIFFERENT NAMES')
        // }
        // list.forEach(task => {
        //     let input = document.querySelector('.project-content')
        //     input.textContent = task
        // })
    }


    // //  if(list === name) {
    // //     alert('PROJECTS MUST HAVE A DIFFERENT NAMES')
    // }
     return {
        renderTemp,
        addProject
     }

})()