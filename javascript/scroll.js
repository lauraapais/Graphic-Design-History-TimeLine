var screens = document.getElementById("screens").children;
document.onwheel = scrollPage;

var position = 1;
var delay = true;

function scrollPage(event) {
    if (delay && scrollStatus) {
        if (event.deltaY > 0 && position < screens.length) {
            screens[position].classList.add("focus");
            if (position > 0) {
                if (screens[position].classList.contains("horizontal")) {
                    screens[position - 1].classList.add("left");
                    screens[position - 1].classList.remove("focus");
                } else if (screens[position].classList.contains("vertical")) {
                    screens[position - 1].classList.add("top");
                    screens[position - 1].classList.remove("focus");
                }
            }
            position++;
        } else if (event.deltaY < 0 && position > 1) {
            position--;
            screens[position].classList.remove("focus");
            if (screens[position].classList.contains("horizontal")) {
                screens[position - 1].classList.remove("left");
                screens[position - 1].classList.add("focus");
            } else if (screens[position].classList.contains("vertical")) {
                screens[position - 1].classList.remove("top");
                screens[position - 1].classList.add("focus");
            }
        }

        delay = false;
        setTimeout(function() { delay = true; }, 500);
    }
}