const form = document.querySelector('form');
// const port = process.env.PORT || 3000;

const createPost = async (e) => {
  e.preventDefault();

  const doc = {
    name: form.name.value,
    link: form.link.value,
    image: form.portfolio.value,
  }

  
  await fetch(`https://links-list-app.herokuapp.com/links`, {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
  })

  window.location.replace('./index.html')
}

form.addEventListener('submit', createPost);