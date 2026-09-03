const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const projectInfo = document.getElementById("project-info");
const projectTitle = document.getElementById("project-title");

fetch("data/projects.json")
    .then(response => response.json())
    .then(projects => {
        const project = projects.find(p => p.id == id);
        projectTitle.innerHTML = `
        <div>
            <p>${project.Title}</p>
        `
        projectInfo.innerHTML = `
        <div >
            <p>${project.Timeline}<br><br>${project.Description}</p>
        </div>
        `

    })