        /*                              VARIABLES                           */
// CONSTANT VARIABLES
const DEFAULT_COLOR = "#000000";
const DEFAULT_SIZE = 16;
const DEFAULT_SKETCHMODE = "Color"; //"Color","Rainbow","Erasers"
//CONSTANT ELEMENT-VARIABLES
const container = document.querySelector("#container");
const clearButton = document.getElementById("clearButton");
const colorButton = document.getElementById("colorButton");
const rainbowButton = document.getElementById("rainbowButton");
const eraserButton = document.getElementById("eraserButton");
const pixelSlider = document.querySelector("#pixelSizeControl");
const sliderLabel = document.getElementById("sliderLabel");
const colorPicker = document.getElementById("colorPicker");
// GLOBAL VARIABLES
let currentColor = DEFAULT_COLOR;
let currentSketchMode = DEFAULT_SKETCHMODE;

        /*                           EVENT_LISTENERS                        */

// Update Label onmousemove
pixelSlider.onmousemove = function()  {
    sliderLabel.innerHTML = pixelSlider.value + ' x ' + pixelSlider.value;
}
// Reload Pixels if Slider changed
pixelSlider.oninput = function()  {
    reloadPixels(pixelSlider.value);
}
//Reload Pixels if clicked on Clear Button
clearButton.addEventListener("click",function() {
    reloadPixels(pixelSlider.value);
});
//Colorchange / Colormode if clicked
colorButton.addEventListener("click", function(){
    currentSketchMode = "Color";
    changeSketchColor(colorPicker.value);
})
//Colorchange Rainbow if clicked
rainbowButton.addEventListener("click",function(){
    currentSketchMode = "Rainbow";
    changeSketchColor('rgb('+getRandom255().toString()+','+getRandom255().toString()+','+getRandom255().toString()+')');
});
//Colorchange Eraser if clicked
eraserButton.addEventListener("click",function(){
    currentSketchMode = "Eraser";
    changeSketchColor("white");
});

//Colorchange if new Color picked
colorPicker.onchange = function(){
    currentSketchMode = "Color";
    changeSketchColor(colorPicker.value);
    
}

        /*                              FUNCTIONS                           */

//function to create pixels
function createPixels(size) {

    //build Grid
    container.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
    container.style.gridTemplateRows = 'repeat(' + size + ', 1fr)';
    //place Pixels
    for (let i = 1; i <= size*size; i++) {
        const pixel = document.createElement("div");
        pixel.addEventListener('mousover',changeSketchColor);
        container.appendChild(pixel);
      }
      changeSketchColor(currentColor);
}



//function to Add EventListener if mousover with input Color
function changeSketchColor(color){

    currentColor = color;
    console.log(currentColor);
    let pixelList = Array.from(container.childNodes);
    pixelList.forEach(function(item) {

        item.addEventListener('mouseover', function() {
            if(currentSketchMode == 'Rainbow'){
                item.style.backgroundColor = 'rgb('+getRandom255().toString()+','+getRandom255().toString()+','+getRandom255().toString()+')';
            }
            else {
                if(color==null){
                    currentColor = DEFAULT_COLOR;
                    item.style.backgroundColor = currentColor;
                }
                item.style.backgroundColor = currentColor;
            }
        });
    });
   
}

function reloadPixels(size) {
    container.innerHTML = "";
    createPixels(size);
}

//give randomColornumber (0-255)
function getRandom255(){
    return Math.floor(Math.random() * (256 - 0)) + 0;
}

// On Start
window.onload = () => {
    createPixels(DEFAULT_SIZE);
}


