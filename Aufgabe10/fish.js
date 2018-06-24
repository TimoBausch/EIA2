var Aufgabe10;
(function (Aufgabe10) {
    class Fish {
        move() {
            this.x += -2;
            if (this.x < 0) {
                this.x = 380;
            }
        }
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x, this.y - (40 * this.s));
            Aufgabe10.crc2.lineTo(this.x - (20 * this.s), this.y - (20 * this.s));
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.moveTo(this.x - (20 * this.s), this.y - (20 * this.s));
            Aufgabe10.crc2.quadraticCurveTo(this.x - (60 * this.s), this.y - (60 * this.s), this.x - (60 * this.s), this.y - (20 * this.s));
            Aufgabe10.crc2.quadraticCurveTo(this.x - (60 * this.s), this.y + (20 * this.s), this.x - (20 * this.s), this.y - (20 * this.s));
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fillStyle = "red";
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.Fish = Fish;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=fish.js.map