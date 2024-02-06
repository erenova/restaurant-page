import { settings } from "..";
import { setImagesSrc } from "./assetManagement";
import { backButtonVisibility } from "./goBack";
import { stopAnimation } from "./home";
import { setText } from "./languageManagement";

const htmlApp = document.querySelector("#app");

export function openContactPage() {
  htmlApp.classList.remove("pb-5");

  htmlApp.innerHTML = `<div class="flex flex-col items-center mt-24 justify-center text-center select-none min-h-[77vh]">
      <div class="flex flex-col items-center gap-6 flex-1">
        <div class="font-semibold text-3xl flex justify-start">${setText(
          "about",
          "contact"
        )}: <span><a href="tel:02125193875"
                    class="text-blue-500 underline text-2xl ml-2">(0212) 519 38 75</a>
            </span></div>
             <div class="font-semibold text-3xl flex justify-start">Instagram: <span><a href="https://www.instagram.com/donercihaciosmaninyeri/"
                    class="text-blue-500 underline text-2xl ml-2">donercihaciosmaninyeri</a>
            </span></div>
        <div class="font-semibold text-3xl flex justify-start">${setText(
          "about",
          "location"
        )}: <span><a target="_blank"
                    class="text-blue-500 underline text-2xl ml-2"
                    href="https://maps.app.goo.gl/8jW122zquVpoPwzo6">${setText(
                      "about",
                      "maps"
                    )}</a>
        
            </span>
        
        </div>
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12042.30051903458!2d28.9660933!3d41.0126717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9923fca6c85%3A0x6e39a9e25ba73eae!2zTWXFn2h1ciBEw7ZuZXJjaSBIYWPEsSBPc21hbifEsW4gWWVyaQ!5e0!3m2!1sen!2str!4v1699798047762!5m2!1sen!2str"
                style="border:0;" allowfullscreen="" loading="lazy"
                class="w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[500px]"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <!-- Footer -->

      <div class="w-full bg-white  flex justify-center text-black gap-1 items-center"><span
        devInfo>${setText("contact", "devInfo")}</span>
    <a href="https://www.linkedin.com/in/erenova/" target="_blank" class="flex items-center">
        <span>Eren
            Kaya</span><img data-dynamic-src="linkedin.svg" class="h-8 " alt="">
    </a>
</div>
<!-- Footer -->
</div>`;

  settings.currentPage = "contact";
  window.location.hash = "#contact";
  setImagesSrc();
  stopAnimation();
  backButtonVisibility();
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}
