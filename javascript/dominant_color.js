const colorThief = new ColorThief();
const = document.querySelector('img');

if (img.complete) {
    colorThief.getColor(img);
} else {
    img.addEventListener('load', function() {
        rgb = colorThief.getColor(img);
        document.body.style.backgroundColor = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
    });
}