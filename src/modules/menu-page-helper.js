import {createCard, createMenuContainer, createMenuHeading} from './menu.js';
import chickenAdobo from '../img/chicken-adobo.jpg';
import chickenCurry from '../img/chicken-curry.jpg';
import chickenTeriyaki from '../img/chicken-teriyaki.jpg';
import friedChicken from '../img/fried-chicken.png';
import grilledPorkChops from '../img/grilled-pork-chops.png';
import honeyGarlicPork from '../img/honey-garlic-pork.png';
import porkRoast from '../img/pork-roast.png';
import porkTeriyaki from '../img/pork-teriyaki.jpg';
import roastBeef from '../img/roast-beef.jpg';
import mongolianBeef from '../img/mongolian-beef.jpg';
import crispyVeggieFritters from '../img/crispy-vegetable-fritters.jpg';
import veggieSalad from '../img/vegetable-salad.jpg';

export default function initializeMenuPage(content){
  content.appendChild(createMenuHeading());

  const chickenMenuContainer = createMenuContainer("Chicken");
  loadChickenCards(chickenMenuContainer);

  const porkMenuContainer = createMenuContainer("Pork");
  loadPorkCards(porkMenuContainer);

  const beefMenuContainer = createMenuContainer("Beef");
  loadBeefCards(beefMenuContainer);

  const veggieMenuContainer = createMenuContainer("Vegetables");
  loadVegetableCards(veggieMenuContainer);

  content.appendChild(chickenMenuContainer.menuContainerDiv);
  content.appendChild(porkMenuContainer.menuContainerDiv);
  content.appendChild(beefMenuContainer.menuContainerDiv);
  content.appendChild(veggieMenuContainer.menuContainerDiv);
}

function addCardToContainer(container, cards) {
  cards.forEach(card => {
    container.addCardToContainer(card);
  });
}

function loadChickenCards(menuContainer){
  const card1 = createCard(
    chickenAdobo,
    'An image of chicken adobo',
    'Chicken Adobo',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus laudantium adipisci cum nisi vero',
    'P150.00',
  );

  const card2 = createCard(
    chickenCurry,
    'An image of chicken curry',
    'Chicken Curry',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus laudantium adipisci cum nisi vero',
    'P120.00',
  );

  const card3 = createCard(
    chickenTeriyaki,
    'An image of chicken teriyaki',
    'Chicken Teriyaki',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus laudantium adipisci cum nisi vero',
    'P175.00',
  );

  const card4 = createCard(
    friedChicken,
    'An image of fried chicken',
    'Classic Fried Chicken',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus laudantium adipisci cum nisi vero',
    'P100.00',
  );

  const cards = [card1, card2, card3, card4];
  addCardToContainer(menuContainer, cards);
}

function loadPorkCards(menuContainer){
  const card1 = createCard(
    grilledPorkChops,
    'An image of grilled pork chops',
    'Grilled Pork Chops',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus laudantium adipisci cum nisi vero',
    'P200.00',
  );

  const card2 = createCard(
    honeyGarlicPork,
    'An image of honey garlic pork',
    'Honey Garlic Pork',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus laudantium adipisci cum nisi vero',
    'P225.00',
  )

  const card3 = createCard(
    porkRoast,
    'An image of pork roast',
    'Pork Roast',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus laudantium adipisci cum nisi vero',
    'P200.00',
  );

  const card4 = createCard(
    porkTeriyaki,
    'An image of pork teriyaki',
    'Pork Teriyaki',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus laudantium adipisci cum nisi vero',
    'P225.00',
  );

  const cards = [ card1, card2, card3, card4 ];
  addCardToContainer(menuContainer, cards);
}

function loadBeefCards(menuContainer) {
  const card1 = createCard(
    roastBeef,
    'An image of roast beef',
    'Roast Beef',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus laudantium adipisci cum nisi vero',
    'P300.00',
  );

  const card2 = createCard(
    mongolianBeef,
    'An image of mongolian beef',
    'Mongolian Beef',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus laudantium adipisci cum nisi vero',
    'P300.00',
  );

  const cards = [ card1, card2 ];
  addCardToContainer(menuContainer, cards);
}

function loadVegetableCards(menuContainer) {
  const card1 = createCard(
    crispyVeggieFritters,
    'An image of vegetable fritters',
    'Crispy Vegetable Fritters',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus laudantium adipisci cum nisi vero',
    'P150.00',
  );

  const card2 = createCard(
    veggieSalad,
    'An image of vegetable salad',
    'Crispy Vegetable Salad',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus laudantium adipisci cum nisi vero',
    'P150.00',
  );
  
  const cards = [ card1, card2 ];
  addCardToContainer(menuContainer, cards);
}