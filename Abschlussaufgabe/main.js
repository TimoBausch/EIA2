var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    let modeChoosed = false;
    let cleared = true;
    let points = [];
    let objects = [];
    let mode;
    let coordinates = [];
    function init(_event) {
        console.log(modeChoosed);
        let boxes = document.getElementsByTagName("div");
        let canvas = document.getElementsByTagName("canvas")[0];
        let Line = document.getElementsByTagName("div")[0];
        let Circle = document.getElementsByTagName("div")[1];
        let Rect = document.getElementsByTagName("div")[2];
        let retourBox = document.getElementsByTagName("div")[3];
        let clearBox = document.getElementsByTagName("div")[4];
        let animateBox = document.getElementsByTagName("div")[5];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        console.log(Abschlussaufgabe.crc2);
        canvas.addEventListener("click", Pointer);
        canvas.addEventListener("touchstart", function test() {
            window.removeEventListener('touchstart', test, false);
        }, false);
        Line.addEventListener("click", function () { modeChange("Line"); });
        Line.addEventListener("touchstart", function () { modeChange("Line"); });
        Circle.addEventListener("click", function () { modeChange("Circle"); });
        Circle.addEventListener("touchstart", function () { modeChange("Circle"); });
        Rect.addEventListener("click", function () { modeChange("Rect"); });
        Rect.addEventListener("touchstart", function () { modeChange("Rect"); });
        clearBox.addEventListener("click", clear);
        clearBox.addEventListener("touchstart", clear);
        retourBox.addEventListener("click", retour);
        retourBox.addEventListener("touchstart", retour);
        animateBox.addEventListener("click", animate);
        animateBox.addEventListener("touchstart", animate);
        function modeChange(_mode) {
            let choosenBox = document.getElementById(_mode);
            mode = _mode;
            modeChoosed = true;
            console.log(modeChoosed);
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].classList.remove("active");
            }
            choosenBox.classList.add("active");
        }
        function test() {
            Abschlussaufgabe.crc2.fillStyle = "rgb(245,222,179)";
            Abschlussaufgabe.crc2.fillRect(0, 480, 320, -100);
        }
    }
    function Pointer(_event) {
        cleared = true;
        if (modeChoosed) {
            let x = _event.pageX;
            let y = _event.pageY;
            coordinates.push(x);
            coordinates.push(y);
            console.log("point to", x, y);
            let point = new Abschlussaufgabe.PointCircle(x, y, 0, 0);
            points.push(point);
            drawpoints();
            if (points.length > 1) {
                switch (mode) {
                    case "Line": {
                        console.log("Mode: Line");
                        points = [];
                        drawLine();
                        break;
                    }
                    case "Circle": {
                        console.log("Mode: Circle");
                        points = [];
                        drawCircle();
                        break;
                    }
                    case "Rect": {
                        console.log("Mode: Rect");
                        points = [];
                        drawRect();
                        break;
                    }
                    default: {
                        console.log("no choice");
                        break;
                    }
                }
            }
        }
    }
    function drawLine() {
        let line = new Abschlussaufgabe.Line(coordinates[0], coordinates[1], coordinates[2], coordinates[3]);
        objects.push(line);
        console.log("drawLine with coordinates:", coordinates);
        drawObjects();
    }
    function drawCircle() {
        let circle = new Abschlussaufgabe.Circle(coordinates[0], coordinates[1], coordinates[2], coordinates[3]);
        objects.push(circle);
        console.log("draw Circle with coordinates:", coordinates);
        drawObjects();
    }
    function drawRect() {
        let rect = new Abschlussaufgabe.Rect(coordinates[0], coordinates[1], coordinates[2], coordinates[3]);
        objects.push(rect);
        console.log("draw rect with coordinates:", coordinates);
        drawObjects();
    }
    function drawpoints() {
        for (let i = 0; i < points.length; i++) {
            points[i].draw();
        }
    }
    function drawObjects() {
        Abschlussaufgabe.crc2.clearRect(0, 0, 1280, 620);
        drawpoints();
        for (let i = 0; i < objects.length; i++) {
            objects[i].draw();
        }
        coordinates = [];
        //        console.log("cleared coordinates:", coordinates);
    }
    function retour() {
        console.log("undo last draw");
        objects.splice(objects.length - 1, 1);
        Abschlussaufgabe.crc2.clearRect(0, 0, 1280, 620);
        drawObjects();
    }
    function clear() {
        console.log("clear all");
        cleared = false;
        Abschlussaufgabe.crc2.clearRect(0, 0, 1280, 620);
        points = [];
        objects = [];
    }
    function animate() {
        console.log("ANIMATE");
        if (cleared) {
            window.setTimeout(animate, 10);
            for (let i = 0; i < objects.length; i++) {
                objects[i].move();
            }
            drawObjects();
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map