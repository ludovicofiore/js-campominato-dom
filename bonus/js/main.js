
// creo variabile per select
let gameMode = document.getElementById("select-mode");

// dichiaro variabile per punteggio
let score = 0;



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


            // creo array con numeri delle bombe
            const bombsArray = createRandomNumArray(1, 100, 16);
            console.log(bombsArray);

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

                        // mostro il numero della casella in console
                        console.log("numero casella: ", i);

                        // richiamo contenitore risultato
                        let result = document.querySelector(".result-container");

                        // incremento punteggio per ogni click
                        score++;
                        console.log(score);

                        // creo ciclo per estrapolare valori array bombe
                        for (let index = 0; index < bombsArray.length; index++) {
            
                            let bombNumbers = bombsArray[index];
                        

                            // assegno le caselle bomba e condizione giocatore perdente
                            if (i === bombNumbers) {
                                littleSquare.classList.add("bomb");

                                // creo elemeto per comunicare risultato
                                let resultLoss = createElementWClass("h2", "title");
                                result.append(resultLoss);

                                // aggiungo contenuto e mostro punteggio
                                resultLoss.innerHTML = "Hai perso, il tuo punteggio è: " + (score - 1);

                            }
                        
                        }

                        // condizione se giocatore vince 
                        if (score === 84) {

                            // creo elemento per comunicare risultato
                            let resultWin = createElementWClass("h2", "title");
                            result.append(resultWin);

                            // aggiungo contenuto e mostro messaggio
                            resultWin.innerHTML = "Hai vinto, il tuo punteggio è: " + score;
                        }

                    }
                );
            }

        } else if (gameModeValue === "mid") { // se difficoltà media


            // creo array con numeri delle bombe
            const bombsArray = createRandomNumArray(1, 81, 16);
            console.log(bombsArray);

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


                        // richiamo contenitore risultato
                        let result = document.querySelector(".result-container");

                        // incremento punteggio per ogni click
                        score++;
                        console.log(score);

                        // creo ciclo per estrapolare valori array bombe
                        for (let index = 0; index < bombsArray.length; index++) {
            
                            let bombNumbers = bombsArray[index];
                        

                            // assegno le caselle bomba e condizione giocatore perdente
                            if (i === bombNumbers) {
                                littleSquare.classList.add("bomb");

                                // creo elemeto per comunicare risultato
                                let resultLoss = createElementWClass("h2", "title");
                                result.append(resultLoss);

                                // aggiungo contenuto e mostro punteggio
                                resultLoss.innerHTML = "Hai perso, il tuo punteggio è: " + (score - 1);

                            }
                        
                        }

                        // condizione se giocatore vince 
                        if (score === 65) {

                            // creo elemento per comunicare risultato
                            let resultWin = createElementWClass("h2", "title");
                            result.append(resultWin);

                            // aggiungo contenuto e mostro messaggio
                            resultWin.innerHTML = "Hai vinto, il tuo punteggio è: " + score;
                        }

                    }
                );
            }

        } else if (gameModeValue === "hard") { //se difficoltà difficile


            // creo array con numeri delle bombe
            const bombsArray = createRandomNumArray(1, 49, 16);
            console.log(bombsArray);


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


                        // richiamo contenitore risultato
                        let result = document.querySelector(".result-container");

                        // incremento punteggio per ogni click
                        score++;
                        console.log(score);

                        // creo ciclo per estrapolare valori array bombe
                        for (let index = 0; index < bombsArray.length; index++) {
            
                            let bombNumbers = bombsArray[index];
                        

                            // assegno le caselle bomba e condizione giocatore perdente
                            if (i === bombNumbers) {
                                littleSquare.classList.add("bomb");

                                // creo elemeto per comunicare risultato
                                let resultLoss = createElementWClass("h2", "title");
                                result.append(resultLoss);

                                // aggiungo contenuto e mostro punteggio
                                resultLoss.innerHTML = "Hai perso, il tuo punteggio è: " + (score - 1);

                            }
                        
                        }

                        // condizione se giocatore vince 
                        if (score === 33) {

                            // creo elemento per comunicare risultato
                            let resultWin = createElementWClass("h2", "title");
                            result.append(resultWin);

                            // aggiungo contenuto e mostro messaggio
                            resultWin.innerHTML = "Hai vinto, il tuo punteggio è: " + score;
                        }

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


// funzione per array numeri casuali
function createRandomNumArray (min, max, arrayLenght) {
    
    // creo array
    const randomArray = [];

    // creo ciclo per pushare i numeri
    while (randomArray.length < arrayLenght) {

        // creo numero random
        let randomNum = Math.floor(Math.random() * (max - min +1)) + min;

        // inserisco il numero nell'array se non già compreso
        if (!randomArray.includes(randomNum)) {
            randomArray.push(randomNum);
        }
    }

    return randomArray
}

