import foodPic from "../img/background.PNG";
import internPic from "../img/chef teaching students.jpg";
import veggies from "../img/fresh vegetables.jpg";

function createSection(
  imgSrc,
  imgAlt,
  sectionContainer,
  sectionTitle,
  sectionPara
) {
  const section = document.createElement("section");
  section.classList.add(sectionContainer);
  section.classList.add('topics');

  const imageHolder = document.createElement("div");
  imageHolder.classList.add("image-holder");
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = imgAlt;
  imageHolder.appendChild(img);

  const text = document.createElement("div");
  text.classList.add("text");
  const h2 = document.createElement("h2");
  h2.textContent = sectionTitle;
  const p = document.createElement("p");
  p.textContent = sectionPara;
  text.appendChild(h2);
  text.appendChild(p);

  section.appendChild(imageHolder);
  section.appendChild(text);

  return section;
}

function createHomeContentDiv() {
  const homeContentDiv = document.createElement("div");
  homeContentDiv.setAttribute("id", "home-contents");

  return homeContentDiv;
}

const intro = {
  container: "introduction",
  imgSrc: foodPic,
  imgAlt: "Images of food in a table",
  sectionTitle: "Who are we?",
  sectionPara: `In 2024, Lexi, Parsley, and Molly opened "LMP Restaurant," a
              farm-to-table restaurant inspired by their shared love of fresh,
              organic ingredients. Combining Lexi's culinary expertise,
              Parsley's knowledge of sustainable farming, and Molly's passion
              for community-driven dining experiences, they created a vibrant
              space that celebrates local produce. Their commitment to
              sustainability and innovation quickly made LMP Restaurant a beloved
              spot in the heart of the city.`,
};

const internship = {
  container: "internship-program",
  imgSrc: internPic,
  imgAlt: "An image of chef teaching students",
  sectionTitle: "Internship Program",
  sectionPara: `At LMP Restaurant, Lexi, Parsley, and Molly are dedicated to
              teaching the next generation of chefs through their internship
              program. Aspiring cooks learn farm-to-table techniques from Lexi,
              while Parsley shares the importance of sustainable sourcing. Molly
              focuses on fostering community through food, giving interns a
              holistic understanding of both cooking and conscious dining.`,
};

const freshIngredients = {
  container: "fresh-ingredients",
  imgSrc: veggies,
  imgAlt: "A man holding fresh vegetables",
  sectionTitle: "Fresh Ingredients",
  sectionPara: `At LMP Restaurant, the focus is on using only the freshest,
              locally sourced ingredients for every dish. Lexi, Parsley, and
              Molly are committed to working with nearby farms to ensure the
              produce is always in-season and at peak quality. This dedication
              to freshness elevates their menu, offering vibrant flavors that
              showcase the best of what the region has to offer.`,
};

export default function createHome() {
  const homeContentDiv = createHomeContentDiv();

  homeContentDiv.appendChild(
    createSection(
      intro.imgSrc,
      intro.imgAlt,
      intro.container,
      intro.sectionTitle,
      intro.sectionPara
    )
  );
  homeContentDiv.appendChild(
    createSection(
      internship.imgSrc,
      internship.imgAlt,
      internship.container,
      internship.sectionTitle,
      internship.sectionPara
    )
  );
  homeContentDiv.appendChild(
    createSection(
      freshIngredients.imgSrc,
      freshIngredients.imgAlt,
      freshIngredients.container,
      freshIngredients.sectionTitle,
      freshIngredients.sectionPara
    )
  );

  return homeContentDiv;
}