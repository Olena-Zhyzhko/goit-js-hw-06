const itemEl = document.querySelector('#categories');

console.log(`Number of categories: ${itemEl.children.length}`);


const categoriesAnimal = itemEl.querySelectorAll(".item");

categoriesAnimal.forEach((elem) => {
  return console.log(`Category: ${elem.querySelector("h2").textContent}
    Elements:${elem.querySelectorAll("li").length}`);
});
