namespace Aufgabe10 {

    export class Fish {
        x: number;
        y: number;
        s: number;

        move(): void {
            
            this.x += -2;
            
            if (this.x < 0) {
                this.x = 380;
            }


        }


        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y - (40 * this.s));
            crc2.lineTo(this.x - (20 * this.s), this.y - (20 * this.s));
            crc2.closePath();
            crc2.moveTo(this.x - (20 * this.s), this.y - (20 * this.s));
            crc2.quadraticCurveTo(this.x - (60 * this.s), this.y - (60 * this.s), this.x - (60 * this.s), this.y - (20 * this.s));
            crc2.quadraticCurveTo(this.x - (60 * this.s), this.y + (20 * this.s), this.x - (20 * this.s), this.y - (20 * this.s));


            crc2.stroke();
            crc2.fillStyle = "red";
            crc2.fill();
        }
    }
}