var Aufgabe04;
(function (Aufgabe04) {
    //    Array mit Content 
    let Letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //    leeres Array zum Bestücken
    let cardList = [];
    //    Array zum Vegleichen von 2 Karten
    let openList = [];
    //    Variable dass nur 2 karten offen sein können 
    let openCards = 0;
    //    Player Score der am anfang auf 0 gesetzt ist
    let score = 0;
    let greetNumber = 0;
    let inputs = document.getElementsByTagName("input");
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', init);
    function init(_event) {
        console.log(Aufgabe04.animalsContent);
        console.log(Aufgabe04.decks);
        let insertButton = document.getElementById("insert");
        insertButton.addEventListener("click", insertAmount);
        let startButton = document.getElementById("start");
        startButton.addEventListener("click", start);
    }
    // Hauptprogramm
    function insertAmount() {
        console.log("BIATCH");
        let node = document.getElementById("AmountDiv");
        let childNodeHTML;
        let select = document.getElementById("select");
        let selectedArray = select.value;
        childNodeHTML = "<input  type='number' name='player' placeholder='how many Cards?' min='1'max='" + Aufgabe04.decks[selectedArray].content.length + "' />";
        node.innerHTML += childNodeHTML;
    }
    function start() {
        let header = document.getElementsByTagName("header");
        header[0].classList.add("hiddenheader");
        generatePlayers();
        inputCardList();
        generateCards();
    }
    function generatePlayers() {
        let players = parseInt(inputs[0].value);
        let select = document.getElementById("select");
        let selectedArray = select.value;
        let node = document.getElementById("Spielerbereich");
        let childNodeHTML;
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
    //    Content verdoppeln und in neuern array speich    
    function inputCardList() {
        let select = document.getElementById("select");
        let selectedArray = select.value;
        let amount = parseInt(inputs[5].value);
        console.log("Kartendeck: " + selectedArray);
        for (let i = 1; i <= amount; i++) {
            let content = Aufgabe04.decks[selectedArray].content[i];
            cardList.push(content);
            cardList.push(content);
            let removed = Aufgabe04.decks[selectedArray].content.splice(0, 1);
        }
        console.log("Content CardList", cardList);
    }
    //    Cards erzeug    
    function generateCards() {
        let select = document.getElementById("select");
        let selectedArray = select.value;
        let node = document.getElementById("spielfeld");
        let childNodeHTML;
        let amount = parseInt(inputs[5].value);
        let i = 0;
        while (i < (amount * 2)) {
            let min = 0;
            let max = (cardList.length);
            // min = Math.ceil(min);
            //  max = Math.floor(max);
            let random = Math.floor(Math.random() * (max - min)) + min;
            console.log("Card:" + i);
            console.log(random);
            childNodeHTML = "<div class='hidden'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardList[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach Generate, " + cardList.length);
            let card = document.getElementsByClassName("hidden")[i];
            card.classList.add(Aufgabe04.decks[selectedArray].cssClass);
            let removed = cardList.splice(random, 1);
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
})(Aufgabe04 || (Aufgabe04 = {}));
//# sourceMappingURL=Aufgabe04.js.map