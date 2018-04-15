var Aufgabe02;
(function (Aufgabe02) {
    //    Array mit Content 
    var infolist = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //    leeres Array zum Bestücken
    var cardList = [];
    //    Array mit Klassen
    var classList = ["hidden", "taken", "visible"];
    //    Prompt für Eingabe für Kartenpaare 
    function inputPairs() {
        let pairs = prompt("Wie viele Kartenpaare (min. 5 & max. 26)");
        let pairSum = parseInt(pairs);
        if (isNaN(pairSum) || pairSum < 5 || pairSum > 26) {
            alert("FALSCH");
            inputPairs();
        }
        else {
            console.log("inputPairs");
            console.log(pairSum);
            return pairSum;
        }
    }
    //    Prompt für Eingabe für Spieleranzahl 
    function inputPlayer() {
        let n = prompt("Wieviele Spieler wollen mitspielen?(min. 1 & max. 4)");
        let nSum = parseInt(n);
        if (isNaN(nSum) || nSum < 0 || nSum > 4) {
            alert("FALSCH");
            inputPlayer();
        }
        else {
            console.log("inputPlayer");
            console.log(nSum);
            return nSum;
        }
    }
    let amount = inputPairs();
    let players = inputPlayer();
    console.log("Länge Infolist", infolist.length);
    console.log("Content Infolist", infolist);
    //    Content verdoppeln und in neuern array speichern
    function shuffelAray(x) {
        for (let i = 1; i <= x; i++) {
            var content = infolist[0];
            cardList.push(content);
            cardList.push(content);
            var removed = infolist.splice(0, 1);
        }
        console.log("Content CardList", cardList);
    }
    //    Cards erzeugen 
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
            //            zufälliger Index für classList
            var classRandom = Math.floor(Math.random() * (3 - 0)) + 0;
            console.log("Card:" + i);
            console.log(random);
            childNodeHTML = "<div  class='card' class='";
            //            zufällige Klasseneinteilung funktioniert nicht, daher zur Ansicht Simulierung eines Spielverlaufs über Karten-ID
            childNodeHTML += classList[classRandom];
            childNodeHTML += "' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardList[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach Generate, " + cardList.length);
            var content = cardList[random];
            console.log("classRandom: " + classRandom + ", " + classList[classRandom]);
            var removed = cardList.splice(random, 1);
            console.log(cardList);
            i++;
        }
    }
    function generatePlayers() {
        var node = document.getElementById("Spielerbereich");
        var childNodeHTML;
        var i = 0;
        while (i < players) {
            childNodeHTML = "<div  class='player' id='Spieler" + i + "'>";
            childNodeHTML += "Spieler " + (i + 1);
            childNodeHTML += "<p>";
            childNodeHTML += "13 ";
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            i++;
        }
    }
    // Hauptprogramm
    function main() {
        shuffelAray(amount);
        console.log("main");
        // Content erzeugen
        generateCards(amount);
        generatePlayers();
    }
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main);
})(Aufgabe02 || (Aufgabe02 = {}));
//# sourceMappingURL=Aufgabe02.js.map