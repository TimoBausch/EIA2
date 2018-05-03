namespace Aufgabe04 {

    export interface CardDeck {
        content: string[];
        cssClass: string;


    }

    export let animalsContent: string[] = ["Lion", "Cow", "Turtle", "Mouse", "Doplhin", "Bird", "Tiger", "Rabbit", "Pig", "Chicken"]
    export interface Decks {
        [deckname: string]: CardDeck;
    }
   export let decks: Decks = {};
    decks["Animals"] = {
        content: ["Lion", "Cow", "Turtle", "Mouse", "Doplhin", "Bird", "Tiger", "Rabbit", "Pig", "Chicken"],
        cssClass: "Animal",
        }
    decks["Letters"]= {
        content: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        cssClass: "Letter",
        }
    decks["Names"]= {
        content: ["Peter", "Gundula", "Gisela", "Gunni", "Tom", "Heinz", "Karl", "Zina", "Denis", "Tobi"],
        cssClass: "Name",
        }















        // Struktur des homogenen assoziativen Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
        export interface Card {
        [matrikel: string]: Card;
    }

    // Simples Array zum Speichern der Studi-Datensätze (nur zur Demonstration)
    export let studiSimpleArray: Card[] = [];

    // Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
    export let studiHomoAssoc: Card = {};

}