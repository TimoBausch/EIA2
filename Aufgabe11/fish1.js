var Aufgabe11;
(function (Aufgabe11) {
    class Fish extends Aufgabe11.MovingObjects {
        constructor(_x, _y, _s, _color) {
            super(_x, _y, _s, _color);
        }
        move() {
            this.x += -2;
            if (this.x < 0) {
                this.x = 380;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.lineTo(this.x, this.y - (40 * this.s));
            Aufgabe11.crc2.lineTo(this.x - (20 * this.s), this.y - (20 * this.s));
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.moveTo(this.x - (20 * this.s), this.y - (20 * this.s));
            Aufgabe11.crc2.quadraticCurveTo(this.x - (60 * this.s), this.y - (60 * this.s), this.x - (60 * this.s), this.y - (20 * this.s));
            Aufgabe11.crc2.quadraticCurveTo(this.x - (60 * this.s), this.y + (20 * this.s), this.x - (20 * this.s), this.y - (20 * this.s));
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Fish = Fish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=fish1.js.map