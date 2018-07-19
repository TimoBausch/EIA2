namespace Abschlussaufgabe {

    window.addEventListener("load", init);

    //Canvas als Varaible
    export let crc2: CanvasRenderingContext2D;
    //Überprüfungsvariable ob ein Modus gewählt wurde
    let modeChoosed: boolean = false;

    //Überprüfungsvariable ob Canvas bereinigt wurde
    let cleared: boolean = true;
    //Variable zu Bestimmung des Modus
    let mode: string;

    //Array mit Kontrollpunkten
    let points: Objects[] = [];
    //Array mit Objekten
    let objects: Objects[] = [];
    //Array mit Koordinaten
    let coordinates: number[] = [];




    function init(_event: Event): void {

        //HTML Elemente einbinden
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

        //Logo auf Startbildschirm
        let logo: Logo = new Logo(280, 255, 100, 100)
        logo.draw();



        //Eventlistener installieren 
        canvas.addEventListener("click", pointer);
        Line.addEventListener("click", function() { modeChange("Line") });
        Circle.addEventListener("click", function() { modeChange("Circle") });
        Rect.addEventListener("click", function() { modeChange("Rect") });
        clearBox.addEventListener("click", clear);
        retourBox.addEventListener("click", retour);
        animateBox.addEventListener("click", animate);


        //Funktion zur Änderung des Zeichenmodus
        function modeChange(_mode: string): void {
            let choosenBox: HTMLDivElement = <HTMLDivElement>document.getElementById(_mode);

            //Modusvariable deklarieren als übergebener Paramter
            mode = _mode;

            //Überprüfungsvariable auf true setzen um Zeichnen zu ermöglichen
            modeChoosed = true;
            console.log("Modus gewählt:", modeChoosed, mode);

            //alle möglichen active classes entfernen
            for (let i: number = 0; i < boxes.length; i++) {
                boxes[i].classList.remove("active");
            }
            //class active damit gewählter Modus ersichtlich bleibt
            choosenBox.classList.add("active");
        }
    }



    function pointer(_event: MouseEvent): void {
        cleared = true;
        if (modeChoosed) {
            //Ortsvariablen des pointer deklarieren
            let x: number = _event.pageX
            let y: number = _event.pageY;
            //Ortsvariablen in Array mit Koordinaten pushen
            coordinates.push(x);
            coordinates.push(y);
            console.log("point to", x, y);

            //Kontrollpunkte initieren
            let point: PointCircle = new PointCircle(x, y, 0, 0);
            //Kontrollpunkte in array pushen
            points.push(point);
            //Zeichenfunktion für Kontrollpunkte aufrufen
            drawpoints()

            //Wenn zwei Kontrollpunkte gesetzt, Zeichenfunktion für gewählten Modus aufrufen
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

    //Funktion zur Initierung von Linien
    function drawLine(): void {
        let line: Line = new Line(coordinates[0], coordinates[1], coordinates[2], coordinates[3])
        objects.push(line);
        console.log("drawLine with coordinates:", coordinates);
        drawObjects()
    }

    //Funktion zur Initierung von Kreisen
    function drawCircle(): void {
        let circle: Circle = new Circle(coordinates[0], coordinates[1], coordinates[2], coordinates[3]);
        objects.push(circle);
        console.log("draw Circle with coordinates:", coordinates);
        drawObjects();
    }

    //Funktion zur Initierung von Vierecken
    function drawRect(): void {
        let rect: Rect = new Rect(coordinates[0], coordinates[1], coordinates[2], coordinates[3])
        objects.push(rect);
        console.log("draw rect with coordinates:", coordinates);
        drawObjects()
    }
    //Funktion zeichnet Kontrollpunkte
    function drawpoints(): void {
        //zeichnet alle Punkte aus Array
        for (let i: number = 0; i < points.length; i++) {
            points[i].draw();
        }
    }
    //Funktion zeichnet Objekte 
    function drawObjects(): void {
        //Canvas zuerst komplett reinigen
        crc2.clearRect(0, 0, 1280, 620);

        //alle Objekte aus Array zeichnen
        for (let i: number = 0; i < objects.length; i++) {
            objects[i].draw();
        }
        //Koordinaten array für Kontrollpunkte löschen
        coordinates = [];
    }

    //Funkiton zur Rückgängigmachung der letzten Zeichnung
    function retour(): void {
        console.log("undo last draw");
        //letztes Objekt aus array löschen
        objects.splice(objects.length - 1, 1);
        //Objekte erneut zeichnen lassen
        drawObjects();
    }

    //Funktion zur Bereinigung des ganzes canvas
    function clear(): void {
        console.log("clear all");
        cleared = false;
        crc2.clearRect(0, 0, 1280, 620);
        //Arrays löschen
        points = [];
        objects = [];
    }

    //Funktion zur Animation der Objekte
    function animate(): void {
        console.log("ANIMATE");
        if (cleared) {
            window.setTimeout(animate, 10);
            for (let i: number = 0; i < objects.length; i++) {
                //Funktion draw aus Objektklasse aufrufen
                objects[i].move();
            }
            //Objekte Zeichnen
            drawObjects();
        }
    }

}
