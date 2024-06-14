
// creo variabile per select
let gameMode = document.getElementById("select-mode");



// creo click event per generare griglia
let myButton = document.querySelector(".play-button");

myButton.addEventListener("click",
    function() {

        // creo elemento big-square
        // richiamo contenitore
        const container = document.querySelector(".square-container");

        // per creare una sola griglia
        container.innerHTML = '';

        // richiamo funzione per creare elemento
        const bigSquare = createElementWClass("div", "big-square");

        // porto elemento in pagina
        container.append(bigSquare);



        // creo caselle square

        // creo condizione per difficoltà
        let gameModeValue = gameMode.value;

        if (gameModeValue === "easy") { // se difficoltà facile

            // creo ciclo per le 100 caselle
            for (let i = 1; i <= 100; i++) {

                // richiamo funzione per creare elemento
                const littleSquare = createElementWClass("div", "square");

                // assegno classe difficoltà
                littleSquare.classList.add("easy-square");

                // scrivo il numero relativo della casella
                littleSquare.innerHTML = i;

                // porto elemento in pagina
                bigSquare.append(littleSquare);

                // creo click event per quando viene cliccata una casella

                littleSquare.addEventListener("click",
                    function() {

                        // aggiungo classe per cambiare colore 
                        littleSquare.classList.add("clicked");

                        // mostro il numero della casella
                        console.log("numero casella: ", i);

                    }
                );
            }

        } else if (gameModeValue === "mid") { // se difficoltà media

            // creo ciclo per le 81 caselle
            for (let i = 1; i <= 81; i++) {

                // richiamo funzione per creare elemento
                const littleSquare = createElementWClass("div", "square");

                // assegno classe difficoltà
                littleSquare.classList.add("mid-square");

                // scrivo il numero relativo della casella
                littleSquare.innerHTML = i;

                // porto elemento in pagina
                bigSquare.append(littleSquare);

                // creo click event per quando viene cliccata una casella

                littleSquare.addEventListener("click",
                    function() {

                        // aggiungo classe per cambiare colore 
                        littleSquare.classList.add("clicked");

                        // mostro il numero della casella
                        console.log("numero casella: ", i);

                    }
                );
            }

        } else if (gameModeValue === "hard") { //se difficoltà difficile

            // creo ciclo per le 49 caselle
            for (let i = 1; i <= 49; i++) {

                // richiamo funzione per creare elemento
                const littleSquare = createElementWClass("div", "square");

                // assegno classe difficoltà
                littleSquare.classList.add("hard-square");

                // scrivo il numero relativo della casella
                littleSquare.innerHTML = i;

                // porto elemento in pagina
                bigSquare.append(littleSquare);

                // creo click event per quando viene cliccata una casella

                littleSquare.addEventListener("click",
                    function() {

                        // aggiungo classe per cambiare colore 
                        littleSquare.classList.add("clicked");

                        // mostro il numero della casella
                        console.log("numero casella: ", i);

                    }
                );
            }

        }
        
    }
);









// FUNZIONI

// funzione per creare elemento html
function createElementWClass (tagName, className) {

    // creo elemento
    const element = document.createElement(tagName);
    // creo classe
    element.classList.add(className);

    return element
}

