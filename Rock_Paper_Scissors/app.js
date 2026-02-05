let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice[id]");
const msg = document.getElementById("msg");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");


const getComchoice=()=>{
    
    const options = ["rock", "paper", "scissors"];
    const compind = Math.floor(Math.random()*options.length);
    return options[compind];
};

const showwinner=(userwin,Userchoice,Comchoice)=>{
    if(userwin)
    {
        userScore++;
        userScore_span.innerHTML = userScore;
        msg.innerHTML = `You Win! your ${Userchoice} beats ${Comchoice}`;
        msg.style.color = "green";
    }
    else{
       
        computerScore++;
        computerScore_span.innerHTML = computerScore;
        msg.innerHTML = `AI Buddy Wins! ${Comchoice} beats your ${Userchoice}`;
        msg.style.color = "red";
    }
};

const drawGame=()=>{
    msg.innerHTML = "It's a Draw!";
    msg.style.color = "gray";
};

const playgame=(Userchoice)=>{
    console.log("User choice is =",Userchoice);
    const Comchoice = getComchoice();
    console.log("Computer choice is =",Comchoice);

   
    if(Userchoice === Comchoice){
        drawGame();
        return;
    }
   let userwin = true;
   if(Userchoice === "rock")
   {
    userwin = Comchoice === "scissors" ? true : false;
   }
   else if(Userchoice === "paper")
   {
    userwin = Comchoice === "rock" ? true : false;
   }
   else {
    userwin = Comchoice === "paper" ? true : false;
   }
  
   return showwinner(userwin,Userchoice,Comchoice);
};


choices.forEach((choice)=>{   
    choice.addEventListener("click", ()=>{
        const Userchoice = choice.getAttribute("id");
      playgame(Userchoice);
    });
});