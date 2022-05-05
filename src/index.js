import './style.css';

const $ = document.querySelector.bind(document);
const $create = document.createElement.bind(document);
const body = $('body');
body.classList.add('home');

const content = $create('div');
content.setAttribute('id', 'content');
body.appendChild(content);

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

function footerComponent(){
    const footer = $create('footer');
    footer.textContent = "Baktol Restaurant Inc.";

    return footer;
}

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

body.insertBefore(navComponent(), content);
body.appendChild(footerComponent());
content.appendChild(homeTabComponent());