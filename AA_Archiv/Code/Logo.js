var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Logo extends Abschlussaufgabe.Objects {
        constructor(_x, _y, _q, _p) {
            super(_x, _y, _q, _p);
        }
        move() {
        }
        draw() {
            let a = this.x;
            let b = this.y;
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.rect(a, b, 40, 10);
            Abschlussaufgabe.crc2.rect(a, b, 10, 30);
            Abschlussaufgabe.crc2.rect(a, b + 20, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 30, b + 20, 10, 40);
            Abschlussaufgabe.crc2.rect(a, b + 50, 40, 10);
            Abschlussaufgabe.crc2.rect(a, b + 40, 10, 20);
            Abschlussaufgabe.crc2.rect(a + 60, b, 10, 60);
            Abschlussaufgabe.crc2.rect(a + 90, b, 10, 60);
            Abschlussaufgabe.crc2.rect(a + 90, b, 50, 10);
            Abschlussaufgabe.crc2.rect(a + 130, b, 10, 60);
            Abschlussaufgabe.crc2.rect(a + 110, b, 10, 30);
            Abschlussaufgabe.crc2.rect(a + 160, b, 10, 60);
            Abschlussaufgabe.crc2.rect(a + 160, b, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 160, b + 20, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 190, b, 10, 30);
            Abschlussaufgabe.crc2.rect(a + 210, b, 10, 60);
            Abschlussaufgabe.crc2.rect(a + 210, b + 50, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 260, b, 10, 60);
            Abschlussaufgabe.crc2.rect(a + 260, b, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 260, b + 20, 30, 10);
            Abschlussaufgabe.crc2.rect(a + 260, b + 50, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 380, b, 10, 60);
            Abschlussaufgabe.crc2.rect(a + 380, b, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 410, b, 10, 20);
            Abschlussaufgabe.crc2.rect(a + 380, b + 50, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 400, b + 30, 20, 10);
            Abschlussaufgabe.crc2.rect(a + 410, b + 30, 10, 30);
            Abschlussaufgabe.crc2.rect(a + 440, b, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 440, b + 20, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 440, b, 10, 60);
            Abschlussaufgabe.crc2.rect(a + 470, b, 10, 30);
            Abschlussaufgabe.crc2.rect(a + 460, b + 20, 10, 40);
            Abschlussaufgabe.crc2.rect(a + 500, b, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 500, b, 10, 60);
            Abschlussaufgabe.crc2.rect(a + 530, b, 10, 60);
            Abschlussaufgabe.crc2.rect(a + 500, b + 20, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 560, b, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 560, b, 10, 60);
            Abschlussaufgabe.crc2.rect(a + 560, b + 20, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 590, b, 10, 30);
            Abschlussaufgabe.crc2.rect(a + 610, b, 10, 60);
            Abschlussaufgabe.crc2.rect(a + 640, b, 10, 60);
            Abschlussaufgabe.crc2.rect(a + 610, b + 20, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 670, b, 10, 60);
            Abschlussaufgabe.crc2.rect(a + 700, b, 10, 60);
            Abschlussaufgabe.crc2.rect(a + 700, b + 50, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 700, b, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 750, b, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 750, b, 10, 30);
            Abschlussaufgabe.crc2.rect(a + 750, b + 20, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 780, b + 20, 10, 40);
            Abschlussaufgabe.crc2.rect(a + 750, b + 50, 40, 10);
            Abschlussaufgabe.crc2.rect(a + 750, b + 40, 10, 20);
            Abschlussaufgabe.crc2.fillStyle = "lightgrey";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.stroke();
        }
    }
    Abschlussaufgabe.Logo = Logo;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Logo.js.map