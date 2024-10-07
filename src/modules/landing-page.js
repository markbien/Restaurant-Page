import fbIcon from "../img/facebook.png";
import igIcon from "../img/instagram.png";
import tiktokIcon from "../img/tiktok.png";
import createHome from './home.js';
import createContactUsContainer from './contact-us.js';
import initializeMenuPage from './menu-page-helper.js';

function createHeader() {
  const header = document.createElement("header");

  const divLogo = document.createElement("div");
  divLogo.setAttribute("id", "logo");

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "LMP Restaurant";

  const motto = document.createElement("p");
  motto.textContent = "The best pet-friendly restaurant in town!";

  divLogo.appendChild(restaurantName);
  divLogo.appendChild(motto);
  header.appendChild(divLogo);

  const nav = document.createElement("nav");
  const options = ["Home", "Menu", "Contact Us"];
  options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.setAttribute('id', option.replaceAll(/\s/gi, "").toLowerCase());
    btn.addEventListener('click', ()=> {
      switchPages(btn);
    });

    nav.appendChild(btn);
  });

  header.appendChild(nav);

  return header;
}

function createContentBody() {
  const contentBody = document.createElement("div");
  contentBody.setAttribute("id", "content");

  return contentBody;
}

function createFooter() {
  const footer = document.createElement("footer");
  const message = document.createElement("p");
  message.textContent = "Connect with us:";

  const ul = document.createElement("ul");

  const icons = [fbIcon, igIcon, tiktokIcon];
  icons.forEach((icon) => {
    const li = document.createElement("li");
    const href = document.createElement("a");
    const img = document.createElement("img");
    img.src = icon;

    href.appendChild(img);
    li.appendChild(href);
    ul.appendChild(li);
  });

  footer.appendChild(message);
  footer.appendChild(ul);

  return footer;
}

function switchPages(btn){
  const content = document.querySelector('#content');
  content.textContent = "";
  const id = btn.getAttribute('id');
  if (id === 'home') {
    content.appendChild(createHome());
  } else if (id === 'menu') {
    initializeMenuPage(content);
  } else {
    content.appendChild(createContactUsContainer())
  }
}

export default function createLandingPage(body) {
  body.appendChild(createHeader());
  body.appendChild(createContentBody());
  body.appendChild(createFooter());

  document.querySelector('#content').appendChild(createHome());
}