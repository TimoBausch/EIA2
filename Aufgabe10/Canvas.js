var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    //    Array mit Fischen
    let fishes = [];
    //    Array mit Bubbles 
    let bubbles = [];
    //    Hintergund
    let imgData;
    //    Anzahl Fische 
    let n = 5;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10.crc2 = canvas.getContext("2d");
        console.log(Aufgabe10.crc2);
        Aufgabe10.crc2.fillStyle = "rgb(245,222,179)";
        Aufgabe10.crc2.fillRect(0, 480, 320, -100);
        Aufgabe10.crc2.fillStyle = "rgb(135,206,235)";
        Aufgabe10.crc2.fillRect(0, 0, 320, 380);
        drawSeagrass(260, 400, 1);
        drawSeagrass(280, 400, 0.8);
        drawSeagrass(0, 480, 4);
        imgData = Aufgabe10.crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < n - 2; i++) {
            let bubble = new Aufgabe10.Bubble();
            bubble.x = Math.random() * (80) + 60;
            bubble.y = 220 - (Math.random() * 260);
            bubble.s = Math.random() * 10;
            bubbles.push(bubble);
        }
        for (let i = 0; i < n; i++) {
            let fish = new Aufgabe10.Fish();
            fish.x = Math.random() * Aufgabe10.crc2.canvas.width;
            fish.y = Math.random() * Aufgabe10.crc2.canvas.height;
            fish.s = Math.random();
            fishes.push(fish);
        }
        animate();
    }
    function animate() {
        window.setTimeout(animate, 10);
        Aufgabe10.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < fishes.length; i++)
            fishes[i].draw();
    }
    function drawSeagrass(_x, _y, _s) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.quadraticCurveTo(_x + (20 * _s), _y - (20 * _s), _x - (0 * _s), _y - (10 * _s));
        Aufgabe10.crc2.quadraticCurveTo(_x + (10 * _s), _y - (40 * _s), _x - (0 * _s), _y - (30 * _s));
        Aufgabe10.crc2.quadraticCurveTo(_x + (10 * _s), _y - (60 * _s), _x - (0 * _s), _y - (50 * _s));
        Aufgabe10.crc2.quadraticCurveTo(_x + (10 * _s), _y - (60 * _s), _x - (0 * _s), _y - (80 * _s));
        Aufgabe10.crc2.quadraticCurveTo(_x + (-10 * _s), _y - (80 * _s), _x - (0 * _s), _y - (60 * _s));
        Aufgabe10.crc2.quadraticCurveTo(_x + (-10 * _s), _y - (70 * _s), _x - (0 * _s), _y - (40 * _s));
        Aufgabe10.crc2.quadraticCurveTo(_x + (-10 * _s), _y - (50 * _s), _x - (0 * _s), _y - (20 * _s));
        Aufgabe10.crc2.quadraticCurveTo(_x + (-10 * _s), _y - (30 * _s), _x - (0 * _s), _y - (0 * _s));
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fillStyle = "green";
        Aufgabe10.crc2.fill();
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Canvas.js.map