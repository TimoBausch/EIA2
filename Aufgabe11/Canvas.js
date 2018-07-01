var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    //    Hintergund
    let imgData;
    //    Anzahl Fische 
    let n = 5;
    //    Array mit Objekten
    let objects = [];
    function init(_event) {
        console.log("BITCH");
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        console.log(Aufgabe11.crc2);
        Aufgabe11.crc2.fillStyle = "rgb(245,222,179)";
        Aufgabe11.crc2.fillRect(0, 480, 320, -100);
        Aufgabe11.crc2.fillStyle = "rgb(135,206,235)";
        Aufgabe11.crc2.fillRect(0, 0, 320, 380);
        drawSeagrass(260, 400, 1);
        drawSeagrass(280, 400, 0.8);
        drawSeagrass(0, 480, 4);
        imgData = Aufgabe11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        canvas.addEventListener("click", insertNewObject);
        for (let i = 0; i < (n * 2) - 2; i++) {
            let bubble = new Aufgabe11.Bubble(Math.random() * (80) + 60, 220 - (Math.random() * 260), Math.random() * 10, "blue");
            objects.push(bubble);
        }
        for (let i = 0; i < n; i++) {
            let fish = new Aufgabe11.Fish(Math.random() * Aufgabe11.crc2.canvas.width, Math.random() * Aufgabe11.crc2.canvas.height, Math.random(), "red");
            objects.push(fish);
        }
        animate();
    }
    function insertNewObject(_event) {
        console.log("new one");
        let x = _event.pageX;
        let y = _event.pageY;
        let flake = new Aufgabe11.Flakes(x, y, 5, "orange");
        objects.push(flake);
    }
    function animate() {
        window.setTimeout(animate, 10);
        Aufgabe11.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].draw();
        }
    }
    function drawSeagrass(_x, _y, _s) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.quadraticCurveTo(_x + (20 * _s), _y - (20 * _s), _x - (0 * _s), _y - (10 * _s));
        Aufgabe11.crc2.quadraticCurveTo(_x + (10 * _s), _y - (40 * _s), _x - (0 * _s), _y - (30 * _s));
        Aufgabe11.crc2.quadraticCurveTo(_x + (10 * _s), _y - (60 * _s), _x - (0 * _s), _y - (50 * _s));
        Aufgabe11.crc2.quadraticCurveTo(_x + (10 * _s), _y - (60 * _s), _x - (0 * _s), _y - (80 * _s));
        Aufgabe11.crc2.quadraticCurveTo(_x + (-10 * _s), _y - (80 * _s), _x - (0 * _s), _y - (60 * _s));
        Aufgabe11.crc2.quadraticCurveTo(_x + (-10 * _s), _y - (70 * _s), _x - (0 * _s), _y - (40 * _s));
        Aufgabe11.crc2.quadraticCurveTo(_x + (-10 * _s), _y - (50 * _s), _x - (0 * _s), _y - (20 * _s));
        Aufgabe11.crc2.quadraticCurveTo(_x + (-10 * _s), _y - (30 * _s), _x - (0 * _s), _y - (0 * _s));
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.stroke();
        Aufgabe11.crc2.fillStyle = "green";
        Aufgabe11.crc2.fill();
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Canvas.js.map