document.addEventListener('DOMContentLoaded', function() {
    fetch('projects/projects.json')
        .then(response => response.json())
        .then(data => {
            const articles = document.querySelectorAll('.work-item');
            articles.forEach(article => {
                const projectName = article.getAttribute('data-project');
                const project = data[projectName];
                let iconHTML = project.icon ? `<span class="icon ${project.icon}"></span> ` : '';

                if (project) {
                    article.innerHTML = `
                        <a href="${project.url}">
                            <div class="image fit thumb">
                                <img src="${project.image}" alt="${projectName}" />
                            </div>
                        </a>
                        <h3>${iconHTML} ${projectName}</h3>
                        <p>${project.description}</p>
                    `;
                }
            });
        })
        .catch(error => console.error('Error fetching project data:', error));
});