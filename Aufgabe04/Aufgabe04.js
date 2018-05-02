var Aufgabe02;
(function (Aufgabe02) {
    //    Array mit Content 
    var Letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //    leeres Array zum Bestücken
    var cardList = [];
    //    Array zum Vegleichen von 2 Karten
    var openList = [];
    //    Variable dass nur 2 karten offen sein können 
    let openCards = 0;
    //    Player Score der am anfang auf 0 gesetzt ist
    let score = 0;
    let greetNumber = 0;
    let inputs = document.getElementsByTagName("input");
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', init);
    function init(_event) {
        let insertButton = document.getElementById("start");
        insertButton.addEventListener("click", start);
    }
    // Hauptprogramm
    function start() {
        generatePlayers();
        inputCardList();
        generateCards();
    }
    function generatePlayers() {
        let players = parseInt(inputs[0].value);
        var node = document.getElementById("Spielerbereich");
        var childNodeHTML;
        for (let i = 0; i < players; i++) {
            let playerName = (inputs[i + 1].value);
            console.log(playerName);
            childNodeHTML = "<div  class='player' id='Spieler" + i + "'>";
            childNodeHTML += playerName;
            childNodeHTML += "<p id='Punktestand'>";
            childNodeHTML += "0";
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
        }
        console.log("Anzahl Player: " + players);
    }
    //    Content verdoppeln und in neuern array speichern
    function inputCardList() {
        let select = document.getElementById("select");
        let selectedArray = select.value;
        let amount = parseInt(inputs[5].value);
        console.log("Kartendeck: " + selectedArray);
        for (let i = 1; i <= amount; i++) {
            var content = select.value[0];
            console.log(select.value[0]);
            cardList.push(content);
            cardList.push(content);
        }
        console.log("Content CardList", cardList);
    }
    //    Cards erzeugen 
    function generateCards() {
        var node = document.getElementById("spielfeld");
        var childNodeHTML;
        let amount = parseInt(inputs[5].value);
        var i = 0;
        while (i < (amount * 2)) {
            let min = 0;
            let max = (cardList.length);
            // min = Math.ceil(min);
            //  max = Math.floor(max);
            var random = Math.floor(Math.random() * (max - min)) + min;
            console.log("Card:" + i);
            console.log(random);
            childNodeHTML = "<div class='hidden' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardList[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach Generate, " + cardList.length);
            var removed = cardList.splice(random, 1);
            console.log(cardList);
            addEventListener("click", clickHandler);
            i++;
        }
    }
    function clickHandler(_event) {
        let x = _event.target;
        if (x.classList.contains("hidden")) {
            x.classList.remove("hidden"); //hier war Fehler wegen Doppelklick, Class hidden wurde zuvor nicht entfernt
            x.classList.add("open");
            openCards++;
        }
        if (openCards == 2) {
            setTimeout(compareCards, 1000);
        }
        if (openCards > 2) {
            x.classList.remove("open");
            x.classList.add("hidden");
        }
        if (x.classList.contains("open")) {
        }
    }
    function compareCards() {
        let card1 = document.getElementsByClassName("open")[0];
        let card2 = document.getElementsByClassName("open")[1];
        openList.push(card1, card2);
        console.log(openList);
        if (openList[0].innerHTML == openList[1].innerHTML) {
            openList[0].classList.remove("open");
            openList[0].classList.add("taken");
            openList[1].classList.remove("open");
            openList[1].classList.add("taken");
            score++;
            console.log("Karetnpaaar abeglegt");
            greetNumber++;
            console.log(greetNumber);
        }
        else {
            card1.classList.remove("open");
            card1.classList.add("hidden");
            card2.classList.remove("open");
            card2.classList.add("hidden");
        }
        //        openCards Variabel wieder auf 0 setzen 
        openCards = 0;
        //        opeList Array löschen 
        openList.splice(0, 2);
        //       HTML von Score verändern um Player Score mitzuzählne
        let playerScore = score.toString();
        document.getElementById('Punktestand').innerHTML = playerScore;
        congrats();
    }
    function congrats() {
        if (greetNumber == parseInt(inputs[5].value)) {
            alert("Glückwunsch!");
        }
    }
})(Aufgabe02 || (Aufgabe02 = {}));
//# sourceMappingURL=Aufgabe04.js.map