const container = document.querySelector("#container");
const DEFAULT_COLOR = "red";
let DEFAULT_SIZE = 16;
let currentColor = "red";


const clearButton = document.getElementById("clearButton");
let pixelSlider = document.querySelector("#pixelSizeControl");

// On Start
createPixels(DEFAULT_SIZE);
changeSketchColor(DEFAULT_COLOR);

//Update Label if Slider changed
pixelSlider.onmousemove = function()  {
    //update Label
    document.getElementById("sliderLabel").innerHTML = pixelSlider.value + ' x ' + pixelSlider.value;
}
// Reload if slider changed
pixelSlider.oninput = function()  {
        //clearPixels();
        //update Sketchboard (create Pixels)
        //createPixels(pixelSlider.value);
        reloadPixels(pixelSlider.value);
}

//Add Eventlistener to Clear Button to make all Pixels white again

clearButton.addEventListener("click",function() {
    reloadPixels(pixelSlider.value);
});



//function to clear pixels
function clearPixels() {
    container.innerHTML = "";
}

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
    clearPixels();
    createPixels(size);
}



