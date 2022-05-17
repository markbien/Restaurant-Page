import './style.css';
import Chat from "./chat.png";
import Phone from "./phone-call.png";

// bind $ to document.querySelector
const $ = document.querySelector.bind(document);
// bind $create to creating elements
const $create = document.createElement.bind(document);
// declare body variable
const body = $('body');
// initially set the body's class
body.classList.add('contact-us');

// create content div
const content = $create('div');
content.setAttribute('id', 'content');
// append to body and this will contain all the components
body.appendChild(content);

// create navigation component
function navComponent(){
    const nav = $create('nav');
    const ul = $create('ul');
    const tabs = ['Home', 'Menu', 'Contact Us'];
    
    nav.appendChild(ul);
    tabs.forEach(tab => {
        const li = $create('li');
        li.textContent = tab;
        ul.appendChild(li);
    });

    return nav;
}

// create footer component
function footerComponent(){
    const footer = $create('footer');
    footer.textContent = "Baktol Restaurant Inc.";

    return footer;
}

// home tab component
function homeTabComponent(){
    const homeTab = $create('div');
    homeTab.classList.add('home-tab');

    const top = $create('div');
    top.classList.add('top');

    const companyName = $create('h1');
    companyName.textContent = "Baktol Restaurant";

    const hr = $create('hr');

    const history = $create('p');
    history.textContent = "Founded in 2022 by Parsley and Lexi. It started as a small coffee shop that is pet-friendly and extended its services to provide top tier delicacies and dishes.";
    history.classList.add('text-justify');

    const bottom = $create('div');
    bottom.classList.add('bottom');

    const vision = $create('h3');
    vision.textContent = "Vision";

    const visionText = $create("p");
    visionText.classList.add('text-justify');
    visionText.textContent = "A leading 5 star restaurant that has served millions of customers with delicious and extravagant dishes. Known to many as Miracle-Resto.";

    const mission = $create('h3');
    mission.textContent = "Mission";

    const missionText = $create("p");
    missionText.classList.add('text-justify');
    missionText.textContent = "To provide world class service and dishes at a low price to ensure everyone gets to enjoy our foods and services.";

    top.appendChild(companyName);
    top.appendChild(hr);
    top.appendChild(history);

    bottom.appendChild(vision);
    bottom.appendChild(visionText);
    bottom.appendChild(mission);
    bottom.appendChild(missionText);

    homeTab.appendChild(top);
    homeTab.appendChild(bottom);

    return homeTab;
}

// contact tab component
function contactComponent(){
    const contactTab = $create('div');
    contactTab.classList.add('contact-tab');

    const emailTab = $create('div');
    emailTab.classList.add('contact');

    const chatIcon = new Image();
    chatIcon.src = Chat;

    const emailContents = $create('div');
    emailContents.classList.add('contents');

    const h3 = $create('h3');
    h3.textContent = "Customer Support";

    const p1 = $create("p");
    p1.textContent = "Send us an email with your feedbacks or any questions that you have.";

    const btn = $create('button');
    btn.textContent = "Contact Us";

    const phoneTab = $create("div");
    phoneTab.classList.add("contact");

    const callIcon = new Image();
    callIcon.src = Phone;

    const phoneContents = $create('div');
    phoneContents.classList.add('contents');

    const h3a = $create("h3");
    h3a.textContent = "Talk to us";

    const p2 = $create('p');
    p2.textContent = "Call us to get faster assistance.";

    const p3 = $create('p');
    p3.textContent = "+63-999-999-9999";

    contactTab.appendChild(emailTab);
    contactTab.appendChild(phoneTab);

    emailTab.appendChild(chatIcon);
    emailTab.appendChild(emailContents);    
    
    emailContents.appendChild(h3);
    emailContents.appendChild(p1);
    emailContents.appendChild(btn);

    phoneTab.appendChild(callIcon);
    phoneTab.appendChild(phoneContents);

    phoneContents.appendChild(h3a);
    phoneContents.appendChild(p2);
    phoneContents.appendChild(p3);

    return contactTab;
}

// menu component
function menuComponent(){
    const menuTab = $create("div");
    menuTab.classList.add("menu-tab");


}

















// inserts the nav component BEFORE the content div
body.insertBefore(navComponent(), content);
// appends the footer to the body (currently the last element)
body.appendChild(footerComponent());
// appends one of the tabs to the content div
// will change later so that the CLICK will trigger the appending of components
// will also need to CLEAR before APPENDING
// content.appendChild(contactComponent());