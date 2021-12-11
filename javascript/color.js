var colorThief = new ColorThief();

var obraImg = document.getElementsByClassName("obra_img");

for (var i = 0; i < obraImg.length; i++) {
    var img = obraImg[i].children[0];
    img.ellipse = obraImg[i].children[1];
    if (img.complete) {
        this.ellipseColor;
    } else {
        img.addEventListener('load', ellipseColor);
    }
}

function ellipseColor() {
    var color = colorThief.getColor(this)
    this.ellipse.style.backgroundColor = "rgb(" + color[0] + ", " + color[1] + "," + color[2] + ")";
}