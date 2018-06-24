namespace Aufgabe10 {

    export class Bubble {
        x: number;
        y: number;
        s: number;

        move(): void {
            this.y += -2;
            if (this.y < 0) {
                this.y = 450;
            }
        }
        draw(): void {
            crc2.moveTo(this.x, this.y);
            crc2.beginPath();

            crc2.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "blue"
            crc2.fill();
        }


    }
}