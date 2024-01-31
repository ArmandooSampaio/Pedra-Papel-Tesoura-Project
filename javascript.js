function getComputerChoice() {
    const randomInteiro = Math.floor(Math.random() * 3) + 1;
    return (randomInteiro === 1) ? "pedra" : (randomInteiro === 2) ? "papel" : "tesoura";
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === computerChoice) {
        return "empatou";
    } else if (
        (playerChoice === "pedra" && computerChoice === "tesoura") ||
        (playerChoice === "papel" && computerChoice === "pedra") ||
        (playerChoice === "tesoura" && computerChoice === "papel")
    ) {
        return "ganhou";
    } else {
        return "perdeu";
    }
}








