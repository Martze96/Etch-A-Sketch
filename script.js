const container = document.querySelector("#container");


//creating div pixels 16 x 16
for (let i = 1; i <= 256; i++) {
    pixel = document.createElement("div");
    
    pixel.classList.add("pixel");
    pixel.setAttribute("id",i);
    pixel.style.backgroundColor = "white";
    container.appendChild(pixel);

}
//Add EventListener if mousover then color pixel
let pixelList = Array.from(container.childNodes);

pixelList.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        item.style.backgroundColor = "red";
    });
});

//Add Eventlistener to Clear Button to make all Pixels white again
let clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click",clearPixels);

//function to clear pixels
function clearPixels() {
    let pixels = document.querySelectorAll(".pixel")
    pixels.forEach(e => e.style.backgroundColor = "white");
}

let pixelSlider = document.getElementById("pixelSizeControl");
pixelSlider.oninput = function(){
document.getElementById("sliderLabel").innerHTML = pixelSlider.value + ' x ' + pixelSlider.value;
}
