let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");



const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
const startGame = document.getElementById("startMessage")

function getComputerChoice(){
    const choices = ["r", "p" , "s"]
    const randomNumbers =  Math.floor(Math.random() * 3);
    return choices[randomNumbers];
}

function convert(letter){
    if(letter === "r")return "Rock"
    if(letter === "p")return "Paper"
    return "Scissors"
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML= userScore;
    startGame.innerHTML = `${convert(userChoice)} beats ${convert(computerChoice)} You win!`
    const user = document.getElementById(userChoice);
    user.classList.add("greenglow");
    setTimeout(function(){user.classList.remove("greenglow")}, 300)
}


function lose(userChoice,computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    startGame.innerHTML = `${convert(userChoice)} lost to ${convert(computerChoice)} You lost!`
    const user = document.getElementById(userChoice);
    user.classList.add("redglow")
    setTimeout(function(){user.classList.remove("redglow")} ,  300)
}

function draw(userChoice,computerChoice){
    userScore_span.innerHTML= userScore;
     computerScore_span.innerHTML = computerScore;
    startGame.innerHTML = `${convert(userChoice)} equals to ${convert(computerChoice)} You draw!`
     const user = document.getElementById(userChoice);
     user.classList.add("greyglow");
     setTimeout(function(){user.classList.remove("greyglow")} , 300)
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
        win(userChoice,computerChoice);
        break;

        case "rp":
        case "ps":
        case "sr":
         lose(userChoice,computerChoice);
        break;

        case "rr":
        case "pp":
        case "ss":
        draw(userChoice,computerChoice);
        break;
    }
}




function main(){
rock.addEventListener('click', function(){
    game("r");
})

paper.addEventListener('click', function(){
    game("p");
})

scissors.addEventListener('click', function(){
    game("s");
})
}

main()