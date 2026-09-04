const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const projectInfo = document.getElementById("project-info");
const projectTitle = document.getElementById("project-title");
const projectImage = document.getElementById("project-images");

fetch("data/projects.json")
    .then(response => response.json())
    .then(projects => {
        const project = projects.find(p => p.id == id);
        const imagesHTML = Object.values(project.GameplayImages[0]).map(image => ` <img src="${image}" alt="${project.Title}">`).join("");
        projectTitle.innerHTML = `
        <div>
            <p>${project.Title}</p>
        `;
        projectInfo.innerHTML = `
        <div >
            <p>${project.Timeline}<br><br>${project.Description}</p>
        </div>
        `;
        projectImage.innerHTML = `
        <div class="project-images">
            ${imagesHTML}
        </div>
        <a href=${project.Link} class="link">Play it here!</a>
        `
    })