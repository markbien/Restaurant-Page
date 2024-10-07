function createMenuHeading(){
  const mainMenuContainer = document.createElement('div');
  mainMenuContainer.setAttribute('id', 'main-menu-container');

  const menuTitleDiv = document.createElement("div");
  menuTitleDiv.classList.add("menu-title");

  const h2 = document.createElement("h2");
  h2.textContent = "Menu";
  const p = document.createElement("p");
  p.textContent = `The menu at LMP Restaurant is a celebration of fresh, locally sourced
        ingredients, thoughtfully crafted into seasonal dishes that highlight
        the best of each harvest. Each plate is designed to bring out vibrant,
        natural flavors, reflecting the restaurant's commitment to
        sustainability and culinary creativity.`;
  menuTitleDiv.appendChild(h2);
  menuTitleDiv.appendChild(p);
  mainMenuContainer.appendChild(menuTitleDiv);
  
  return mainMenuContainer;
}

function createCard(imgSrc, imgAlt, foodName, foodDesc, foodPrice) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "box-shadow");

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("image-container");
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = imgAlt;
  imageDiv.appendChild(img);
  cardDiv.appendChild(imageDiv);

  const foodDetails = document.createElement("div");
  foodDetails.classList.add("food-details");
  const h4 = document.createElement("h4");
  h4.textContent = foodName;
  const foodDescPara = document.createElement("p");
  foodDescPara.classList.add("food-description");
  foodDescPara.textContent = foodDesc;
  const foodPricePara = document.createElement("p");
  foodPricePara.classList.add("food-price");
  foodPricePara.textContent = foodPrice;
  foodDetails.appendChild(h4);
  foodDetails.appendChild(foodDescPara);
  foodDetails.appendChild(foodPricePara);
  cardDiv.appendChild(foodDetails);

  return cardDiv;
}

function createMenuContainer(foodType) {
  const menuContainerDiv = document.createElement("div");
  menuContainerDiv.classList.add("menu-container");

  const foodGroup = document.createElement('section');
  foodGroup.classList.add('food-group');

  const foodVariety = document.createElement('section');
  const foodTypeH3 = document.createElement('h3');
  foodTypeH3.textContent = foodType;
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');
  foodVariety.appendChild(foodTypeH3);
  foodVariety.appendChild(cardContainer);
  foodGroup.appendChild(foodVariety);
  menuContainerDiv.appendChild(foodGroup);

  function addCardToContainer(card) {
    cardContainer.appendChild(card);
  }

  return { menuContainerDiv, addCardToContainer };
}

export { createCard, createMenuContainer, createMenuHeading };