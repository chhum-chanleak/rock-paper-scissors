const getComputerChoice = () => {

  let randomNum = Math.floor(Math.random() * 3);
  let choice = "";

  if (randomNum === 1) {
    choice = "Rock";
    return choice.toLowerCase();
  } else if (randomNum === 2) {
    choice = "Paper";
    return choice.toLowerCase();
  } else {
    choice = "Scissors";
    return choice.toLowerCase();
  }
};

// Ask user to input 'Rock', 'Paper', or 'Scissor' 
const getHumanChoice = () => {

  let humanChoice = prompt("Choose 'Rock', 'Paper', or 'Scissors'. : ");
  
  return humanChoice ? humanChoice.toLocaleLowerCase() : "You did not pick one of the three choices.";
};








