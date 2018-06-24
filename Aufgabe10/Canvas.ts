namespace Aufgabe10 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    //    Array mit Fischen
    let fishes: Fish[] = [];
    //    Array mit Bubbles 
    let bubbles: Bubble[] = [];
    //    Hintergund
    let imgData: ImageData;
    //    Anzahl Fische 
    let n: number = 5;

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        crc2.fillStyle = "rgb(245,222,179)";
        crc2.fillRect(0, 480, 320, -100);
        crc2.fillStyle = "rgb(135,206,235)";
        crc2.fillRect(0, 0, 320, 380);

        drawSeagrass(260, 400, 1);
        drawSeagrass(280, 400, 0.8);
        drawSeagrass(0, 480, 4);

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
        for (let i: number = 0; i < (n*2) - 2; i++) {
            let bubble: Bubble = new Bubble();
            bubble.x = Math.random() * (80) + 60;
            bubble.y = 220 - (Math.random() * 260);
            bubble.s = Math.random() *10;
            bubbles.push(bubble);
        }
        for (let i: number = 0; i < n; i++) {
            let fish: Fish = new Fish();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            fish.s = Math.random()*1.5;

            fishes.push(fish);
        }






        animate();
    }

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.putImageData(imgData, 0, 0);

        moveFishes();
        drawFishes();
        moveBubbles();
        drawBubbles();
    }

    function moveFishes(): void {
        for (let i: number = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
    }

    function drawFishes(): void {
        for (let i: number = 0; i < fishes.length; i++)
            fishes[i].draw();
    }
     function moveBubbles(): void {
        for (let i: number = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
    }

    function drawBubbles(): void {
        for (let i: number = 0; i < bubbles.length; i++)
            bubbles[i].draw();
    }

    function drawSeagrass(_x: number, _y: number, _s: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x + (20 * _s), _y - (20 * _s), _x - (0 * _s), _y - (10 * _s));
        crc2.quadraticCurveTo(_x + (10 * _s), _y - (40 * _s), _x - (0 * _s), _y - (30 * _s));
        crc2.quadraticCurveTo(_x + (10 * _s), _y - (60 * _s), _x - (0 * _s), _y - (50 * _s));
        crc2.quadraticCurveTo(_x + (10 * _s), _y - (60 * _s), _x - (0 * _s), _y - (80 * _s));
        crc2.quadraticCurveTo(_x + (-10 * _s), _y - (80 * _s), _x - (0 * _s), _y - (60 * _s));
        crc2.quadraticCurveTo(_x + (-10 * _s), _y - (70 * _s), _x - (0 * _s), _y - (40 * _s));
        crc2.quadraticCurveTo(_x + (-10 * _s), _y - (50 * _s), _x - (0 * _s), _y - (20 * _s));
        crc2.quadraticCurveTo(_x + (-10 * _s), _y - (30 * _s), _x - (0 * _s), _y - (0 * _s));




        crc2.closePath();



        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.fill();





    }
    /*function drawBubbles(_x: number, _y: number, _w: number, _h: number, _a: number): void {
        for (let i: number = 0; i < _a; i++) {
            let z: number = Math.random() * _w;
            let q: number = Math.random() * _h;
            let scale: number = Math.random() * 10;


            crc2.beginPath();

            crc2.arc(_x + z, _y + q, scale, 0, 2 * Math.PI);
            crc2.stroke();

            crc2.fillStyle = "blue"
            crc2.fill();
            console.log("Bubble");
        }
    }*/
}