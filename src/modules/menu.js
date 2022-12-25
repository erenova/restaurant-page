import { elCreate } from "./navbar";

function menuFunc() {
  let content = document.getElementById("content");
  let homeMain = elCreate("div");
  homeMain.classList.add("main");
  let cards = elCreate("div");
  cards.classList.add("cards");

  content.appendChild(homeMain);
  homeMain.appendChild(cards);

  function createCard(url, paratext) {
    let newCard = elCreate("div");
    newCard.classList.add("card");
    let cardImg = elCreate("img");
    let cardParag = elCreate("p");
    cardImg.src = url;
    cardParag.innerText = paratext;
    cards.appendChild(newCard);
    newCard.appendChild(cardImg);
    newCard.appendChild(cardParag);
  }
  createCard("others/Delicioussy.png", "Du-hasturger");
  createCard("others/vegan.png", "Veganza");
  createCard("others/strunger.png", "Strunger");
  createCard("others/univurger.png", "Univurger");
  createCard("others/fitburger.png", "Fitburger");
  createCard("others/meaty.png", "meaturger");
}

export { menuFunc };
