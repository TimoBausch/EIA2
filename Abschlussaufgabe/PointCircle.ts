namespace Abschlussaufgabe {
    export class PointCircle extends Objects {
        private color: string = "red";


       constructor(_x: number, _y: number,_q:number,_p:number) {
            super(_x, _y,_q,_p)

        }

        move(): void {
            
            }

        

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 3,0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "red";
            crc2.fill();
        }
        
        

    }
}