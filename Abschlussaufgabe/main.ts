namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let modeChoosed: boolean = false;
    let cleared: boolean = true;



    let points: Objects[] = [];
    let objects: Objects[] = [];
    let mode: string;





    let coordinates: number[] = [];




    function init(_event: Event): void {

        console.log(modeChoosed);
        let boxes: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        let Line: HTMLDivElement = document.getElementsByTagName("div")[4];
        let Circle: HTMLDivElement = document.getElementsByTagName("div")[5];
        let Rect: HTMLDivElement = document.getElementsByTagName("div")[6];
        let retourBox: HTMLDivElement = document.getElementsByTagName("div")[1];
        let clearBox: HTMLDivElement = document.getElementsByTagName("div")[2];
        let animateBox: HTMLDivElement = document.getElementsByTagName("div")[3];

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        let logo: Logo = new Logo(280, 255, 100, 100)
        logo.draw();




        canvas.addEventListener("click", Pointer);
        canvas.addEventListener("touchstart", function test() {
            window.removeEventListener('touchstart', test, false);
        }, false);

        Line.addEventListener("click", function() { modeChange("Line") });
        Circle.addEventListener("click", function() { modeChange("Circle") });
        Rect.addEventListener("click", function() { modeChange("Rect") });
        clearBox.addEventListener("click", clear);
        retourBox.addEventListener("click", retour);
        animateBox.addEventListener("click", animate);

        function modeChange(_mode: string): void {
            let choosenBox: HTMLDivElement = <HTMLDivElement>document.getElementById(_mode);
            mode = _mode;


            choosenBox.classList.add("active");



            modeChoosed = true;
            console.log(modeChoosed);

            for (let i: number = 0; i < boxes.length; i++) {
                boxes[i].classList.remove("active");
            }
            choosenBox.classList.add("active");
        }


        function test(): void {
            crc2.fillStyle = "rgb(245,222,179)";
            crc2.fillRect(0, 480, 320, -100);
        }



    }



    function Pointer(_event: MouseEvent): void {
        cleared = true;
        if (modeChoosed) {

            let x: number = _event.pageX
            let y: number = _event.pageY;

            coordinates.push(x);
            coordinates.push(y);
            console.log("point to", x, y);

            let point: PointCircle = new PointCircle(x, y, 0, 0);

            points.push(point);
            drawpoints()


            if (points.length > 1) {

                switch (mode) {

                    case "Line": {
                        console.log("Mode: Line");
                        points = [];
                        drawLine();
                        break;
                    }
                    case "Circle": {
                        console.log("Mode: Circle");
                        points = [];
                        drawCircle();
                        break;
                    }
                    case "Rect": {
                        console.log("Mode: Rect");
                        points = [];
                        drawRect();
                        break;
                    }
                    default: {
                        console.log("no choice");
                        break;
                    }
                }
            }
        }
    }


    function drawLine(): void {



        let line: Line = new Line(coordinates[0], coordinates[1], coordinates[2], coordinates[3])
        objects.push(line);
        console.log("drawLine with coordinates:", coordinates);
        drawObjects()




    }

    function drawCircle(): void {
        let circle: Circle = new Circle(coordinates[0], coordinates[1], coordinates[2], coordinates[3]);
        objects.push(circle);
        console.log("draw Circle with coordinates:", coordinates);

        drawObjects();



    }
    function drawRect(): void {
        let rect: Rect = new Rect(coordinates[0], coordinates[1], coordinates[2], coordinates[3])
        objects.push(rect);
        console.log("draw rect with coordinates:", coordinates);

        drawObjects()


    }
    function drawpoints(): void {

        for (let i: number = 0; i < points.length; i++) {
            points[i].draw();
        }

    }

    function drawObjects(): void {
        crc2.clearRect(0, 0, 1280, 620);
        drawpoints();



        for (let i: number = 0; i < objects.length; i++) {
            objects[i].draw();
        }
        coordinates = [];
        //        console.log("cleared coordinates:", coordinates);
    }




    function retour(): void {
        console.log("undo last draw");
        objects.splice(objects.length - 1, 1);
        crc2.clearRect(0, 0, 1280, 620);
        drawObjects();
    }

    function clear(): void {
        console.log("clear all");
        cleared = false;
        crc2.clearRect(0, 0, 1280, 620);
        points = [];
        objects = [];



    }
    function animate(): void {
        console.log("ANIMATE");
        if (cleared) {
            window.setTimeout(animate, 10);
            for (let i: number = 0; i < objects.length; i++) {
                objects[i].move();
            }
            drawObjects();
           
        }
    }

}
