namespace Aufgabe02 {
    

//    Array mit Content 
    var infolist: string []=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//    leeres Array zum Bestücken
    var cardList: string[]=[];
//    Array mit Klassen
    var classList: string[]=["hidden", "taken", "visible"];
  
    
//    Prompt für Eingabe für Kartenpaare 
   function inputPairs() : number{
       
    let pairs : string = prompt("Wie viele Kartenpaare (min. 5 & max. 26)");
    let pairSum : number = parseInt(pairs);
       if (isNaN(pairSum) || pairSum < 5 || pairSum > 26) {
        alert("FALSCH")
        inputPairs();    
    }
    
        else {
       
      
       console.log("inputPairs")
        
       console.log(pairSum);
       return pairSum;
           
    }
       }
    
    //    Prompt für Eingabe für Spieleranzahl 

       function inputPlayer():number{
           let n : string = prompt ("Wieviele Spieler wollen mitspielen?(min. 1 & max. 4)");
           let nSum : number = parseInt(n);
            if (isNaN(nSum) || nSum < 0 || nSum > 4) {
        alert("FALSCH")
        inputPlayer();    
    }
    
        else {
       
      
       console.log("inputPlayer")
        
    console.log(nSum);
       return nSum;
           
    }
     }      
   let amount :number =  inputPairs();
   let players : number = inputPlayer();
        
    console.log("Länge Infolist", infolist.length);
    console.log("Content Infolist", infolist);
    
    
//    Content verdoppeln und in neuern array speichern
    
    function shuffelAray(x:number): void {
        
        for (let i: number = 1; i <= x; i++) {
             
            
        var content : string = infolist[0];  
        cardList.push (content);
            cardList.push(content);
             
            var removed = infolist.splice(0, 1);
            
            
            
        }
    console.log("Content CardList", cardList);
   
    
    }
    
//    Cards erzeugen 
    
    function generateCards(y:number) : void{
        var node : any= document.getElementById("spielfeld");
        var childNodeHTML : string;
        var i : number = 0;
        
        
        while (i < (y*2)) {
            let min: number = 0;
        let max: number = (cardList.length);
            // min = Math.ceil(min);
          //  max = Math.floor(max);
            var random:number=Math.floor(Math.random() * (max - min)) + min; 
            var classRandom : number= Math.floor(Math.random() * (3 - 0)) + 0;
            console.log("Card:" + i);
              console.log(random); 
          
            childNodeHTML = "<div  class='card' class='"; 
            childNodeHTML += classList[classRandom];
            childNodeHTML += "' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardList[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";      
            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach Generate, " + cardList.length)
            var content : string = cardList[random]; 
            console.log ("classRandom: " + classRandom + ", " + classList[classRandom]);
             
            var removed = cardList.splice(random, 1);
            console.log(cardList);
            
            i++;
        }
    }
    function generatePlayers() : void{
        var node : any= document.getElementById("Spielerbereich");
        var childNodeHTML : string;
        var i : number = 0;
        while (i < players) {
          
            childNodeHTML = "<div  class='player' id='Spieler" + i + "'>";
            childNodeHTML += "Spieler " + (i+1);
            childNodeHTML += "<p>";
            childNodeHTML += "13 ";
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";      
            node.innerHTML += childNodeHTML;
            i++;
        }
        }
    
    // Hauptprogramm
    function main () : void {
        
         shuffelAray(amount);
        
       
        
        
         console.log("main");
        
        // Content erzeugen
         generateCards(amount);
         generatePlayers();
         }
    
    
    
    
    
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main); 
}
