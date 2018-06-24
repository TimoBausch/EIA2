var Aufgabe10;
(function (Aufgabe10) {
    class Bubble {
        move() {
            this.y += -2;
            if (this.y < 0) {
                this.y = 450;
            }
        }
        draw() {
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fillStyle = "blue";
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.Bubble = Bubble;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Bubbles.js.map