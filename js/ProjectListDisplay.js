const projList = document.getElementById("project-list");
fetch("data/projects.json")
    .then(response => response.json())
    .then(projects => {
        projects.forEach(project => {
            projList.innerHTML +=   `<a href="project.html?id=${project.id}"
                                        <div class="project-card">
                                            <img src=${project.MainImage}>
                                            <p>${project.Title}<br><br></p>
                                            <p>${project.ShortDescription}</p>
                                        </div>
                                    </a>`;
        });
    });