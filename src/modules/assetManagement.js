const imagesContext = require.context(
  "../assets/",
  false,
  /\.(png|jpe?g|svg)$/
);

const imageSource = imagesContext.keys().reduce((images, path) => {
  // Create a custom key, for instance, you might want to remove './' from the path
  const key = path.replace("./", "");
  // Assign a value to the custom key
  images[key] = imagesContext(path);
  return images;
}, {});

function setImagesSrc() {
  const dynamicImages = document.querySelectorAll(`[data-dynamic-src]`);

  dynamicImages.forEach((item) => {
    item.src = imageSource[item.dataset.dynamicSrc];
  });
}

document.addEventListener("DOMContentLoaded", setImagesSrc);
