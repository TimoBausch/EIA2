var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class PointCircle extends Abschlussaufgabe.Objects {
        constructor(_x, _y, _q, _p) {
            super(_x, _y, _q, _p);
            this.color = "red";
        }
        move() {
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fillStyle = "red";
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.PointCircle = PointCircle;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=PointCircle.js.map