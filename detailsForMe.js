// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');

const renderDetails = async () => {
    const res = await fetch(`https://links-list-app.herokuapp.com/links/` + id);
    if (!res.ok) {
        window.location.replace("./index.html");
    }
    const link = await res.json();

    const template = `
        <div class="card">
            <div class="content" data-aos="fade-up" >
                <h2>${link.name}</h2>
                <a href="${link.link}">Website</a><br/>
                <img src="${link.image}" class="image" alt="portfolio image"><br/>
                <p>${link.about}</p>
            </div>
        </div>
    `;

    container.innerHTML = template;
}

deleteBtn.addEventListener('click', async () => {
    const res = await fetch(`https://links-list-app.herokuapp.com/links/` + id, {
        method: 'DELETE'
    });
    
    window.location.replace("./index.html");
})

window.addEventListener('DOMContentLoaded', renderDetails);