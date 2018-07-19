namespace Abschlussaufgabe {
    export class Circle extends Objects {

        constructor(_x: number, _y: number, _q: number, _p: number) {
            super(_x, _y, _q, _p);
        }

        move(): void {

            this.x += (Math.random() * -10);
            this.y += (Math.random() * -10);

            if (this.y < 0) {
                this.y = 800;
            }
            if (this.x < 0) {
                this.x = 1500;
            }
        }

        draw(): void {
            let a: number = Math.abs(this.q - this.x)
            let b: number = Math.abs(this.p - this.y)
            let c: number = Math.sqrt((a * a) + (b * b));

            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            crc2.stroke();


            crc2.moveTo(this.q, this.p);
            crc2.arc(this.q, this.p, 3, 0, 2 * Math.PI);
            crc2.stroke();


            crc2.beginPath();
            crc2.arc(this.x, this.y, c, 0, 2 * Math.PI);

            crc2.stroke();
        }
    }
}