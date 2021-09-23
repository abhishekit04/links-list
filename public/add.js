const form = document.querySelector('form');

const createPost = async (e) => {
  e.preventDefault();

  const doc = {
    name: form.name.value,
    link: form.link.value,
    image: form.portfolio.value,
    about: form.about.value,
  }

  // await fetch(`http://localhost:3000/links/`, {
  //   method: 'POST',
  //   body: JSON.stringify(doc),
  //   headers: { 'Content-Type': 'application/json' }
  // })

  
  await fetch(`https://singlebuck.herokuapp.com/links/`, {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
  })

  window.location.replace('./index.html')
}

form.addEventListener('submit', createPost);
