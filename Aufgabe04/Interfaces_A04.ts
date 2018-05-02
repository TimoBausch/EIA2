namespace Interfaces_A04 {

    export interface card {
        content: string;
        height: number;
        color: string;
        font: string;
        
    }
    
    let animalsArray : string [] = ["Lion", "Cow", "Turtle", "Mouse", "Doplhin", "Bird", "Tiger", "Rabbit", "Pig", "Chicken"]
    export let animalsCards : card [] = []
    
function generateAnimals() : void {
     
    for (let i: number = 0; i <= animalsArray.length; i++) {
        
        let Animal: card = {
            content: animalsArray[i],
            height: 4,
            color: "yellow",
            font: "Arial",
            }
                animalsCards.push (Animal);

        }
        
        }
   
            
     console.log(animalsCards);
    
    
    
    
        
        
    
    // Struktur des homogenen assoziativen Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
    export interface Card {
         [matrikel: string]: Card;
    }

    // Simples Array zum Speichern der Studi-Datensätze (nur zur Demonstration)
    export let studiSimpleArray: Card[] = [];
    
    // Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
    export let studiHomoAssoc: Card = {};
    
}