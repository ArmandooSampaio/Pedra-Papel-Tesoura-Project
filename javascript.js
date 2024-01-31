function getComputerChoice(){
    let randomDecimal = Math.random();
    let randomInteiro = Math.floor(randomDecimal * 3) + 1
    let computerChoice;

    switch(randomInteiro){
        case 1: 
            computerChoice = "pedra";
            break;
        case 2:
            computerChoice= "papel";
            break;
        case 3:
            computerChoice  = "tesoura";
            break;
    }
    return computerChoice;
}






