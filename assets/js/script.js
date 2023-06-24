document.addEventListener("DOMContentLoaded", function () {
    // Get the necessary DOM elements
    const startButton = document.getElementById('start-button');
    const homeScreen = document.getElementById('home-screen');
    const gameScreen = document.getElementById('game-screen');
    const gameButtons = Array.from(document.getElementsByClassName("game-btn"));
    const resultMessage = document.getElementById('result-message');
    const trainerScore = document.getElementById('trainer-score');
    const opponentScore = document.getElementById('opponent-score');

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
        const selectedPokemon = event.currentTarget.dataset.type;
        const computerPokemon = getRandomPokemon(); // Get a random Pokémon for the computer

        // Perform game logic to determine the winner
        const result = determineWinner(selectedPokemon, computerPokemon);

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
        const pokemons = ['charmander', 'bulbasaur', 'squirtle', 'pikachu', 'pidgey'];
        const randomIndex = Math.floor(Math.random() * pokemons.length);
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
