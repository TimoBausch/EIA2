var Aufgabe11;
(function (Aufgabe11) {
    class Flakes extends Aufgabe11.MovingObjects {
        constructor(_x, _y, _s, _color) {
            super(_x, _y, _s, _color);
        }
        move() {
            this.y += 2;
            if (this.y > 420) {
                this.y = 420;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x - 6, this.y);
            Aufgabe11.crc2.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Flakes = Flakes;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=flakes.js.map