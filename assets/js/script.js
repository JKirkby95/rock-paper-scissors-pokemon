document.addEventListener("DOMContentLoaded", function () {
    // Get the necessary DOM elements
    const startButton = document.getElementById('start-button');
    const homeScreen = document.getElementById('home-screen');
    const gameScreen = document.getElementById('game-screen');
    const gameButtons = Array.from(document.getElementsByClassName("game-btn"));

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
        
        // Display the result to the user
        console.log(`Selected Pokémon: ${selectedPokemon}`);
        console.log(`Computer Pokémon: ${computerPokemon}`);
        console.log(`Result: ${result}`);
    }

    // Function to get a random Pokémon for the computer
    function getRandomPokemon() {
        const pokemons = ['charmander', 'bulbasaur', 'squirtle', 'pikachu', 'pidgey'];
        const randomIndex = Math.floor(Math.random() * pokemons.length);
        return pokemons[randomIndex];
    }

    // Function to determine the winner based on game rules

