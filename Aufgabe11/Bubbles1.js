var Aufgabe11;
(function (Aufgabe11) {
    class Bubble extends Aufgabe11.MovingObjects {
        constructor(_x, _y, _s, _color) {
            super(_x, _y, _s, _color);
        }
        move() {
            this.y += -2;
            if (this.y < 0) {
                this.y = 450;
            }
        }
        draw() {
            console.log("BUBBLE");
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Bubble = Bubble;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Bubbles1.js.map