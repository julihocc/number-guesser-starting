let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()*10);
// const generateTargetTest = generateTarget()
//console.log(generateTargetTest)

const compareGuesses = (human, computer, target) => {
    const humanError = Math.abs(human-target);
    const computerError = Math.abs(computer-target);
    return humanError <= computerError
}
// const humanWins = compareGuesses(0, 9, generateTargetTest);
//console.log(humanWins)

const updateScore = (winner) => {
    if (winner==='human') {
        humanScore++;
    }
    if (winner === 'computer') {
        computerScore++
    }
}

const advanceRound = () => {
    currentRoundNumber++
}

