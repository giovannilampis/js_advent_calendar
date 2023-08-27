"use strict"

// OPERAZIONI PRELIMINARI

// RACCOGLIERE TUTTI GLI ELEMENTI

const calendar = document.querySelector('.calendar');

const modal = document.querySelector('#modal');

const modalContent = document.querySelector('.modal-content');

const modalButton = document.querySelector('.modal-button'); 

// preparare un elenco con gli indici delle finestre aperte
let openedIndexes =[];
console.log(openedIndexes);


/*----------------------------------
OPERAZIONI DI AVVIO
------------------------------------*/

// controllare se vi erano indici salvati
const previouslyOpenedIndexes = localStorage.getItem('my-list');
// se c'è
if(previouslyOpenedIndexes) {
const previouslyOpenedIndexes = localStorage.getItem('my-list');
    openedIndexes = JSON.parse(previouslyOpenedIndexes);
    console.log(openedIndexes);
}

// renderizzare finestrelle

// cose da fare per ogni elemento della finestrella
for (let i = 0; i < source.length; i++) {
// creare una finestrella

const box = createBox(i);

// agganciare la finestrella al calendario in pagina

    calendar.innerHTML += box;
}

// EVENTI DINAMICI

// rendere cliccabili le finestrelle
const boxes = document.querySelectorAll('.box');

for (let i = 0; i < boxes.length; i++) {
    // prendo ad ogni giro il box corrente
    const box = boxes[i];

    // rendo cliccabile il box
    box.addEventListener('click', function(){
        // fai apparire questo box come se fosse aperto
        box.classList.add('box-opened');

        // riempire la modale
        insertModalContent(i);

        // apri la modale
        openModal();

        // aggiungere ID alla lista delle finestre aperte
        addOpenedIndexes(i);
    })
} 

// rendere il bottone cliccabile
modalButton.addEventListener('click', function(){
    closeModal();
});

// FUNZIONI

// funzione per creare un box 

function createBox(i) {
    const date = i + 1;

    const icon = source[i].icon;

    const classes = "box";
    return ` 
    <div class="box"> 
        <img class="box-icon" src="./images/icons/${icon}.png" alt="icon">
        <div class="box-date">${date}</div>
    </div>
    `;
}

// funzione per aprire la modale
function openModal(){
    modal.classList.remove('modal-hidden');
}

// funzione per chiudere la modale
function closeModal(){
    modal.classList.add('modal-hidden');
}

// funzione per riempire la modale
function insertModalContent(i){
    const surprise = source[i];
    if(surprise.type == "image") {
    modalContent.innerHTML = `<img src="${surprise.url}" alt="${surprise.title}">`
    } else if(surprise.type == "text") {
        modalContent.innerHTML = `<p>${surprise.text}</p>`;
    }
}

// funzione per aggiungere l'indice alla lista
function addToOpenedIndexes(i) {
    if(!openedIndexes.includes(i)) {
        //aggiungo alla lista
        openedIndexes.push(i);
        console.log(openedIndexes);

        //aggiungo al local storage
        localStorage.setItem('my-list', JSON.stringify(openedIndexes));
    }
   
}

