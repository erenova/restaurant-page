import { settings } from "..";

export function setPadding() {
  const htmlApp = document.querySelector("#app");
  if (settings.currentPage === "contact") {
    htmlApp.classList.remove("pb-5");
  } else {
    if (!htmlApp.classList.contains("pb-5")) {
      htmlApp.classList.add("pb-5");
    }
  }
}
