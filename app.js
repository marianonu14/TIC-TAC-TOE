const fieldElements = document.querySelectorAll('.field');
const btnReset = document.querySelector('#btn-reset');
const board = document.querySelector('#board');
const playerHuman = 'O'
const playerComputer = 'X'
const winOptions = [
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    ["0","3","6"],
    ["1","4","7"],
    ["2","5","8"],
    ["0","4","8"],
    ["2","4","6"]
];

let playerSelection = playerHuman
let humanArray = [];
let computerArray = [];

startGame();

btnReset.addEventListener('click', resetGame);

function startGame(){
    fieldElements.forEach(field => {
        field.addEventListener('click', selection, {once:true})
    }); 
}
function resetGame(){
    humanArray = [];
    computerArray = [];

    for (var i=0; i < fieldElements.length; i++){
        fieldElements[i].innerText = ''
        startGame();
    }   
};

function selection(element){
    element.target.innerText = playerSelection

    if(playerSelection == playerHuman){
        humanArray.push(element.target.id);
        validation(humanArray);
        playerSelection = playerComputer
    } else{
        computerArray.push(element.target.id);
        validation(computerArray);
        playerSelection = playerHuman
    }
};

function validation(array){
    for (var i=0; i < winOptions.length; i++){
        const winArray = winOptions[i];
        let position1 = [winArray[0]],
        position2 = [winArray[1]],
        position3 = [winArray[2]]

    if (position1.includes(array[0]) && position2.includes(array[1]) && position3.includes(array[2])) {
        console.log(`${playerSelection} Wins`)
        setTimeout(resetGame, 1000);
    }
    if (position1.includes(array[0]) && position2.includes(array[2]) && position3.includes(array[1])) {
        console.log(`${playerSelection} Wins`)
        setTimeout(resetGame, 1000);
    }
    if (position1.includes(array[1]) && position2.includes(array[0]) && position3.includes(array[2])) {
        console.log(`${playerSelection} Wins`)
        setTimeout(resetGame, 1000);
    }
    if (position1.includes(array[1]) && position2.includes(array[2]) && position3.includes(array[0])) {
        console.log(`${playerSelection} Wins`)
        setTimeout(resetGame, 1000);
    }
    if (position1.includes(array[2]) && position2.includes(array[1]) && position3.includes(array[0])) {
        console.log(`${playerSelection} Wins`)
        setTimeout(resetGame, 1000);
    }
    if (position1.includes(array[2]) && position2.includes(array[0]) && position3.includes(array[1])) {
        console.log(`${array} Wins`)
        setTimeout(resetGame, 1000);
    }
  }
}
