
// creo click event per generare griglia

let myButton = document.querySelector(".play-button");


myButton.addEventListener("click",
    function() {

        // creo elemento big-square
        // richiamo contenitore
        const container = document.querySelector(".square-container");

        // richiamo funzione per creare elemento
        const bigSquare = createElementWClass("div", "big-square");
        console.log(bigSquare);

        // porto elemento in pagina
        container.append(bigSquare);

        // creo caselle square
        // creo ciclo per le 100 caselle
        for (let i = 1; i <= 100; i++) {

            // richiamo funzione per creare elemento
            const littleSquare = createElementWClass("div", "square");
            
            // porto elemento in pagina
            bigSquare.append(littleSquare);

            // scrivo il numero relativo della casella
            littleSquare.innerHTML = i;


            // creo click event per quando viene cliccata una casella

            littleSquare.addEventListener("click",
                function() {

                    // aggiungo classe per cambiare colore 
                    littleSquare.classList.add("clicked");

                    // mostro il numero della casella in console
                    console.log("numero casella: ", i);
                    

                }
            );
        }

        
    }
);









// FUNZIONI

// funzione per creare elemento html
function createElementWClass (tagName, className,) {

    // creo elemento
    const element = document.createElement(tagName);
    // creo classe
    element.classList.add(className);

    return element
}

