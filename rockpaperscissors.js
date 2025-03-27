const rock = 0;
const paper = 1;
const scissors = 2;

// Generate random choices
const randomNum = Math.floor(Math.random() * 3);
const compNum = Math.floor(Math.random() * 3);

// Function to convert numbers to their respective choices
function getChoice(num) {
  if (num === rock) return "Rock";
  if (num === paper) return "Paper";
  if (num === scissors) return "Scissors";
}

// Print player and computer choices dynamically
console.log(`Player picked:      ${getChoice(randomNum)}`);
console.log(`Computer picked:    ${getChoice(compNum)}`);
console.log(" ");

// Determine winner
if (randomNum === compNum) { 
  console.log("It's a Tie!");
} else if (
  (randomNum === rock && compNum === scissors) ||
  (randomNum === paper && compNum === rock) ||
  (randomNum === scissors && compNum === paper)
) {
  console.log("Player Wins! 🎉");
} else {
  console.log("Computer Wins! 🤖");
}
