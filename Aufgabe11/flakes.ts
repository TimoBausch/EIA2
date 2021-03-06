namespace Aufgabe11 {
    export class Flakes extends MovingObjects {


        constructor(_x: number, _y: number, _s: number, _color: string) {
            super(_x, _y, _s, _color);

        }

        move(): void {
            this.y += 2;

            if (this.y > 420) {
                this.y = 420;
            }

        }

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x - 6, this.y);
            crc2.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();
        }

    }
}