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
    containerBoard = [];

    for (var i=0; i < fieldElements.length; i++){
        fieldElements[i].innerText = ''
        startGame();
    }   
};

function selection(element){
    element.target.innerText = playerSelection

    if(playerSelection == playerHuman){
        humanArray.push(element.target.id);
        playerSelection = playerComputer
        validation();
    } else {
        computerArray.push(element.target.id);
        playerSelection = playerHuman
        validation();
    }
};

function validation(){
    console.log('VALIDANDO...')
}
