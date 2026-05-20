const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const imageNames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

const imageAlts = {
  "pic1.jpg": "Closeup of a human eye",
  "pic2.jpg": "Rock that looks like a wave",
  "pic3.jpg": "Purple and white pansies",
  "pic4.jpg": "Section of wall from a pharaoh's tomb",
  "pic5.jpg": "Large moth on a leaf",
};

for (const imageName of imageNames) {
  const newImage = document.createElement("img");
  newImage.setAttribute(
    "src",
    "https://mdn.github.io/shared-assets/images/examples/learn/gallery/" +
      imageName,
  );
  newImage.setAttribute("alt", imageAlts[imageName]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", () => {
    const imageSrc = newImage.getAttribute("src");
    const imageAlt = newImage.getAttribute("alt");
    displayedImage.setAttribute("src", imageSrc);
    displayedImage.setAttribute("alt", imageAlt);
  });
}

btn.addEventListener("click", () => {
  const btnClass = btn.getAttribute("class");

  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
  }
});
