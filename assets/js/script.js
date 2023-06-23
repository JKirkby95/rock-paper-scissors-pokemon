// Get the necessary DOM elements
const homeScreen = document.getElementById('home-screen');
const startButton = document.getElementById('start-button');
const gameScreen = document.getElementById('game-screen');

// Add event listeners
startButton.addEventListener('click', startGame);

// Function to start the game
function startGame() {
  // Hide the home screen
  homeScreen.style.display = 'none';
  
  // Display the game screen
  gameScreen.style.display = 'block';
  
}
