namespace L04_Interfaces {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("searchbutton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }

    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let select: HTMLSelectElement = <HTMLSelectElement>document.getElementById("select");
        let matrikel: string = inputs[2].value;
        let studi: Studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            studiengang: select.value,
            age: parseInt(inputs[3].value),
            gender: genderButton.checked
        };

        console.log(studi);
//        console.log(studi.age);
//        console.log(studi["age"]);

        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        studiHomoAssoc[matrikel] = studi;

        // nur um das auch noch zu zeigen...
        studiSimpleArray.push(studi);
    }

    function refresh(_event: Event): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in studiHomoAssoc) {  // Besonderheit: Type-Annotation nicht erlaubt, ergibt sich aus der Interface-Definition
            let studi: Studi = studiHomoAssoc[matrikel];
            let line: string = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ," + studi.studiengang;
            line += studi.gender ? "(M)" : "(F)";
            output.value += line + "\n";
        }
        }
        
      function search(_event: Event): void{
         let n: number = 0;
         let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];
         let mNumb: HTMLInputElement = <HTMLInputElement>document.getElementById("mtrNumber");
         output.value = "";
          
          for (let matrikel in studiHomoAssoc) {
              let studi: Studi = studiHomoAssoc[matrikel];
              let line: string = matrikel + ": ";
              let lengthstudiHomoAssoc: number = studiSimpleArray.length;
              
              if(mNumb.value == studi.matrikel.toString()){
                
            
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            output.value += line + "\n";


          
          } else if ((lengthstudiHomoAssoc - 1) == n) {             
                let info: string = "Kein Student unter dieser Matrikelnummer vorhanden.";
                output.value += info + "\n";
                n = 0;

            }

            else {
                n++;
            }
              }
          }
          

        // zusätzliche Konsolenausgaben zur Demonstration
        console.group("Simple Array");
        console.log(studiSimpleArray);
        console.groupEnd();

        console.group("Associatives Array (Object)");
        console.log(studiHomoAssoc);
        console.groupEnd();
    }

