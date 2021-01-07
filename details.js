// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const port = 8080 || 3000 || 4000 || 5000;

const renderDetails = async () => {
    const res = await fetch(`http://localhost:${port}/links/` + id);
    if (!res.ok) {
        window.location.replace("./index.html");
    }
    const link = await res.json();

    const template = `
        <div class="fixed-content card " data - aos="fade-up" >
        <h2>${link.name}</h2>
        <a href="${link.link}">Website</a>
        <img src="${link.image}" class="img" alt="portfolio image">
        </div>
        `;

        container.innerHTML = template;
        
}



window.addEventListener('DOMContentLoaded', renderDetails);