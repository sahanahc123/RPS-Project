let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#Comp-score");

 
const genCompChoice = () => {

    const options = ["rock", "paper", "scissors"];
     const randIdx = Math.floor(Math.random() *3); //to generate random number
     return options[randIdx];
};

const drawGame = () =>{
    msg.innerText = "Game was draw.Play again!";
    msg.style.backgroundColor ="#081b31";
  };

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin)// if userWin Value becomes true
    { userScore++;
      userScorePara.innerText =userScore;
      msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor ="green";
    } else {
       compScore++;
       compScorePara.innerText = compScore;
       msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
       msg.style.backgroundColor ="red";
    }
};

const playGame = (userChoice) => {
    //Generate computer choice ->modular way(pieces of functions)
    const compChoice = genCompChoice();
    if(userChoice === compChoice) {
        //Draw Game
       drawGame(); 
     } else {
        let userWin= true;
        if(userChoice === "rock"){
            //scissors,paper
          userWin = compChoice === "paper"?false :true;//userWin is tracking whether comp or user is einning the game, by evaluating true and false;
        } else if(userChoice === "paper") {
            //scissor,rock
          userWin = compChoice === "scissors"?false :true;
        } else {
        //rock, paper
        userWin = compChoice === "rock"?false :true;

        }
      showWinner(userWin , userChoice, compChoice);       
       }
    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
     const userChoice = choice.getAttribute("id");
     playGame(userChoice);
     });
});