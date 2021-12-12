var images = Array();
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
console.log(winWidth + "," + winHeight)

var distance = Math.hypot(winWidth, winHeight);
var angle = Math.atan2(winHeight, winWidth);

window.onload = function () {
    loadBlock = false;
    awakeLoad();
};

function awakeLoad() {
    for (var i = 1; i < screens.length; i++) {
        images.push(Array.from(screens[i].getElementsByClassName("target")));
        /*--------------------------------------------------------------------------------------------------------------------------------------------click no ecra*/
        /*------------------------------------------------------------------------------------------------------------------------print and german*/
        images[i - 1].type = screens[i].getAttribute("type");
        if (screens[i].getAttribute("type") == "printing" || screens[i].getAttribute("type") == "german_book" || screens[i].getAttribute("type") == "noveau") {
            var tmpimg = screens[i].getElementsByClassName("target");

            screens[i].count = screens[i].children.length - 1;
            screens[i].addEventListener("click", printing, event);
            printing(null, screens[i]);
        }
        /*------------------------------------------------------------------------------------------------------------------------photo*/
        else if (screens[i].getAttribute("type") == "type_mec") {
            screens[i].count = screens[i].children.length - 1;
            screens[i].addEventListener("click", type, event);
            type(null, screens[i]);
        }
        /*------------------------------------------------------------------------------------------------------------------------photo*/
        else if (screens[i].getAttribute("type") == "photo" || screens[i].getAttribute("type") == "photo_modern") {
            screens[i].count = screens[i].children.length - 1;
            screens[i].addEventListener("click", photo, event, null, screens[i].getAttribute("type"));
            photo(null, screens[i], screens[i].getAttribute("type"));
        }
        /*------------------------------------------------------------------------------------------------------------------------cubism*/
        else if (screens[i].getAttribute("type") == "cubism") {
            screens[i].addEventListener("click", function () {
                var elements = this.getElementsByClassName("target");
                for (var f = 0; f < elements.length; f++) {
                    cubism_click(elements[f]);
                }
            });
        }
        /*------------------------------------------------------------------------------------------------------------------------futurism*/
        else if (screens[i].getAttribute("type") == "futurism") {
            screens[i].addEventListener("click", function () {
                var elements = this.getElementsByClassName("target");
                for (var f = 0; f < elements.length; f++) {
                    futurism(elements[f]);
                }
            });
        }
        /*------------------------------------------------------------------------------------------------------------------------digital*/
        else if (screens[i].getAttribute("type") == "digital") {
            screens[i].printer=document.getElementById("printer");
            screens[i].imagens_d = screens[i].getElementsByClassName("target");
            screens[i].addEventListener("click", function () {
                this.top_pos=0;
                this.eventInt=setInterval(digital_2, 300, this);
                for (var f = 0; f < this.imagens_d.length; f++) {
                    digital(this.imagens_d[f]);
                }
            });
        }
        /*------------------------------------------------------------------------------------------------------------------------punk*/
        else if (screens[i].getAttribute("type") == "punk") {
            screens[i].addEventListener("click", function () {
                var elements = this.getElementsByClassName("target");
                for (var f = 0; f < elements.length; f++) {
                    punk(elements[f]);
                }
            });
        }
        /*------------------------------------------------------------------------------------------------------------------------glasgow*/
        else if (screens[i].getAttribute("type") == "glasgow") {
            screens[i].count = screens[i].children.length - 1;
            screens[i].addEventListener("click", function (e) {
                if (this.count > 0) {
                    this.count--;

                    var obj = this.children[this.count];
                    var randomHeight = 75;
                    obj.style.height = randomHeight + "%";
                    obj.style.width = "auto";
                    obj.style.display = "block";

                    var mouseX = e.pageX - obj.clientWidth / 2;
                    var mouseY = winHeight / 2 - obj.clientHeight / 2;


                    obj.style.transform = "translate(" + mouseX + "px, " + mouseY + "px)";
                    obj.setAttribute("data-x", mouseX);
                    obj.setAttribute("data-y", mouseY);

                    var father = obj.parentElement;
                    var total = father.getAttribute("number");
                    total++;
                    father.setAttribute("number", total);

                    obj.style.zIndex = total;
                }
            });
            /*start*/
            screens[i].count--;

            var obj = screens[i].children[screens[i].count];
            var randomHeight = 75;
            obj.style.height = randomHeight + "%";
            obj.style.width = "auto";
            obj.style.display = "block";

            var mouseX = winWidth / 2 - obj.clientWidth / 2;
            var mouseY = winHeight / 2 - obj.clientHeight / 2;


            obj.style.transform = "translate(" + mouseX + "px, " + mouseY + "px)";
            obj.setAttribute("data-x", mouseX);
            obj.setAttribute("data-y", mouseY);

            var father = obj.parentElement;
            var total = father.getAttribute("number");
            total++;
            father.setAttribute("number", total);

            obj.style.zIndex = total;
            /*end*/
        }
        /*------------------------------------------------------------------------------------------------------------------------type_gen*/
        else if (screens[i].getAttribute("type") == "type_gen") {
            screens[i].addEventListener("click", function () {
                var elements = this.getElementsByClassName("target");
                for (var f = 0; f < elements.length; f++) {
                    typegen(elements[f]);
                }
            });
        }
        /*------------------------------------------------------------------------------------------------------------------------stijl*/
        else if (screens[i].getAttribute("type") == "stijl") {
            screens[i].addEventListener("click", function () {
                var elements = this.getElementsByClassName("target");
                for (var f = 0; f < elements.length; f++) {
                    stijl(elements[f]);
                }
            });
        }
        /*------------------------------------------------------------------------------------------------------------------------const*/
        else if (screens[i].getAttribute("type") == "const") {
            screens[i].addEventListener("click", function () {
                var elements = this.getElementsByClassName("target");
                for (var f = 0; f < elements.length; f++) {
                    conste(elements[f]);

                }
            });
        }

    }

    for (var i = 0; i < images.length; i++) {
        /*cave*/
        if (images[i].type == "cave_paintings") {
            images[i] = images[i].sort(() => Math.random() - 0.5);

            for (var j = 0; j < images[i].length; j++) {
                var randomX = getRandomNumber(20, winWidth - 20);
                var randomY = getRandomNumber(20, winHeight - 20);
                var randomWidth = getRandomNumber(20, 30);

                images[i][j].setAttribute("style", "transform: translate(" + randomX + "px," + randomY + "px); z-index:" + j + ";");
                images[i][j].setAttribute("data-x", randomX);
                images[i][j].setAttribute("data-y", randomY);
                images[i][j].style.width = randomWidth + "%";

                images[i][j].addEventListener("click", function () {
                    var father = this.parentElement;
                    var total = father.getAttribute("number");
                    total++;
                    father.setAttribute("number", total);

                    this.style.zIndex = total;
                });
            }

            if (images[i][0] != null) {
                images[i][0].parentElement.setAttribute("number", images[i].length);
            }
        }
        /*------------------------------------------------------------------------------------------------------------------------asian*/
        else if (images[i].type == "asian" || images[i].type == "posters" || images[i].type == "ny") {
            images[i] = images[i].sort(() => Math.random() - 0.5);

            for (var j = 0; j < images[i].length; j++) {

                if (images[i].type == "asian") {
                    var randomWidth = getRandomNumber(40, 40);
                    images[i][j].style.width = randomWidth + "%";
                } else if (images[i].type == "posters") {
                    var randomWidth = getRandomNumber(25, 25);
                    images[i][j].style.width = randomWidth + "%";
                } else if (images[i].type == "ny") {
                    var randomWidth = getRandomNumber(25, 25);
                    images[i][j].style.width = randomWidth + "%";
                }


                var imagem = images[i][j];
                asian(imagem);

                images[i][j].addEventListener("click", function () {
                    var father = this.parentElement;
                    var total = father.getAttribute("number");
                    total++;
                    father.setAttribute("number", total);

                    this.style.zIndex = total;
                });
            }

            if (images[i][0] != null)
                images[i][0].parentElement.setAttribute("number", images[i].length);
        }
        /*------------------------------------------------------------------------------------------------------------------------futurism*/
        else if (images[i].type == "futurism" || images[i].type == "cubism") {
            images[i] = images[i].sort(() => Math.random() - 0.5);
            for (var j = 0; j < images[i].length; j++) {


                var imagem = images[i][j];
                if (images[i].type == "futurism") {
                    var randomWidth = getRandomNumber(20, 40);
                    images[i][j].style.width = randomWidth + "%";
                    futurism(imagem);
                } else if (images[i].type == "cubism") {
                    var randomWidth = getRandomNumber(20, 20);
                    images[i][j].style.width = randomWidth + "%";
                    cubism(imagem);
                }

                imagem.addEventListener("click", function () {
                    var father = this.parentElement;
                    var total = father.getAttribute("number");
                    total++;
                    father.setAttribute("number", total);

                    this.style.zIndex = total;
                });
            }

            if (images[i][0] != null) {
                images[i][0].parentElement.setAttribute("number", images[i].length);
            }
        }
        /*------------------------------------------------------------------------------------------------------------------------dadaism*/
        else if (images[i].type == "dadaism") {
            images[i] = images[i].sort(() => Math.random() - 0.5);

            for (var j = 0; j < images[i].length; j++) {
                var randomWidth = getRandomNumber(10, 30);
                images[i][j].style.width = randomWidth + "%";


                var imagem = images[i][j];

                dadaism(imagem);

                imagem.addEventListener("click", function () {
                    var father = this.parentElement;
                    var total = father.getAttribute("number");
                    total++;
                    father.setAttribute("number", total);

                    this.style.zIndex = total;
                });
            }

            if (images[i][0] != null)
                images[i][0].parentElement.setAttribute("number", images[i].length);
        }
        /*------------------------------------------------------------------------------------------------------------------------new wave*/
        else if (images[i].type == "wave") {
            images[i] = images[i].sort(() => Math.random() - 0.5);

            for (var j = 0; j < images[i].length; j++) {
                var randomWidth = getRandomNumber(20, 40);
                images[i][j].style.width = randomWidth + "%";


                var imagem = images[i][j];

                wave(imagem);

                imagem.addEventListener("click", function () {
                    var father = this.parentElement;
                    var total = father.getAttribute("number");
                    total++;
                    father.setAttribute("number", total);

                    this.style.zIndex = total;
                });
            }

            if (images[i][0] != null)
                images[i][0].parentElement.setAttribute("number", images[i].length);
        }
        /*------------------------------------------------------------------------------------------------------------------------digital*/
        else if (images[i].type == "digital") {
            images[i] = images[i].sort(() => Math.random() - 0.5);

            for (var j = 0; j < images[i].length; j++) {
                var randomWidth = getRandomNumber(20, 40);
                images[i][j].style.width = randomWidth + "%";


                var imagem = images[i][j];

                digital(imagem);
            }

            if (images[i][0] != null)
                images[i][0].parentElement.setAttribute("number", images[i].length);
        }
        /*------------------------------------------------------------------------------------------------------------------------punk*/
        else if (images[i].type == "punk") {
            images[i] = images[i].sort(() => Math.random() - 0.5);

            for (var j = 0; j < images[i].length; j++) {
                var randomWidth = getRandomNumber(20, 40);
                images[i][j].style.width = randomWidth + "%";


                var imagem = images[i][j];

                punk(imagem);

                imagem.addEventListener("click", function () {
                    var father = this.parentElement;
                    var total = father.getAttribute("number");
                    total++;
                    father.setAttribute("number", total);

                    this.style.zIndex = total;
                });
            }

            if (images[i][0] != null)
                images[i][0].parentElement.setAttribute("number", images[i].length);
        }
        /*------------------------------------------------------------------------------------------------------------------------glasgow*/
        else if (images[i].type == "glasgow") {
            images[i] = images[i].sort(() => Math.random() - 0.5);

            for (var j = 0; j < images[i].length; j++) {
                var imagem = images[i][j];

                var randomHeight = getRandomNumber(80, 80);
                images[i][j].style.height = randomHeight + "%";
                images[i][j].style.width = "auto";
                glasgow(imagem);
            }
        }
        /*------------------------------------------------------------------------------------------------------------------------printing*/
        else if (images[i].type == "printing" || images[i].type == "german_book" || images[i].type == "photo" || images[i].type == "noveau" || images[i].type == "type_mec" || images[i].type == "photo_modern") {
            for (var j = 0; j < images[i].length; j++) {
                images[i][j].style.zIndex = j;

                images[i][j].addEventListener("click", function () {
                    var father = this.parentElement;
                    var total = father.getAttribute("number");
                    total++;
                    father.setAttribute("number", total);
                    this.style.zIndex = total;
                });
            }

            if (images[i][0] != null) {
                images[i][0].parentElement.setAttribute("number", images[i].length);
            }
        }
        /*------------------------------------------------------------------------------------------------------------------------type_gen*/
        else if (images[i].type == "type_gen") {
            images[i] = images[i].sort(() => Math.random() - 0.5);

            for (var j = 0; j < images[i].length; j++) {
                var imagem = images[i][j];
                images[i][j].style.width = "-webkit-fill-available";
                typegen(imagem);
            }
        }
        /*------------------------------------------------------------------------------------------------------------------------stijl*/
        else if (images[i].type == "stijl") {
            images[i] = images[i].sort(() => Math.random() - 0.5);

            for (var j = 0; j < images[i].length; j++) {
                var imagem = images[i][j];
                images[i][j].style.width = "-webkit-fill-available";
                stijl(imagem);
            }
        }
        /*------------------------------------------------------------------------------------------------------------------------const*/
        else if (images[i].type == "const") {
            for (var j = 0; j < images[i].length; j++) {
                conste(images[i][j]);
            }
        }
        /*------------------------------------------------------------------------------------------------------------------------renascimento*/
        else if (images[i].type == "renas") {
            for (var j = 0; j < images[i].length; j++) {
                renas(images[i][j]);

                images[i][j].addEventListener("click", function () {
                    renas(this);
                });
            }
        }
        /*------------------------------------------------------------------------------------------------------------------------psic*/
        else if (images[i].type == "psic") {
            images[i] = images[i].sort(() => Math.random() - 0.5);

            for (var j = 0; j < images[i].length; j++) {

                var randomWidth = 25;
                images[i][j].style.width = randomWidth + "%";


                var imagem = images[i][j];
                psic(imagem);

                imagem.addEventListener("click", function () {
                    var father = this.parentElement;
                    var total = father.getAttribute("number");
                    total++;
                    father.setAttribute("number", total);

                    this.style.zIndex = total;
                });

                imagem.mouseenter = null;

                imagem.addEventListener("mouseenter", function () {
                    this.mouseenter = setInterval(psic_2, 50, this);
                });

                imagem.addEventListener("mouseleave", function () {
                    clearInterval(this.mouseenter);
                    this.style.filter = "none";
                });
            }

            if (images[i][0] != null)
                images[i][0].parentElement.setAttribute("number", images[i].length);
        }
        /*------------------------------------------------------------------------------------------------------------------------psic*/
        else if (images[i].type == "bau") {
            for (var j = 0; j < images[i].length; j++) {
                images[i][j].style.zIndex = j;

                images[i][j].addEventListener("click", function () {
                    var father = this.parentElement;
                    var total = father.getAttribute("number");
                    total++;
                    father.setAttribute("number", total);
                    this.style.zIndex = total;
                });
            }
        }

    }
}

function futurism(imagem) {
    var randomX = getRandomNumber(0, winWidth - imagem.clientWidth);
    var randomY = getRandomNumber(0, winHeight - imagem.clientHeight);
    var rot = getRandomNumber(0, 45);

    imagem.setAttribute("style", "transform: translate(" + randomX + "px," + randomY + "px) rotate(" + rot + "deg);");
    imagem.setAttribute("data-x", randomX);
    imagem.setAttribute("data-y", randomY);

}

function cubism(imagem) {
    var randomX = getRandomNumber(0, winWidth - imagem.clientWidth);
    var randomY = getRandomNumber(0, winHeight - imagem.clientHeight);

    imagem.setAttribute("style", "transform: translate(" + randomX + "px," + randomY + "px);");
    imagem.setAttribute("data-x", randomX);
    imagem.setAttribute("data-y", randomY);
    imagem.setAttribute("data-r", 0);
}

function cubism_click(imagem) {
    var randomX = imagem.getAttribute("data-x");
    var randomY = imagem.getAttribute("data-y");
    var rot = parseInt(imagem.getAttribute("data-r")) + 45;

    imagem.setAttribute("style", "transform: translate(" + randomX + "px," + randomY + "px) rotate(" + rot + "deg);");
    imagem.setAttribute("data-r", rot);

}

function asian(imagem) {
    var randomX = winWidth / 2 - imagem.clientWidth / 2;
    var randomY = winHeight / 2 - imagem.clientHeight / 2;
    imagem.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
    imagem.setAttribute("data-x", randomX);
    imagem.setAttribute("data-y", randomY);
}

function dadaism(imagem) {
    var randomX = getRandomNumber(0, winWidth - imagem.clientWidth);
    var randomY = getRandomNumber(0, winHeight - imagem.clientHeight);

    imagem.setAttribute("style", "transform: translate(" + randomX + "px," + randomY + "px);");
    imagem.setAttribute("data-x", randomX);
    imagem.setAttribute("data-y", randomY);

}

function wave(imagem) {
    var randomX = getRandomNumber(0, winWidth - imagem.clientWidth);
    var randomY = getRandomNumber(0, winHeight - imagem.clientHeight);

    imagem.setAttribute("style", "transform: translate(" + randomX + "px," + randomY + "px);");
    imagem.setAttribute("data-x", randomX);
    imagem.setAttribute("data-y", randomY);

}

function digital(imagem) {
    var randomX = getRandomNumber(0, winWidth - imagem.clientWidth);
    var randomY = getRandomNumber(0, winHeight - imagem.clientHeight);

    imagem.setAttribute("style", "transform: translate(" + randomX + "px," + randomY + "px);");
    imagem.setAttribute("data-x", randomX);
    imagem.setAttribute("data-y", randomY);
}

function digital_2(print) {

    print.top_pos+=10;
    if(print.top_pos>=winHeight){
        clearInterval(print.eventInt);
    }
    else{
        print.printer.style.top=print.top_pos+"px";
    }
}

function punk(imagem) {
    var randomX = getRandomNumber(0, winWidth - imagem.clientWidth);
    var randomY = getRandomNumber(0, winHeight - imagem.clientHeight);

    imagem.setAttribute("style", "transform: translate(" + randomX + "px," + randomY + "px);");
    imagem.setAttribute("data-x", randomX);
    imagem.setAttribute("data-y", randomY);

}

function glasgow(imagem) {
    var mouseX = winWidth / 2 - imagem.clientWidth / 2;
    var mouseY = winHeight / 2 - imagem.clientHeight / 2;


    imagem.style.transform = "translate(" + mouseX + "px, " + mouseY + "px)";
    imagem.setAttribute("data-x", mouseX);
    imagem.setAttribute("data-y", mouseY);

}

function typegen(imagem) {
    var row = Math.floor(getRandomNumber(1, 6));
    imagem.style.gridRow = row + "/" + (parseInt(row) + 4);
    var column = Math.floor(getRandomNumber(1, 8));
    imagem.style.gridColumn = column + "/" + column;
}

function stijl(imagem) {
    var row = Math.floor(getRandomNumber(1, 3));
    imagem.style.gridRow = row + "/" + (parseInt(row));
    var column = Math.floor(getRandomNumber(1, 5));
    imagem.style.gridColumn = column + "/" + column;
}

function printing(e, object) {
    if (object == undefined) {
        if (this.count > 0) {
            this.count--;

            var obj = this.children[this.count];
            var randomWidth = getRandomNumber(17, 20);
            obj.style.display = "block";

            obj.style.width = randomWidth + "%";

            var mouseX = e.pageX - obj.clientWidth / 2;
            var mouseY = e.pageY - obj.clientHeight / 2;
            obj.style.transform = "translate(" + mouseX + "px, " + mouseY + "px)";
            obj.setAttribute("data-x", mouseX);
            obj.setAttribute("data-y", mouseY);

            var father = obj.parentElement;
            var total = father.getAttribute("number");
            total++;
            father.setAttribute("number", total);

            obj.style.zIndex = total;
        }
    } else {
        if (object.count > 0) {
            object.count--;

            var obj = object.children[object.count];
            var randomWidth = getRandomNumber(20, 25);

            obj.style.width = randomWidth + "%";
            obj.style.display = "block";

            setTimeout(function () {
                var mouseX = winWidth / 2 - obj.clientWidth / 2;
                var mouseY = winHeight / 2 - obj.clientHeight / 2;

                obj.style.transform = "translate(" + mouseX + "px, " + mouseY + "px)";
                obj.setAttribute("data-x", mouseX);
                obj.setAttribute("data-y", mouseY);

                var father = obj.parentElement;
                var total = father.getAttribute("number");
                total++;
                father.setAttribute("number", total);

                obj.style.zIndex = total;
            }, 1000, obj);
        }
    }
}

function type(e, object) {
    if (object == undefined) {
        if (this.count > 0) {
            this.count--;

            var obj = this.children[this.count];
            var randomWidth = getRandomNumber(30, 40);
            obj.style.display = "block";
            obj.style.width = randomWidth + "%";

            var mouseX = e.pageX - obj.clientWidth / 2;
            var mouseY = e.pageY - obj.clientHeight / 2;

            obj.style.transform = "translate(" + mouseX + "px, " + mouseY + "px)";
            obj.setAttribute("data-x", mouseX);
            obj.setAttribute("data-y", mouseY);

            var father = obj.parentElement;
            var total = father.getAttribute("number");
            total++;
            father.setAttribute("number", total);

            obj.style.zIndex = total;
        }
    } else {
        if (object.count > 0) {
            object.count--;

            var obj = object.children[object.count];
            var randomWidth = getRandomNumber(30, 40);
            obj.style.display = "block";
            obj.style.width = randomWidth + "%";


            setTimeout(function () {
                var mouseX = winWidth / 2 - obj.clientWidth / 2;
                var mouseY = winHeight / 2 - obj.clientHeight / 2;
                obj.style.transform = "translate(" + mouseX + "px, " + mouseY + "px)";
                obj.setAttribute("data-x", mouseX);
                obj.setAttribute("data-y", mouseY);

                var father = obj.parentElement;
                var total = father.getAttribute("number");
                total++;
                father.setAttribute("number", total);

                obj.style.zIndex = total;
            }, 1000, obj);
        }
    }
}

function photo(e, object, type) {
    if (object == undefined) {
        if (this.count > 0) {
            this.count--;

            var obj = this.children[this.count];

            var father = obj.parentElement;
            var total = father.getAttribute("number");

            if (type == "photo") {
                var randomWidth = getRandomNumber(40, 40);
            } else if (type == "photo_modern") {
                var randomWidth = getRandomNumber(30, 30);
            }

            obj.style.zIndex = total;
            father.setAttribute("number", parseInt(total) + 1);
            obj.style.display = "block";

            obj.style.width = randomWidth + "%";

            var randomX = winWidth / 2 - obj.clientWidth / 2;
            var randomY = winHeight / 2 - obj.clientHeight / 2;
            obj.setAttribute("data-x", randomX);
            obj.setAttribute("data-y", randomY);

            obj.style.transform = "translate(" + randomX + "px, " + randomY + "px)";

            var father = obj.parentElement;
            var total = father.getAttribute("number");
            total++;
            father.setAttribute("number", total);

            obj.style.zIndex = total;
        }
    } else {
        if (object.count > 0) {
            object.count--;

            var obj = object.children[object.count];

            var father = obj.parentElement;
            var total = father.getAttribute("number");

            if (type == "photo") {
                var randomWidth = getRandomNumber(40, 40);
            } else if (type == "photo_modern") {
                var randomWidth = getRandomNumber(30, 30);
            }

            obj.style.zIndex = total;
            father.setAttribute("number", parseInt(total) + 1);
            obj.style.display = "block";

            obj.style.width = randomWidth + "%";
            setTimeout(function () {
                var randomX = winWidth / 2 - obj.clientWidth / 2;
                var randomY = winHeight / 2 - obj.clientHeight / 2;
                obj.setAttribute("data-x", randomX);
                obj.setAttribute("data-y", randomY);
                obj.style.transform = "translate(" + randomX + "px, " + randomY + "px)";

                var father = obj.parentElement;
                var total = father.getAttribute("number");
                total++;
                father.setAttribute("number", total);

                obj.style.zIndex = total;
            }, 1000, obj);
        }
    }
}

function conste(object) {
    var newRandom = distance * Math.random();
    var newX = newRandom * Math.cos(angle);
    var newY = winHeight - newRandom * Math.sin(angle);

    object.style.left = newX + "px";
    object.style.top = newY + "px";
}

function renas(object) {
    var newRandom = Math.round(Math.random());
    var position = Math.random();

    var newWidth = Math.round(25 - ((Math.abs(0.5 - position) * 20) / 0.5)) + "%";
    object.style.width = newWidth;

    var objectWidth = object.clientWidth;
    var objectHeight = object.clientHeight / 2;

    if (newRandom == 0) {
        var x = winWidth / 2;
        var y = objectHeight / 2 + (winHeight - objectHeight) * position;

        object.style.top = y + "px";
        object.style.left = x + "px";
    } else {
        var y = winHeight / 2;
        var x = objectWidth / 2 + (winWidth - objectWidth) * position;

        object.style.top = y + "px";
        object.style.left = x + "px";
    }
}

function psic(object) {
    var randomX = getRandomNumber(winWidth / 2 - object.clientWidth / 2 - 150, winWidth / 2 - object.clientWidth / 2 + 150);
    var randomY = getRandomNumber(winHeight / 2 - object.clientHeight / 2 - 50, winHeight / 2 - object.clientHeight / 2 + 50);
    object.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
    object.setAttribute("data-x", randomX);
    object.setAttribute("data-y", randomY);
}

function psic_2(object){
    var hue = Math.round(getRandomNumber(-90, 90));
    object.style.filter = "hue-rotate("+hue+"deg)";
}


function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}