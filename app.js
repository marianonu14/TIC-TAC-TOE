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
        validation();
        playerSelection = playerComputer
    } else {
        computerArray.push(element.target.id);
        validation();
        playerSelection = playerHuman
    }
};

function validation(){
    for (var i=0; i < winOptions.length; i++){
        console.log(winOptions[i].some(array => array.includes(humanArray)));
    }   
}


const array1 = [0,1,3];

const array2 = [0,1,3];

console.log(array1.includes(0, 1));