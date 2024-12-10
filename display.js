const experience = "https://raw.githubusercontent.com/abeeds/Portfolio/refs/heads/main/experience.json";
const projects = "https://raw.githubusercontent.com/abeeds/Portfolio/refs/heads/main/projects.json";


fetch(experience)
    .then(response => response.json())
    .then(data => {
        const exp_div = document.querySelector('.experience');
        const exp_arr = Object.keys(data);

        exp_div.innerHTML = `
            <ul>
                ${exp_arr.map(key => `<li>${key}</li>`).join('')}
            </ul>
        `;
    }).catch(error => console.error('Error fetching experience:', error));


fetch(projects)
    .then(response => response.json())
    .then(data => {
        const proj_div = document.querySelector('.projects');
        const proj_arr = Object.keys(data);

        proj_div.innerHTML = `
            <ul>
                ${proj_arr.map(key => `<li>${key}</li>`).join('')}
            </ul>
        `;
    }).catch(error => console.error('Error fetching projects:', error));
