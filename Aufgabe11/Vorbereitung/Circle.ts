namespace L11_Inheritance {
    export class Circle extends DavidStar {
        r: number;
        constructor(_color: string) {
            super(_color);

        }
        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height;
        }
        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
    }
}