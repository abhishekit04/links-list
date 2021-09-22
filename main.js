const searchForm = document.querySelector('.search');
const link = document.getElementById('links');

const getLinks = async (term) => {
    // let uri = `http://localhost:3000/links?_sort=name&_order=asc`;
    let uri = 'https://linklist-vert.vercel.app/links/?_sort=name&_order=asc';

    if(term) {
        uri += `&q=${term}`;
        link.innerHTML = "";
    }

    const res = await fetch(uri);
    const data = await res.json();

    // console.log(data);
    
    
    data.forEach(i => {
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

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    getLinks(searchForm.term.value.trim());

});

window.addEventListener('DOMContentLoaded', () => getLinks());

// getLinks();
