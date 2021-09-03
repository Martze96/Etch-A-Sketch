        /*                              VARIABLES                           */
// CONSTANT VARIABLES
const DEFAULT_COLOR = "red";
const DEFAULT_SIZE = 16;
//CONSTANT ELEMENT-VARIABLES
const container = document.querySelector("#container");
const clearButton = document.getElementById("clearButton");
const pixelSlider = document.querySelector("#pixelSizeControl");
const sliderLabel = document.getElementById("sliderLabel");
// GLOBAL VARIABLES
let currentColor = DEFAULT_COLOR;

        /*                           EVENT_LISTENERS                        */

// Update Label onmousemove
pixelSlider.onmousemove = function()  {
    sliderLabel.innerHTML = pixelSlider.value + ' x ' + pixelSlider.value;
}
// Reload Pixels if Slider changed
pixelSlider.oninput = function()  {
    //update Sketchboard (create Pixels)
    //createPixels(pixelSlider.value);
    reloadPixels(pixelSlider.value);
}
//Reload Pixels if clicked on Clear Button
clearButton.addEventListener("click",function() {
    reloadPixels(pixelSlider.value);
});

        /*                              FUNCTIONS                           */

//function to create pixels
function createPixels(size) {

    //build Grid
    container.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
    container.style.gridTemplateRows = 'repeat(' + size + ', 1fr)';
    //place Pixels
    for (let i = 1; i <= size*size; i++) {
        const pixel = document.createElement("div");
        //pixel.addEventListener('mousover',changeSketchColor("red"));
        container.appendChild(pixel);
      }
      changeSketchColor(currentColor);
}

function changeColor(newColor) {
    currentColor = newColor;
}

//function to Add EventListener if mousover with input Color
function changeSketchColor(color){
    
    let pixelList = Array.from(container.childNodes);
    pixelList.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.style.backgroundColor = color;
        });
    });
   
}

function reloadPixels(size) {
    container.innerHTML = "";
    createPixels(size);
}

// On Start
window.onload = () => {
    createPixels(DEFAULT_SIZE);
    changeSketchColor(DEFAULT_COLOR);
}


