import "./style.css";
import Chat from "./chat.png";
import Phone from "./phone-call.png";

const pageComponents = (() => {
  const $ = document.querySelector.bind(document);
  const $create = document.createElement.bind(document);
  const body = $("body");
  const content = $create("div");
  content.setAttribute("id", "content");
  body.appendChild(content);

  function navComponent() {
    const nav = $create("nav");
    const ul = $create("ul");
    const tabs = ["Home", "Menu", "Contact Us"];

    nav.appendChild(ul);
    tabs.forEach((tab) => {
      const li = $create("li");
      li.textContent = tab;
      attachEvent(li);
      ul.appendChild(li);
    });
    return nav;
  }

  function footerComponent() {
    const footer = $create("footer");
    footer.textContent = "Baktol Restaurant Inc.";

    return footer;
  }

  function homeTabComponent() {
    clearTab();
    const homeTab = $create("div");
    homeTab.classList.add("home-tab");
    body.classList.add("home");

    const top = $create("div");
    top.classList.add("top");

    const companyName = $create("h1");
    companyName.textContent = "Baktol Restaurant";

    const hr = $create("hr");

    const history = $create("p");
    history.textContent =
      "Founded in 2022 by Parsley and Lexi. It started as a small coffee shop that is pet-friendly and extended its services to provide top tier delicacies and dishes.";
    history.classList.add("text-justify");

    const bottom = $create("div");
    bottom.classList.add("bottom");

    const vision = $create("h3");
    vision.textContent = "Vision";

    const visionText = $create("p");
    visionText.classList.add("text-justify");
    visionText.textContent =
      "A leading 5 star restaurant that has served millions of customers with delicious and extravagant dishes. Known to many as Miracle-Resto.";

    const mission = $create("h3");
    mission.textContent = "Mission";

    const missionText = $create("p");
    missionText.classList.add("text-justify");
    missionText.textContent =
      "To provide world class service and dishes at a low price to ensure everyone gets to enjoy our foods and services.";

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

  function contactComponent() {
    clearTab();
    body.classList.add("contact-us");

    const contactTab = $create("div");
    contactTab.classList.add("contact-tab");

    const emailTab = $create("div");
    emailTab.classList.add("contact");

    const chatIcon = new Image();
    chatIcon.src = Chat;

    const emailContents = $create("div");
    emailContents.classList.add("contents");

    const h3 = $create("h3");
    h3.textContent = "Customer Support";

    const p1 = $create("p");
    p1.textContent =
      "Send us an email with your feedbacks or any questions that you have.";

    const btn = $create("button");
    btn.textContent = "Contact Us";

    const phoneTab = $create("div");
    phoneTab.classList.add("contact");

    const callIcon = new Image();
    callIcon.src = Phone;

    const phoneContents = $create("div");
    phoneContents.classList.add("contents");

    const h3a = $create("h3");
    h3a.textContent = "Talk to us";

    const p2 = $create("p");
    p2.textContent = "Call us to get faster assistance.";

    const p3 = $create("p");
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

  function menuComponent() {
    clearTab();
    body.classList.add("menu");

    const menuTab = $create("div");
    menuTab.classList.add("menu-tab");

    const coffeeTable = $create("table");
    const saladTable = $create("table");

    generateTD("Coffee", "Coffee", "Price", coffeeTable);
    generateTD("Salad", "Salad", "Price", saladTable);

    menuTab.appendChild(coffeeTable);
    menuTab.appendChild(saladTable);

    return menuTab;
  }

  // generate test items
  function generateTD(text1, text2, text3, table) {
    const tr1 = $create("tr");
    const th = $create("th");
    th.setAttribute("colspan", 2);
    th.textContent = text1;
    tr1.appendChild(th);
    table.appendChild(tr1);

    for (let i = 1; i <= 4; i++) {
      const tr = $create("tr");
      const name = $create("td");
      name.textContent = `${text2} ${i}`;

      const price = $create("td");
      price.textContent = `${text3} ${i}`;

      tr.appendChild(name);
      tr.appendChild(price);

      table.appendChild(tr);

      // only add the HR when i < 4
      // means HR will not be added after the last item
      if (i < 4) {
        const trForHrTag = $create("tr");
        const tdForHrTag = $create("td");
        tdForHrTag.setAttribute("colspan", 2);
        const hr = $create("hr");

        tdForHrTag.appendChild(hr);
        trForHrTag.appendChild(tdForHrTag);

        table.appendChild(trForHrTag);
      }
    }
  }

  function initializeHeadFoot() {
    body.insertBefore(navComponent(), content);
    body.appendChild(footerComponent());
  }

  // initially set the home page as default
  function setHomeAsDefault() {
    content.appendChild(homeTabComponent());
  }

  function attachEvent(elem) {
    if (elem.textContent === "Home") {
      elem.addEventListener("click", function () {
        content.appendChild(homeTabComponent());
      });
    } else if (elem.textContent === "Menu") {
      elem.addEventListener("click", function () {
        content.appendChild(menuComponent());
      });
    } else {
      elem.addEventListener("click", function () {
        content.appendChild(contactComponent());
      });
    }
  }

  function clearTab() {
    content.innerHTML = "";
  }

  return {
    initializeHeadFoot,
    setHomeAsDefault,
  };
})();

const pageLoader = (() => {
  // default page to load the header and footer
  pageComponents.initializeHeadFoot();

  //   initialize home
  pageComponents.setHomeAsDefault();
})();
