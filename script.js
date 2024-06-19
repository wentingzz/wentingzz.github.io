document.addEventListener('DOMContentLoaded', function() {
    fetch('pages/projects.json')
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
                            <h3>${iconHTML} ${projectName}</h3>
                            <p>${project.description}</p>
                        </a>
	                    <p>${project.skills && project.skills.length > 0 ? `<span>${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}</span>` : ''}</p>
                    `;
                }
            });
        })
        .catch(error => console.error('Error fetching project data:', error));

    fetch('pages/experience.json')
        .then(response => response.json())
        .then(data => {
            const experiences = document.querySelectorAll('.experience-item');
            experiences.forEach(experience => {
                const experienceName = experience.getAttribute('data-experience');
                const exp = data[experienceName];

                if (exp) {
                    experience.innerHTML = `
                        <a href="${exp.url}">
                            <div class="two-column">
						        <h4>${experienceName} ${exp.website ? `<span class="icon regular fa-bookmark"></span>` : `<span class="icon solid fa-link"></span>`}</h4>
						        <p>${exp.duration}</p>
						    </div>
					        <div class="two-column">
						        <span>${exp.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}</span>

						        ${exp.website ? `<a href="${exp.website}" class="icon solid fa-link"> ${exp.company}</a>` : `<p>${exp.company}</p>`}
						    </div>
					    </a>
                    `;
                }
            });
        })
        .catch(error => console.error('Error fetching experience data:', error));

    var sections = document.querySelectorAll('section');
    var sidebar = document.getElementById('mySidenav');

    sections.forEach(function(section) {
        var link = document.createElement('a');
        var abbr = section.getAttribute('data-abbr');
        link.textContent = abbr;
        link.href = '#' + section.id;
        link.addEventListener('click', function(e) {
            e.preventDefault();
            section.scrollIntoView({ behavior: 'smooth' });
        });
        sidebar.appendChild(link);
    });
});

function navChange() {
	if(document.getElementById("mySidenav").style.width == "200px"){
		document.getElementById("mySidenav").style.width = "0";
	} else {
		document.getElementById("mySidenav").style.width = "200px";
	}
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

var sideNav = document.getElementById("mySidenav");
sideNav.addEventListener("mouseleave", function() {
    this.style.width = "0";
});


function googleTranslateElementInit() {
				new google.translate.TranslateElement(
					{pageLanguage: 'en'},
					'google_translate_element'
				);
			}
document.addEventListener('DOMContentLoaded', function() {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
        document.getElementById('language-selector').value = selectedLanguage;
        translateHtml();
    }
});