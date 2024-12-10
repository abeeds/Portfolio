const experience = "https://raw.githubusercontent.com/abeeds/Portfolio/refs/heads/main/experience.json";
const projects = "https://raw.githubusercontent.com/abeeds/Portfolio/refs/heads/main/projects.json";


fetch(projects)
    .then(response => response.json())
    .then(data => {
        const projects_div = document.querySelector('.projects');
        const proj_arr = Object.keys(data);

        projects_div.innerHTML = `
            <ul>
                ${proj_arr.map(key => `<li>${key}</li>`).join('')}
            </ul>
        `;
    }).catch(error => console.error('Error fetching projects:', error));
