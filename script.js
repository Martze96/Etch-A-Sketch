const container = document.querySelector("#container");


//creating div pixels 16 x 16
for (let i = 1; i <= 256; i++) {
    pixel = document.createElement("div");
    pixel.style.border = "1px solid black";
    
    pixel.classList.add("pixel");
    pixel.setAttribute("id",i);
    container.appendChild(pixel);

}
let pixelList = Array.from(container.childNodes);
console.log(pixelList);
pixelList.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        item.style.backgroundColor = "red";
    });
});
