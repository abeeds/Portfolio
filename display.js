const experience = "https://raw.githubusercontent.com/abeeds/Portfolio/refs/heads/main/experience.json";
const projects = "https://raw.githubusercontent.com/abeeds/Portfolio/refs/heads/main/projects.json";


fetch(experience)
    .then(response => response.json())
    .then(data => {
        // remove temp message after fetching data
        const temp_msg = document.querySelector('.exp_temp_msg');
        temp_msg.remove();

        const exp_div = document.querySelector('.experience');
        const exp_arr = Object.keys(data);

        exp_div.innerHTML = `
            ${exp_arr.map(exp_name => `
                <h2>${exp_name}</h2>
                <p><strong>Role</strong>: ${data[exp_name]["role"]}</p>
                ${data[exp_name]["tools"] ? `<p><strong>Tools</strong>: ${data[exp_name]["tools"].join(',  ')}</p>` : ''}

                <ul>
                    ${data[exp_name]["desc"].map(bullet => `
                        <li>${bullet}</li>
                    `).join('')}
                </ul>
            `).join('')}`;
}).catch(error => console.error('Error fetching experience:', error));


fetch(projects)
    .then(response => response.json())
    .then(data => {
        // remove temp message after fetching data
        const temp_msg = document.querySelector('.proj_temp_msg');
        temp_msg.remove();

        const proj_div = document.querySelector('.projects');
        const proj_arr = Object.keys(data);

        proj_div.innerHTML = `
            ${proj_arr.map(proj_name => `
                <h2>${proj_name}</h2>
                <p><strong>Languages</strong>: ${data[proj_name]["lang"].join(',  ')}</p>
                ${data[proj_name]["tools"] ? `<p><strong>Tools</strong>: ${data[proj_name]["tools"].join(',  ')}</p>` : ''}

                <ul>
                    ${data[proj_name]["desc"].map(bullet => `
                        <li>${bullet}</li>
                    `).join('')}
                </ul>
            `).join('')}`;
}).catch(error => console.error('Error fetching projects:', error));
