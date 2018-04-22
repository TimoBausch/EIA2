namespace Aufgabe02 {
    

//    Array mit Content 
    var infolist: string []=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//    leeres Array zum Bestücken
    var cardList: string[]=[];
//    Array mit Klassen
    var classList: string[]=["hidden", "taken", "visible"];
//    Array zum Vegleichen von 2 Karten
    var openList:HTMLDivElement[]=[];
//    Variable dass nur 2 karten offen sein können 
    let openCards: number = 0; 
//    Player Score der am anfang auf 0 gesetzt ist
    let score:number=0;
    
    
    
    
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
    
    function shuffelArray(_x:number): void {
        
        for (let i: number = 1; i <= _x; i++) {
             
            
        var content : string = infolist[0];  
        cardList.push (content);
            cardList.push(content);
             
            var removed = infolist.splice(0, 1);
            
            
            
        }
    console.log("Content CardList", cardList);
   
    
    }
    
//    Cards erzeugen 
    
    function generateCards(_y:number) : void{
        var node : any= document.getElementById("spielfeld");
        var childNodeHTML : string;
        var i : number = 0;
        
        
        
        while (i < (_y*2)) {
            let min: number = 0;
        let max: number = (cardList.length);
            // min = Math.ceil(min);
          //  max = Math.floor(max);
            var random:number=Math.floor(Math.random() * (max - min)) + min; 
//            zufälliger Index für classList
            var classRandom : number= Math.floor(Math.random() * (3 - 0)) + 0;
            console.log("Card:" + i);
              console.log(random); 
          
            childNodeHTML = "<div  class='card' class='hidden' id='Karte" + i + "'>";
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
            
            
            addEventListener("click", clickHandler)
            
            i++;
        }
    }
    
    

            
           
            
       function clickHandler(_event: MouseEvent): void {
           console.log(_event.target);
           let x : HTMLElement = <HTMLElement>_event.target;
           console.log(x.innerHTML);

           if (x.classList.contains("card")) {  
               x.classList.add("open");                   
        openCards ++;                                                           
            

        if (openCards == 2) {                                                  
            setTimeout(compareCards, 2000);                                    
        }

        if (openCards > 2) {                                                    
            x.classList.remove("open");
            x.classList.add("hidden");
        }
    }
       }    
           
      
           
           
       
        
    function compareCards () :void {
        let card1:HTMLDivElement=<HTMLDivElement>document.getElementsByClassName("open")[0];
        let card2:HTMLDivElement=<HTMLDivElement>document.getElementsByClassName("open")[1];
        
        openList.push (card1, card2);
        console.log(openList);
         if (openList[0].innerHTML==openList[1].innerHTML){
            
             openList[0].classList.remove("open"); 
             openList[0].classList.add("taken");
             
            
             openList[1].classList.remove("open"); 
             openList[1].classList.add("taken");
               
             score ++;
             console.log("Karetnpaaar abeglegt");
             
            
        
    }else {
             card1.classList.remove("open"); 
             
             
             card2.classList.remove("open"); 
             
             }
//        openCards Variabel wieder auf 0 setzen 
        openCards=0;
//        opeList Array löschen 
        openList.splice(0, 2);
//       HTML von Score verändern um Player Score mitzuzählne
        let playerScore : string = score.toString();
        document.getElementById('Punktestand').innerHTML = playerScore;
        
         
        }
            
    
    function generatePlayers() : void{
        var node : any= document.getElementById("Spielerbereich");
        var childNodeHTML : string;
        var i : number = 0;
        while (i < players) {
          
            childNodeHTML = "<div  class='player' id='Spieler" + i + "'>";
            childNodeHTML += "Spieler " + (i+1);
            childNodeHTML += "<p id='Punktestand'>";
            childNodeHTML += "0";
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";      
            node.innerHTML += childNodeHTML;
            i++;
        }
        }
    
    // Hauptprogramm
    function main () : void {
        
         shuffelArray(amount);
       
         console.log("main");
        
        // Content erzeugen
         generateCards(amount);
         generatePlayers();
         
    
    }
    
    
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main); 
}
