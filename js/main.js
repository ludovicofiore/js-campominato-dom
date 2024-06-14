
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

        // creo array con numeri delle bombe
        const bombsArray = createRandomNumArray(1, 100, 16);
        console.log(bombsArray);

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

                    // creo ciclo per estrapolare valori array bombe
                    for (let index = 0; index < bombsArray.length; index++) {
            
                        let bombNumbers = bombsArray[index];
                        console.log(bombNumbers);

                        // assegno le caselle bomba
                        if (i === bombNumbers) {
                            littleSquare.innerHTML = "bomba" //DEBUG
                        }
                    }
                    

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

// devo generare 16 numeri casuali da uno a 100 e inserirli nella rispettiva casella 
