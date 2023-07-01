document.addEventListener("DOMContentLoaded", function () {
    // get the necessary DOM elements
    let startButton = document.getElementById('start-button');
    let resetButton = document.getElementById('reset-button');
    let homeScreen = document.getElementById('home-screen');
    let startAgainButtons = document.getElementsByClassName('start-again-button');
    let gameScreen = document.getElementById('game-screen');
    let winnerScreen = document.getElementById('winner-screen');
    let loserScreen = document.getElementById('loser-screen');
    let gameButtons = Array.from(document.getElementsByClassName("game-btn"));
    let resultMessage = document.getElementById('result-message');
    let selectedList = document.getElementById('selected-list');
    // scores section
    let trainerScore = document.getElementById('trainer-score');
    let opponentScore = document.getElementById('opponent-score');
    let userScore = 0;
    let computerScore = 0;
    // pokemon selected by the user
    let selectedCharmander = document.getElementById('selected-charmander');
    let selectedBulbasaur = document.getElementById('selected-bulbasaur');
    let selectedSquirtle = document.getElementById('selected-squirtle');
    let selectedPidgey = document.getElementById('selected-pidgey');
    let selectedPikachu = document.getElementById('selected-pikachu');
    // pokemon selected by the computer
    let computerCharmander = document.getElementById('computer-charmander');
    let computerBulbasaur = document.getElementById('computer-bulbasaur');
    let computerSquirtle = document.getElementById('computer-squirtle');
    let computerPidgey = document.getElementById('computer-pidgey');
    let computerPikachu = document.getElementById('computer-pikachu');

    // add event listeners
    startButton.addEventListener('click', startGame);
    resetButton.addEventListener('click', resetGame);
    // need to loop through the start again buttons because I have multiple identicle buttons
    for (let i = 0; i < startAgainButtons.length; i++) {
        startAgainButtons[i].addEventListener('click', startAgain);
    }
    // function to start the game
    function startGame() {
        // hide the home screen
        homeScreen.style.display = 'none';
        // display the game screen
        gameScreen.style.display = 'block';
        // hide the winner screen
        winnerScreen.style.display = 'none';
        // hide the loser screen
        loserScreen.style.display = 'none';
        // hide vs text when starting game
        selectedList.style.display = "none";
        // add click event listeners to each game button
        gameButtons.forEach(button => {
            button.addEventListener('click', handleButtonClick);
        });
    }
    // reset the game
    function resetGame() {
        // setting the scores to 0 to reset
        userScore = 0;
        computerScore = 0;
        // updating score display
        trainerScore.textContent = 0;
        opponentScore.textContent = 0;
        // clear the result message
        resultMessage.textContent = " ";
        // clear text box for result
        resultMessage.style.display = "none";
        // clear the pokemon vs icons
        selectedList.style.display = "none";
    }
    // restart the game after result
    function startAgain() {
        startGame();
        resetGame();
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
        resultMessage.innerHTML = `You selected <span>${selectedPokemon}!</span><br>The computer has selected <span>${computerPokemon}!</span><br>${result}`;
        resultMessage.style.display = "block";
        selectedList.style.display = "block";
        updateSelectedPokemons(selectedPokemon);
        updateComputerPokemon(computerPokemon);
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

        if (userScore === 3) {
            winner();
        } else if (computerScore === 3) {
            loser();
        }
    }
    // shows the user a gif saying winner
    function winner() {
        gameScreen.style.display = 'none';
        winnerScreen.style.display = 'block';
        console.log("testing winner")
    }
    function loser() {
        gameScreen.style.display = 'none';
        loserScreen.style.display = 'block';
        console.log("testing loser")
    }
    function updateSelectedPokemons(userPokemon) {
        selectedCharmander.style.display = 'none';
        selectedBulbasaur.style.display = 'none';
        selectedSquirtle.style.display = 'none';
        selectedPidgey.style.display = 'none';
        selectedPikachu.style.display = 'none';

        // show the selected Pokémon by the user
        if (userPokemon === 'charmander') {
            selectedCharmander.style.display = 'block';
        } else if (userPokemon === 'bulbasaur') {
            selectedBulbasaur.style.display = 'block';
        } else if (userPokemon === 'squirtle') {
            selectedSquirtle.style.display = 'block';
        } else if (userPokemon === 'pidgey') {
            selectedPidgey.style.display = 'block';
        } else if (userPokemon === 'pikachu') {
            selectedPikachu.style.display = 'block';
        }
    }
    function updateComputerPokemon(computerPokemon) {
        computerCharmander.style.display = 'none';
        computerBulbasaur.style.display = 'none';
        computerSquirtle.style.display = 'none';
        computerPidgey.style.display = 'none';
        computerPikachu.style.display = 'none';

        // show the computer selected pokemon
        if (computerPokemon === 'charmander') {
            computerCharmander.style.display = 'block';
        } else if (computerPokemon === 'bulbasaur') {
            computerBulbasaur.style.display = 'block';
        } else if (computerPokemon === 'squirtle') {
            computerSquirtle.style.display = 'block';
        } else if (computerPokemon === 'pidgey') {
            computerPidgey.style.display = 'block';
        } else if (computerPokemon === 'pikachu') {
            computerPikachu.style.display = 'block';
        }
    }
});
