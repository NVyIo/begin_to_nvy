/* Script to activate the nvySlider  */
/*  Instructions 
Copy the 
    - Slider Component Section
    - Slider Script [/slider.js]
    - Slider CSS [/slider.css]

Paste into your active project
link files to your active HTML


*/

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



export