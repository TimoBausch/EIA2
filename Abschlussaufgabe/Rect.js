var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Rect extends Abschlussaufgabe.Objects {
        constructor(_x, _y, _q, _p) {
            super(_x, _y, _q, _p);
        }
        move() {
            this.x += (Math.random() * -10);
            this.y += (Math.random() * -10);
            if (this.y < 0) {
                this.y = 800;
            }
            if (this.x < 0) {
                this.x = 1500;
            }
        }
        draw() {
            let a = (this.q - this.x);
            let b = (this.p - this.y);
            console.log("width:", a, "height:", b);
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.rect(this.x, this.y, a, b);
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.moveTo(this.q, this.p);
            Abschlussaufgabe.crc2.arc(this.q, this.p, 3, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.stroke();
        }
    }
    Abschlussaufgabe.Rect = Rect;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Rect.js.map