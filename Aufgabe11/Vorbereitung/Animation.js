var L11_Inheritance;
(function (L11_Inheritance) {
    window.addEventListener("load", init);
    let stars = [];
    let n = 30;
    //let rects: Rect[] = [];
    function init(_event) {
        console.log("HALLO");
        let canvas = document.getElementsByTagName("canvas")[0];
        L11_Inheritance.crc2 = canvas.getContext("2d");
        console.log(L11_Inheritance.crc2);
        canvas.addEventListener("click", insertNewObject);
        for (let i = 0; i < n; i++) {
            let star = new L11_Inheritance.DavidStar("#cc0000");
            stars.push(star);
            let rect = new L11_Inheritance.Rect("#ff9900");
            stars.push(rect);
            let circle = new L11_Inheritance.Circle("#ffff00");
            stars.push(circle);
        }
        animate();
    }
    function insertNewObject(_event) {
        // let star: DavidStar = new DavidStar("#ffff00");
        //stars.push(star);
        let _x = _event.pageX;
        let _y = _event.pageY;
        let random = Math.random() * 13;
        if (random < 4) {
            let star = new L11_Inheritance.DavidStar("#BDB76B");
            star.x = _x;
            star.y = _y;
            stars.push(star);
        }
        else if (random < 8) {
            let rect = new L11_Inheritance.Rect("#006400");
            rect.x = _x;
            rect.y = _y;
            stars.push(rect);
        }
        else {
            let circle = new L11_Inheritance.Circle("#00BFFF");
            circle.x = _x;
            circle.y = _y;
            stars.push(circle);
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        L11_Inheritance.crc2.clearRect(0, 0, L11_Inheritance.crc2.canvas.width, L11_Inheritance.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Animation.js.map