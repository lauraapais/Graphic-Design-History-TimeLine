var element = document.getElementById('suico_1');
var element_2 = document.getElementById('suico_2');
var element_3 = document.getElementById('suico_3');
var element_4 = document.getElementById('suico_4');
var element_5 = document.getElementById('suico_5');
var element_6 = document.getElementById('suico_6');

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

var x = winWidth/7*2;
var y = winHeight/2*0;

var x_2 = winWidth/7*2;
var y_2 = winHeight/2*1;

var x_3 = winWidth/7*3;
var y_3 = winHeight/2*0;

var x_4 = winWidth/7*3;
var y_4 = winHeight/2*1;

var x_5 = winWidth/7*4;
var y_5 = winHeight/2*0;

var x_6 = winWidth/7*4;
var y_6 = winHeight/2*1;



interact(element)
    .draggable({
        modifiers: [
            interact.modifiers.snap({
                targets: [
                    interact.snappers.grid({ x: winWidth/7, y: winHeight/2 })
                ],
                range: Infinity,
                relativePoints: [ { x: 0, y: 0 } ]
            }),
            interact.modifiers.restrict({
                restriction: element.parentNode,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
                endOnly: true
            })
        ],
        inertia: true
    })
    .on('dragmove', function (event) {
        x += event.dx
        y += event.dy
        var column = 1+Math.round(x*7/winWidth);
        var row = 1+Math.round(y*2/winHeight);
        event.target.style.gridRow = row+"/"+row;
        event.target.style.gridColumn = column+"/"+(column+1);
    })

interact(element_2)
    .draggable({
        modifiers: [
            interact.modifiers.snap({
                targets: [
                    interact.snappers.grid({ x: winWidth/7, y: winHeight/2 })
                ],
                range: Infinity,
                relativePoints: [ { x: 0, y: 0 } ]
            }),
            interact.modifiers.restrict({
                restriction: element.parentNode,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
                endOnly: true
            })
        ],
        inertia: true
    })
    .on('dragmove', function (event) {
        x_2 += event.dx
        y_2 += event.dy
        var column = 1+Math.round(x_2*7/winWidth);
        var row = 1+Math.round(y_2*2/winHeight);
        event.target.style.gridRow = row+"/"+row;
        event.target.style.gridColumn = column+"/"+(column+1);
    })

interact(element_3)
    .draggable({
        modifiers: [
            interact.modifiers.snap({
                targets: [
                    interact.snappers.grid({ x: winWidth/7, y: winHeight/2 })
                ],
                range: Infinity,
                relativePoints: [ { x: 0, y: 0 } ]
            }),
            interact.modifiers.restrict({
                restriction: element.parentNode,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
                endOnly: true
            })
        ],
        inertia: true
    })
    .on('dragmove', function (event) {
        x_3 += event.dx
        y_3 += event.dy
        var column = 1+Math.round(x_3*7/winWidth);
        var row = 1+Math.round(y_3*2/winHeight);
        event.target.style.gridRow = row+"/"+row;
        event.target.style.gridColumn = column+"/"+(column+1);
    })

interact(element_4)
    .draggable({
        modifiers: [
            interact.modifiers.snap({
                targets: [
                    interact.snappers.grid({ x: winWidth/7, y: winHeight/2 })
                ],
                range: Infinity,
                relativePoints: [ { x: 0, y: 0 } ]
            }),
            interact.modifiers.restrict({
                restriction: element.parentNode,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
                endOnly: true
            })
        ],
        inertia: true
    })
    .on('dragmove', function (event) {
        x_4 += event.dx
        y_4 += event.dy
        var column = 1+Math.round(x_4*7/winWidth);
        var row = 1+Math.round(y_4*2/winHeight);
        event.target.style.gridRow = row+"/"+row;
        event.target.style.gridColumn = column+"/"+(column+1);
    })

interact(element_5)
    .draggable({
        modifiers: [
            interact.modifiers.snap({
                targets: [
                    interact.snappers.grid({ x: winWidth/7, y: winHeight/2 })
                ],
                range: Infinity,
                relativePoints: [ { x: 0, y: 0 } ]
            }),
            interact.modifiers.restrict({
                restriction: element.parentNode,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
                endOnly: true
            })
        ],
        inertia: true
    })
    .on('dragmove', function (event) {
        x_5 += event.dx
        y_5 += event.dy
        var column = 1+Math.round(x_5*7/winWidth);
        var row = 1+Math.round(y_5*2/winHeight);
        event.target.style.gridRow = row+"/"+row;
        event.target.style.gridColumn = column+"/"+(column+1);
    })

interact(element_6)
    .draggable({
        modifiers: [
            interact.modifiers.snap({
                targets: [
                    interact.snappers.grid({ x: winWidth/7, y: winHeight/2 })
                ],
                range: Infinity,
                relativePoints: [ { x: 0, y: 0 } ]
            }),
            interact.modifiers.restrict({
                restriction: element.parentNode,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
                endOnly: true
            })
        ],
        inertia: true
    })
    .on('dragmove', function (event) {
        x_6 += event.dx
        y_6 += event.dy
        var column = 1+Math.round(x_6*7/winWidth);
        var row = 1+Math.round(y_6*2/winHeight);
        event.target.style.gridRow = row+"/"+row;
        event.target.style.gridColumn = column+"/"+(column+1);
    })

