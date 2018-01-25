//Begin to nvy
//ustom scripts go here


const nvy = console.log("This project is just beginning to be nvy'd. Consult the Readme and project instructions for the steps to make fulfill the nvy.")


nvy;

/*/ Slider Script /*/

let active = document.querySelector("#activeImg");
let imgs = document.querySelectorAll(".sliderImg");
let opacity = 0.6;

// Set first img opacity  `
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  // Reset the opacity
  imgs.forEach(img => (img.style.opacity = 1)); 

  // Change current image to src of clicked image
  active.src = e.target.src;

  // Add fade in class
 active.classList.add("fade-in");

  // Remove fade-in class after .5 seconds
  setTimeout(() => active.classList.remove("fade-in"), 1500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}
