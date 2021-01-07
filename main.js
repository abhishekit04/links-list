
const getLinks = async () => {
    const port = process.env.PORT || 3000 || 4000 || 8080;
    let uri = `http://localhost:${port}/links?_sort=name&_order=asc`;
    const res = await fetch(uri);
    const links = await res.json();

    // console.log(links);
    
    
    links.forEach(i => {
        var link = document.getElementById('links');
        let template = `
            <div class="fixed-content card " data-aos="fade-up">
                <h2>${i.name}</h2>
                <a href="${i.link}">Website</a>
                <img src="${i.image}" class="img" alt="portfolio image">
                <a href="./detail.html?id=${i.id}">Read more</a>
            </div>
        `;

        // link.innerHTML = template;
        link.insertAdjacentHTML('beforeend', template);
    });



}

window.addEventListener('DOMContentLoaded', () => getLinks());

// getLinks();
