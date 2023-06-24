document.addEventListener("DOMContentLoaded", function () {
    // Get the necessary DOM elements
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

    // Function to start the game
    function startGame() {
        // Hide the home screen
        homeScreen.style.display = 'none';

        // Display the game screen
        gameScreen.style.display = 'block';

        // Add click event listeners to each game button
        gameButtons.forEach(button => {
            button.addEventListener('click', handleButtonClick);
        });
    }

    // Function to handle button click
    function handleButtonClick(event) {
        let selectedPokemon = event.currentTarget.dataset.type;
        let computerPokemon = getRandomPokemon(); // Get a random Pokémon for the computer

        // Perform game logic to determine the winner
        let result = determineWinner(selectedPokemon, computerPokemon);

        // Increment scores and display the result to the user
        if (result === "Player wins!") {
            playerScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }
        
        updateScoreDisplay();
        resultMessage.textContent = `Selected Pokémon: ${selectedPokemon}\nComputer Pokémon: ${computerPokemon}\nResult: ${result}`;
    }

    // Function to get a random Pokémon for the computer
    function getRandomPokemon() {
        let pokemons = ['charmander', 'bulbasaur', 'squirtle', 'pikachu', 'pidgey'];
        let randomIndex = Math.floor(Math.random() * pokemons.length);
        return pokemons[randomIndex];
    }

    // Function to determine the winner based on game rules
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

    // Function to update the score display
    function updateScoreDisplay() {
        trainerScore.textContent = playerScore;
        opponentScore.textContent = computerScore;
    }
});
