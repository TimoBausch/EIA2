namespace Abschlussaufgabe {
    export class Logo extends Objects {


        constructor(_x: number, _y: number, _q: number, _p: number) {
            super(_x, _y, _q, _p);



        }

        move(): void {



        }



        draw(): void {
            let a: number = this.x;
            let b: number = this.y;


            crc2.beginPath();
            crc2.rect(a, b, 40, 10);
            crc2.rect(a, b, 10, 30);
            crc2.rect(a, b + 20, 40, 10);
            crc2.rect(a+30, b + 20, 10, 40);
            crc2.rect(a, b + 50, 40, 10);
            crc2.rect(a, b + 40, 10, 20);
            
            crc2.rect(a+60, b, 10, 60);
            
            crc2.rect(a+90, b, 10, 60);
            crc2.rect(a+90, b, 50, 10);
            crc2.rect(a+130, b, 10, 60);
            crc2.rect(a+110, b, 10, 30);
            
            crc2.rect(a+160, b, 10, 60);
            crc2.rect(a+160, b, 40, 10);
            crc2.rect(a+160, b + 20, 40, 10);
            crc2.rect(a+190, b, 10, 30);
            crc2.rect(a+210, b, 10, 60);
            crc2.rect(a+210, b + 50, 40, 10);
            
            crc2.rect(a+260, b, 10, 60);
            crc2.rect(a+260, b, 40, 10);
            crc2.rect(a+260, b + 20, 30, 10);
            crc2.rect(a+260, b + 50, 40, 10);
            
            crc2.rect(a+380, b, 10, 60);
            crc2.rect(a+380, b, 40, 10);
            crc2.rect(a+410, b, 10, 20);
            crc2.rect(a+380, b + 50, 40, 10);
            crc2.rect(a+400, b+30, 20, 10);
            crc2.rect(a+410, b + 30, 10, 30);
            
            crc2.rect(a+440, b, 40, 10);
            crc2.rect(a+440, b +20, 40, 10);
            crc2.rect(a+440, b , 10, 60);
            crc2.rect(a+470, b, 10, 30);
            crc2.rect(a+460, b + 20, 10, 40);
            
            crc2.rect(a+500, b,40, 10);
            crc2.rect(a+500, b , 10, 60);
            crc2.rect(a+530, b, 10, 60);
            crc2.rect(a+500, b + 20, 40, 10);
            
            crc2.rect(a+560, b, 40, 10);
            crc2.rect(a+560, b , 10, 60);
            crc2.rect(a+560, b + 20, 40, 10);
            crc2.rect(a+590, b , 10, 30);
            
            crc2.rect(a+610, b , 10, 60);
            crc2.rect(a+640, b , 10, 60);
            crc2.rect(a+610, b + 20, 40, 10);
            
            crc2.rect(a+670, b, 10, 60);
            
            
            crc2.rect(a+700, b , 10, 60);
            crc2.rect(a+700, b + 50, 40, 10);
            crc2.rect(a+700, b, 40, 10);
            crc2.rect(a+700, b + 40, 10, 20);
            
            crc2.rect(a+750, b, 40, 10);
            crc2.rect(a+750, b, 10, 30);
            crc2.rect(a+750, b + 20, 40, 10);
            crc2.rect(a+780, b + 20, 10, 40);
            crc2.rect(a+750, b + 50, 40, 10);
            crc2.rect(a+750, b + 40, 10, 20);
            
            
            
            




            










            crc2.fillStyle = "lightgrey";
            crc2.fill();
            crc2.stroke();


            crc2.moveTo(this.q, this.p);




        }



    }
}