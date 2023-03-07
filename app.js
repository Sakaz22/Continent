document.documentElement.addEventListener("click", 
function display(){
    let yOffset = document.getElementById("pageY");
    let xOffset = document.getElementById("pageX");
    yOffset.innerHTML = event.pageY;
    xOffset.innerHTML = event.pageX;
}
)