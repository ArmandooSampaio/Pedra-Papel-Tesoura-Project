function getComputerChoice() {
    const randomInteiro = Math.floor(Math.random() * 3) + 1;
    return (randomInteiro === 1) ? "pedra" : (randomInteiro === 2) ? "papel" : "tesoura";
}

function playRound(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    let computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        return div.textContent = 'Empatou';
    } else if (
        (playerChoice === "pedra" && computerChoice === "tesoura") ||
        (playerChoice === "papel" && computerChoice === "pedra") ||
        (playerChoice === "tesoura" && computerChoice === "papel")
    ) {
        return div.textContent = 'Ganhou';
    } else {
        return div.textContent = 'Perdeu';
    }
}

const pedraBtn = document.querySelector('.pedra-btn');
const papelBtn = document.querySelector('.papel-btn');
const tesouraBtn = document.querySelector('.tesoura-btn');
const div = document.querySelector('.result');

pedraBtn.addEventListener('click', () => playRound('pedra'));
papelBtn.addEventListener('click', () => playRound('papel'));
tesouraBtn.addEventListener('click', () => playRound('tesoura'));





