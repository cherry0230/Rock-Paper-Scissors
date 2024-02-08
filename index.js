const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a tie!";
    }
    else{
        switch(playerChoice){
            case "Rock":
              result =  (computerChoice === "Scissors") ? "You Win" : "You Lose";
              break;
            
            case "Paper":
              result =  (computerChoice === "Rock") ? "You Win" : "You Lose";
                break;
                
                
            case "Scissors":
              result =  (computerChoice === "Paper") ? "You Win" : "You Lose";    
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "You Win":
            resultDisplay.classList.add("greenText");
            break;
        
        case "You Lose":
            resultDisplay.classList.add("redText");    
            break;
    }
}