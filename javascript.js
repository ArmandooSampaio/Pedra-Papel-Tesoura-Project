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

function playGame(){
    let counter = 1;
    let playerWins = 0;
    let computerWins = 0;


    while(counter <= 5){
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Digite Pedra, Papel ou Tesoura");
        let result = playRound(playerChoice, computerChoice);

        if(result === "ganhou"){
            playerWins++;
        }
        alert("O computador Escolheu: " + computerChoice + "\nVocê " + result);
        counter++;
    }

    if(playerWins > computerWins){
        alert("Você ganhou a melhor de 5 Parabens");
    }else if(playerWins < computerWins){
        alert("Você Perdeu");
    }else{
        alert("Você Empatou")
    }
}


playGame();





