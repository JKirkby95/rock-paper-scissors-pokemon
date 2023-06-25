document.addEventListener("DOMContentLoaded", function () {
    // get the necessary DOM elements
    let startButton = document.getElementById('start-button');
    let homeScreen = document.getElementById('home-screen');
    let gameScreen = document.getElementById('game-screen');
    let gameButtons = Array.from(document.getElementsByClassName("game-btn"));
    let resultMessage = document.getElementById('result-message');
    let trainerScore = document.getElementById('trainer-score');
    let opponentScore = document.getElementById('opponent-score');
    let playerScore = 0;
    let computerScore = 0;
    startButton.addEventListener('click', startGame);
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
    // function to handle button click
    function handleButtonClick(event) {
        let selectedPokemon = event.currentTarget.dataset.type;
        let computerPokemon = getRandomPokemon(); // Get a random Pokémon for the computer
        // determining the winner
        let result = determineWinner(selectedPokemon, computerPokemon);
        // increment scores 
        if (result === "Player wins!") {
            playerScore++;
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
    function determineWinner(playerPokemon, computerPokemon) {
        if (playerPokemon === computerPokemon) {
            return "It's a draw!";
        } else if (
            (playerPokemon === 'charmander' && (computerPokemon === 'bulbasaur' || computerPokemon === 'pidgey')) ||
            (playerPokemon === 'squirtle' && (computerPokemon === 'charmander' || computerPokemon === 'pikachu')) ||
            (playerPokemon === 'bulbasaur' && (computerPokemon === 'squirtle' || computerPokemon === 'pikachu')) ||
            (playerPokemon === 'pikachu' && (computerPokemon === 'charmander' || computerPokemon === 'pidgey')) ||
            (playerPokemon === 'pidgey' && (computerPokemon === 'bulbasaur' || computerPokemon === 'squirtle'))
        ) {
            return "Player wins!";
        } else {
            return "Computer wins!";
        }
    }
    // function to update the score 
    function updateScoreDisplay() {
        trainerScore.textContent = playerScore;
        opponentScore.textContent = computerScore;
    }
});
