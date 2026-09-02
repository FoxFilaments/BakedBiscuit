const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const projectInfo = document.getElementById("project-into");

fetch("data/projects.json")
    .then(response => response.json())
    .then(projects => {
        const project = projects.find(p => p.id == id);
        projectInfo.innerHTML = `
        <div>
            <p>${project.Title}</p>
        </div>
        `
    })