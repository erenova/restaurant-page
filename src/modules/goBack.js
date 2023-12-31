import { settings } from "..";
import { setText } from "./languageManagement";
import { openMenuPage } from "./menu";

document
  .querySelector("#go-back-button")
  .addEventListener("click", openMenuPage);

export function backButtonVisibility() {
  if (
    settings.currentPage === "doner" ||
    settings.currentPage === "beverages"
  ) {
    document.querySelector("#go-back-button").classList.remove("invisible");
  } else {
    document.querySelector("#go-back-button").classList.add("invisible");
  }
}
