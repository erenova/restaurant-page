import { elCreate } from "./navbar";

function homeFunc() {
  let content = document.getElementById("content");
  let homeMain = elCreate("div");
  let mainBoard = elCreate("div");
  let parag1 = elCreate("p");
  let parag2 = elCreate("p");
  let parag3 = elCreate("p");
  homeMain.classList.add("main");
  mainBoard.classList.add("main-board");
  parag1.classList.add("welcome");
  parag2.classList.add("welcome");
  parag3.classList.add("welcome");
  content.appendChild(homeMain);
  homeMain.appendChild(mainBoard);
  mainBoard.appendChild(parag1);
  mainBoard.appendChild(parag2);
  mainBoard.appendChild(parag3);
  parag1.innerText = "Welcome To Lassen's Hamburgers";
  parag2.innerText = "You can see our products in the menu section.";
  parag3.innerText = "To learn about us you can check the about section.";
}

export { homeFunc };
