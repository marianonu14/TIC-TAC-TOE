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
        validationHuman();
        playerSelection = playerComputer
    } else{
        computerArray.push(element.target.id);
        validationComputer();
        playerSelection = playerHuman
    }
};

function validationHuman(){
    for (var i=0; i < winOptions.length; i++){
        const winArray = winOptions[i];
        let position1 = [winArray[0]],
        position2 = [winArray[1]],
        position3 = [winArray[2]]

    if (position1.includes(humanArray[0]) && position2.includes(humanArray[1]) && position3.includes(humanArray[2])) {
        console.log('Human Wins')
        setTimeout(resetGame, 1000);
    }
    if (position1.includes(humanArray[0]) && position2.includes(humanArray[2]) && position3.includes(humanArray[1])) {
        console.log('Human Wins')
        setTimeout(resetGame, 1000);
    }
    if (position1.includes(humanArray[1]) && position2.includes(humanArray[0]) && position3.includes(humanArray[2])) {
        console.log('Human Wins')
        setTimeout(resetGame, 1000);
    }
    if (position1.includes(humanArray[1]) && position2.includes(humanArray[2]) && position3.includes(humanArray[0])) {
        console.log('Human Wins')
        setTimeout(resetGame, 1000);
    }
    if (position1.includes(humanArray[2]) && position2.includes(humanArray[1]) && position3.includes(humanArray[0])) {
        console.log('Human Wins')
        setTimeout(resetGame, 1000);
    }
    if (position1.includes(humanArray[2]) && position2.includes(humanArray[0]) && position3.includes(humanArray[1])) {
        console.log('Human Wins')
        setTimeout(resetGame, 1000);
    } 
  }
};

function validationComputer(){
    for (var i=0; i < winOptions.length; i++){
        const winArray = winOptions[i];
        let position1 = [winArray[0]],
        position2 = [winArray[1]],
        position3 = [winArray[2]]

    if (position1.includes(computerArray[0]) && position2.includes(computerArray[1]) && position3.includes(computerArray[2])) {
        console.log('Computer Wins')
        setTimeout(resetGame, 1000);
    }
    if (position1.includes(computerArray[0]) && position2.includes(computerArray[2]) && position3.includes(computerArray[1])) {
        console.log('Computer Wins')
        setTimeout(resetGame, 1000);
    }
    if (position1.includes(computerArray[1]) && position2.includes(computerArray[0]) && position3.includes(computerArray[2])) {
        console.log('Computer Wins')
        setTimeout(resetGame, 1000);
    }
    if (position1.includes(computerArray[1]) && position2.includes(computerArray[2]) && position3.includes(computerArray[0])) {
        console.log('Computer Wins')
        setTimeout(resetGame, 1000);
    }
    if (position1.includes(computerArray[2]) && position2.includes(computerArray[1]) && position3.includes(computerArray[0])) {
        console.log('Computer Wins')
        setTimeout(resetGame, 1000);
    }
    if (position1.includes(computerArray[2]) && position2.includes(computerArray[0]) && position3.includes(computerArray[1])) {
        console.log('Computer Wins')
        setTimeout(resetGame, 1000);
    }
  }
}
