class RockPaperScissors {
    constructor() {
        this._computerOptions = ['Rock', 'Paper', 'Scissors'];

        this._playerScore = 0;
        this._computerScore = 0

        this._playerChoice = null;
        this._computerChoice = null;

        this._winnerMessage;
        this._roundMessage;

        this._loadHTMLElements();
        this._loadEventListeners();
    }

    // Loads all HTML elements from the web page.
    _loadHTMLElements() {
        // Elements associated with the game's display container.
        this._winnerDisplay = document.getElementById('winnerDisplay');
        this._roundDisplay = document.getElementById('roundDisplay');
        this._userScoreDisplay = document.getElementById('userScore');
        this._computerScoreDisplay = document.getElementById('computerScore');

        // Elements associated with the game's controls.
        this._userChoiceDisplay = document.getElementById('userChoiceDisplay');
        this._confirmChoiceBtn = document.getElementById('confirmChoice');
        this._userChoiceButtons = document.getElementById('userChoices');
        this._resetGameBtn = document.getElementById('resetBtn');
    }

    // Loads all the default eventListeners for the webpage's elements.
    _loadEventListeners() {
        let buttonList = this._userChoiceButtons.querySelectorAll('input');
        buttonList.forEach(button => {
            button.addEventListener('click', (e) => {
                this._playerChoice = e.target.value;
                this._loadUserChoice();
            })
        })

        this._confirmChoiceBtn.addEventListener('click', this._playRound.bind(this));
    }

    _loadUserChoice() {
        this._userChoiceDisplay.innerHTML = this._playerChoice;
        this._loadComputerChoice();
        this._confirmChoiceBtn.style.display = 'block';
    }

    _loadComputerChoice() {
        let random = Math.floor(Math.random() * this._computerOptions.length);
        this._computerChoice = this._computerOptions[random];
    }

    _playRound() {
        console.log(this._playerChoice, this._computerChoice);
    }
}

let newGame = new RockPaperScissors();