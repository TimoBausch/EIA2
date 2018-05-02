var Interfaces_A04;
(function (Interfaces_A04) {
    let animalsArray = ["Lion", "Cow", "Turtle", "Mouse", "Doplhin", "Bird", "Tiger", "Rabbit", "Pig", "Chicken"];
    Interfaces_A04.animalsCards = [];
    function generateAnimals() {
        for (let i = 0; i <= animalsArray.length; i++) {
            let Animal = {
                content: animalsArray[i],
                height: 4,
                color: "yellow",
                font: "Arial",
            };
            Interfaces_A04.animalsCards.push(Animal);
        }
    }
    console.log(Interfaces_A04.animalsCards);
    // Simples Array zum Speichern der Studi-Datensätze (nur zur Demonstration)
    Interfaces_A04.studiSimpleArray = [];
    // Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
    Interfaces_A04.studiHomoAssoc = {};
})(Interfaces_A04 || (Interfaces_A04 = {}));
//# sourceMappingURL=Interfaces_A04.js.map