const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const scissor = document.querySelector('.scissor');
const result = document.querySelector('.results');
let compScore = document.querySelector('.comp-value');
let yourScore = document.querySelector('.your-value');

let yourChoice = null;

paper.addEventListener('click', () => {
    yourChoice = 'paper';
    console.log('paper clicked');
    scoreCal(computerChoice(), yourChoice);
});


scissor.addEventListener('click', () => {
    yourChoice = 'scissor';
    console.log('scissor clicked');
    scoreCal(computerChoice(), yourChoice);
});

rock.addEventListener('click', () => {
    yourChoice = 'rock';
    console.log('rock clicked');
    scoreCal(computerChoice(), yourChoice);
});

const computerChoice = () => {
    const choices = ['paper', 'rock', 'scissor'];
    let finalComp = choices[Math.floor(Math.random() * choices.length)];
    console.log(`computer choice is ${finalComp}`)
    return finalComp;
};

const scoreCal = (finalComp, yourChoice) => {
    let cs = parseInt(compScore.innerText);
    let ys = parseInt(yourScore.innerText);
    if (isNaN(cs)) cs = 0;
    if (isNaN(ys)) ys = 0;
    if (finalComp === yourChoice) {
        result.innerText = 'draw';
        console.log('draw');
    } else if (finalComp === 'paper' && yourChoice === 'rock') {
        result.innerText = 'Computer wins';
        cs += 1;
        compScore.innerText = cs.toString();
        console.log('computer wins');
    } else if (finalComp === 'paper' && yourChoice === 'scissor') {
        result.innerText = 'You won';
        ys += 1;
        yourScore.innerText = ys.toString();
        console.log('you win');
    } else if (finalComp === 'rock' && yourChoice === 'scissor') {
        result.innerText = 'Computer wins';
        cs += 1;
        compScore.innerText = cs.toString();
        console.log('computer wins');
    } else if (finalComp === 'rock' && yourChoice === 'paper') {
        result.innerText = 'You won';
        ys += 1;
        yourScore.innerText = ys.toString();
        console.log('you win');
    } else if (finalComp === 'scissor' && yourChoice === 'paper') {
        result.innerText = 'Computer wins';
        cs += 1;
        compScore.innerText = cs.toString();
        console.log('computer wins');
    } else if (finalComp === 'scissor' && yourChoice === 'rock') {
        result.innerText = 'You won';
        ys += 1;
        yourScore.innerText = ys.toString();
        console.log('you win');
    }
};
