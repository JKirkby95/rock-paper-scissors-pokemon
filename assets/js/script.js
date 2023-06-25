document.addEventListener("DOMContentLoaded", function () {
    // get the necessary DOM elements
    let startButton = document.getElementById('start-button');
    let resetButton = document.getElementById('reset-button');
    let homeScreen = document.getElementById('home-screen');
    let gameScreen = document.getElementById('game-screen');
    let gameButtons = Array.from(document.getElementsByClassName("game-btn"));
    let resultMessage = document.getElementById('result-message');
    let trainerScore = document.getElementById('trainer-score');
    let opponentScore = document.getElementById('opponent-score');
    let userScore = 0;
    let computerScore = 0;
    startButton.addEventListener('click', startGame);
    resetButton.addEventListener('click', resetGame);
    // function to start the game
    function startGame() {
        // hide the home screen
        homeScreen.style.display = 'none';
        // display the game screen
        gameScreen.style.display = 'block';
        // add click event listeners to each game button
        gameButtons.forEach(button => {
            button.addEventListener('click', handleButtonClick);
        });
    }
    // reset the game
    function resetGame(){
        // setting the scores to 0 to reset
        userScore = 0;
        computerScore = 0;
        // updating score display
        trainerScore.textContent = 0;
        opponentScore.textContent = 0;
        }
    // function to handle button click
    function handleButtonClick(event) {
        let selectedPokemon = event.currentTarget.dataset.type;
        let computerPokemon = getRandomPokemon(); // Get a random Pokémon for the computer
        // determining the winner
        let result = determineWinner(selectedPokemon, computerPokemon);
        // increment scores 
        if (result === "user wins!") {
            userScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }
        updateScoreDisplay();
        resultMessage.textContent = `You selected ${selectedPokemon}! The computer has selected ${computerPokemon}!  ${result}`;
    }
    // function to get a random Pokémon for the computer
    function getRandomPokemon() {
        let pokemons = ['charmander', 'bulbasaur', 'squirtle', 'pikachu', 'pidgey'];
        let randomIndex = Math.floor(Math.random() * pokemons.length);
        return pokemons[randomIndex];
    }
    // function to determine the winner
    function determineWinner(userPokemon, computerPokemon) {
        if (userPokemon === computerPokemon) {
            return "It's a draw!";
        } else if (
            (userPokemon === 'charmander' && (computerPokemon === 'bulbasaur' || computerPokemon === 'pidgey')) ||
            (userPokemon === 'squirtle' && (computerPokemon === 'charmander' || computerPokemon === 'pikachu')) ||
            (userPokemon === 'bulbasaur' && (computerPokemon === 'squirtle' || computerPokemon === 'pikachu')) ||
            (userPokemon === 'pikachu' && (computerPokemon === 'charmander' || computerPokemon === 'pidgey')) ||
            (userPokemon === 'pidgey' && (computerPokemon === 'bulbasaur' || computerPokemon === 'squirtle'))
        ) {
            return "user wins!";
        } else {
            return "Computer wins!";
        }
    }
    // function to update the score 
    function updateScoreDisplay() {
        trainerScore.textContent = userScore;
        opponentScore.textContent = computerScore;
    }
});
