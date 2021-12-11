var infoButton = document.getElementsByClassName("plus");
var info = document.getElementById("info");
var scrollStatus = true;

for (var i = 0; i < infoButton.length; i++) {
    infoButton[i].addEventListener("click", openDescription, true);
    var minus = infoButton[i].getElementsByClassName("minus")[0];
    minus.addEventListener("click", openDescription);
    minus.father = infoButton[i];
}

function openDescription() {
    if (this.classList.contains("plus")) {
        this.classList.add("open");
        scrollStatus = false;
    } else if (this.classList.contains("minus")) {
        this.father.classList.remove("open");
        scrollStatus = true;
    }
}