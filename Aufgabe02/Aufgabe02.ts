namespace Aufgabe02 {
    

    
    var infolist: string []=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var cardList: string[]=[];
  
    
    
   function inputPairs() : number{
    let pairs : string = prompt("Wie viele Kartenpaare (min5|max10)")
    let pairSum : number = parseInt(pairs)
        
    
       return pairSum;
    }
    
   
        
console.log(infolist.length);
    console.log(infolist);
    console.log("Cards:");
    
    let Sum : number  = pairSum
    
    function shuffelAray(min:number, max:number,): void {
        
        for (let i: number = 0; i < pairSum; i++) {
            min = Math.ceil(min);
            max = Math.floor(max);
            var random:number=Math.floor(Math.random() * (max - min +1)) + min; 
              console.log(random); 
            
        var content : string = infolist[random];  
        cardList.push (content);
            cardList.push(content);
             
            var removed = infolist.splice(random, 1);
            console.log(infolist);
            console.log(cardList);
            
        }
    
   
    
    }
    
    
    
    function generateCards() : void{
        var node : any= document.getElementById("spielfeld");
        var childNodeHTML : string;
        var i : number = 0;
        while (i < cardList.length) {
            
            childNodeHTML = "<div  class='card' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardList[i];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";      
            node.innerHTML += childNodeHTML;
            i++;
        }
    }
    
    
    // Hauptprogramm
    function main () : void {
        inputPairs();
         shuffelAray(0,25,);
        
       
        
        
        console.log("main");
        
        // Content erzeugen
         generateCards();
        }
    
    
    
    
    
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main); 
}
