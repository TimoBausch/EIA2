var Aufgabe02;
(function (Aufgabe02) {
    var infolist = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var cardList = [];
    function inputPairs() {
        let pairs = prompt("Wie viele Kartenpaare (min4 & max26)");
        let pairSum = parseInt(pairs);
        console.log("inputPairs");
        return pairSum;
    }
    let amount = inputPairs();
    console.log("Länge Infolist", infolist.length);
    console.log("Content Infolist", infolist);
    function shuffelAray(x) {
        for (let i = 1; i <= x; i++) {
            var content = infolist[0];
            cardList.push(content);
            cardList.push(content);
            var removed = infolist.splice(0, 1);
        }
        console.log("Content CardList", cardList);
    }
    function generateCards(y) {
        var node = document.getElementById("spielfeld");
        var childNodeHTML;
        var i = 0;
        while (i < (y * 2)) {
            let min = 0;
            let max = (cardList.length);
            // min = Math.ceil(min);
            //  max = Math.floor(max);
            var random = Math.floor(Math.random() * (max - min)) + min;
            console.log("Card:" + i);
            console.log(random);
            childNodeHTML = "<div  class='card' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardList[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach Generate, " + cardList.length);
            var content = cardList[random];
            var removed = cardList.splice(random, 1);
            console.log(cardList);
            i++;
        }
    }
    // Hauptprogramm
    function main() {
        shuffelAray(amount);
        console.log("main");
        // Content erzeugen
        generateCards(amount);
    }
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main);
})(Aufgabe02 || (Aufgabe02 = {}));
//# sourceMappingURL=Aufgabe02.js.map