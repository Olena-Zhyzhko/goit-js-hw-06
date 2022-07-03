const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallaryEl = document.querySelector('.gallery');
gallaryEl.classList.add('list__gal')

// const itemEl = document.createElement('li');

// const imgEl = document.createElement('img');
// imgEl.src = images.url;
// imgEl.alt = images.alt

const listGallaryEl = images.map(({ url, alt }) => {
  return `<li class="image__gal"> <img  src='${url}' alt='${alt}' width=320> </li>`;
}).join("");
// listGallaryEl.classList.add('gallary');
// console.log(listGallaryEl);
gallaryEl.insertAdjacentHTML("beforeend", listGallaryEl);
//   const itemEl = document.createElement('li');
//   itemEl.url = image.url;
//   itemEl.alt = image.alt;

// })


// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

// const listEl = ingredients.map(ingredient => {
//   const elementEl = document.createElement('li');
//   elementEl.textContent = ingredient;
//   elementEl.classList.add('item');

//   return elementEl;
// })

// ingredientsList.append(...listEl);
// console.log(ingredientsList);

