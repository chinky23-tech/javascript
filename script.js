const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pasta-variation.jpg") {
    myImage.setAttribute("src", "images/coffeehouse.png");
  } else {
    myImage.setAttribute("src", "images/pasta-variation.jpg");
  }
});