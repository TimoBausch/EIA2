var L09_Canvas;
(function (L09_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        crc2.fillStyle = "rgb(245,222,179)";
        crc2.fillRect(0, 480, 320, -100);
        crc2.fillStyle = "rgb(135,206,235)";
        crc2.fillRect(0, 0, 320, 380);
        drawSeagrass(260, 400, 1);
        drawSeagrass(280, 400, 0.8);
        drawSeagrass(0, 480, 4);
        drawFish(160, 180, 1);
        drawFish(280, 460, 1);
        drawFish(200, 420, 0.5);
        drawBubbles(60, 220, 80, 260, 8);
        drawBubbles(220, 40, 80, 160, 5);
    }
    function drawFish(_x, _y, _s) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - (40 * _s));
        crc2.lineTo(_x - (20 * _s), _y - (20 * _s));
        crc2.closePath();
        crc2.moveTo(_x - (20 * _s), _y - (20 * _s));
        crc2.quadraticCurveTo(_x - (60 * _s), _y - (60 * _s), _x - (60 * _s), _y - (20 * _s));
        crc2.quadraticCurveTo(_x - (60 * _s), _y + (20 * _s), _x - (20 * _s), _y - (20 * _s));
        crc2.stroke();
        crc2.fillStyle = "red";
        crc2.fill();
    }
    function drawSeagrass(_x, _y, _s) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x + (20 * _s), _y - (20 * _s), _x - (0 * _s), _y - (10 * _s));
        crc2.quadraticCurveTo(_x + (10 * _s), _y - (40 * _s), _x - (0 * _s), _y - (30 * _s));
        crc2.quadraticCurveTo(_x + (10 * _s), _y - (60 * _s), _x - (0 * _s), _y - (50 * _s));
        crc2.quadraticCurveTo(_x + (10 * _s), _y - (60 * _s), _x - (0 * _s), _y - (80 * _s));
        crc2.quadraticCurveTo(_x + (-10 * _s), _y - (80 * _s), _x - (0 * _s), _y - (60 * _s));
        crc2.quadraticCurveTo(_x + (-10 * _s), _y - (70 * _s), _x - (0 * _s), _y - (40 * _s));
        crc2.quadraticCurveTo(_x + (-10 * _s), _y - (50 * _s), _x - (0 * _s), _y - (20 * _s));
        crc2.quadraticCurveTo(_x + (-10 * _s), _y - (30 * _s), _x - (0 * _s), _y - (0 * _s));
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.fill();
    }
    function drawBubbles(_x, _y, _w, _h, _a) {
        for (let i = 0; i < _a; i++) {
            let z = Math.random() * _w;
            let q = Math.random() * _h;
            let scale = Math.random() * 10;
            crc2.beginPath();
            crc2.arc(_x + z, _y + q, scale, 0, 2 * Math.PI);
            crc2.stroke();
            /*var gradient = crc2.createRadialGradient(100, 100, 50, 100, 100, 100);
            gradient.addColorStop(0, 'white');
            gradient.addColorStop(1, 'green');
            crc2.fillStyle = gradient;*/
            crc2.fillStyle = "blue";
            crc2.fill();
            console.log("Bubble");
        }
    }
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=Canvas.js.map