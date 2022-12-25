import { elCreate } from "./navbar";

export function aboutFunc() {
  let content = document.getElementById("content");
  let homeMain = elCreate("div");
  let mainBoard = elCreate("div");
  let aboutParag = elCreate("p");
  homeMain.classList.add("main");
  mainBoard.classList.add("main-board");
  content.appendChild(homeMain);
  homeMain.appendChild(mainBoard);
  mainBoard.appendChild(aboutParag);
  aboutParag.classList.add("about-text");
  aboutParag.innerText = `In the summer of 1891, a young chef named Louis Lassen had a vision for a new kind of meal that would satisfy the hunger of even the most discerning palate. Working tirelessly in his small kitchen in the city of Hamburg, he experimented with different ingredients and cooking techniques until he finally hit upon the perfect combination: a juicy patty of ground beef nestled between two soft buns, topped with a variety of fresh and flavorful condiments. And so, the hamburger was born. Word of Louis' delicious creation spread quickly, and soon his tiny kitchen was overrun with hungry customers clamoring for a taste. Determined to meet the demand, Louis opened a small stand on the busy streets of Hamburg, where he could serve his burgers to the masses. As the years passed, the humble stand grew into a thriving restaurant, with locations all over the city. And though Louis himself has long since passed on, his legacy lives on in every juicy bite of a Lassen's Hamburgers burger. Today, we are proud to continue his tradition of serving up the best burgers in the city, using only the freshest and most flavorful ingredients. We invite you to come and experience the rich history and flavor of Lassen's Hamburgers for yourself. Our doors are always open, and we can't wait to serve you the burger of your dreams!`;
}
