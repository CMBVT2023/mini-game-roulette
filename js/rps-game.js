const returnBtn = document.getElementById('return');
returnBtn.addEventListener('click', () => {
    window.location.replace('../index.html')
})


class RockPaperScissors {
    constructor() {
        this._computerOptions = ['Rock', 'Paper', 'Scissors'];

        this._playerScore = 0;
        this._computerScore = 0;

        this._winningScore = 3;

        this._playerChoice = null;
        this._computerChoice = null;

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
        let buttonList = this._userChoiceButtons.querySelectorAll('button');
        buttonList.forEach(button => {
            button.addEventListener('click', (e) => {
                if (!e.target.value) {
                    let button = e.target.parentElement;
                    this._playerChoice = button.value;
                    this._loadChoices();
                } else {
                    console.log(e.target.value)
                    this._playerChoice = e.target.value;
                    this._loadChoices();
                }
            })
        })

        this._confirmChoiceBtn.addEventListener('click', this._playRound.bind(this));


    }

    // Sets the values of the player's choice and the computer's choice, and then displays the play round
    // button to the user. The computer's choice is randomly picked.
    _loadChoices() {
        this._userChoiceDisplay.innerHTML = this._playerChoice;

        let random = Math.floor(Math.random() * this._computerOptions.length);
        this._computerChoice = this._computerOptions[random];

        this._confirmChoiceBtn.classList.remove('hidden');
    }

    // Computes the result of the round based on the player's choice and the computer's randomly decided choice.
    _playRound() {
        if (this._playerChoice || this._computerChoice) {
            let result = this._roundWinner();
            this._roundDisplay.innerHTML = result;
            this._reloadRound();
        }
    }

    _roundWinner() {
        if (this._playerChoice == this._computerChoice) {
            return `You and the computer both chose ${this._playerChoice},<br>
                    This round is a TIE!`;
        } else if ((this._playerChoice == "Rock" && this._computerChoice == "Scissors") ||
            (this._playerChoice == "Scissors" && this._computerChoice == "Paper") ||
            (this._playerChoice == "Paper" && this._computerChoice == "Rock")) {

            this._playerScore += 1;
            return `You chose ${this._playerChoice} and the computer chose ${this._computerChoice},<br>
                    You WIN this round!`
        } else {
            this._computerScore += 1;
            return `You chose ${this._playerChoice} and the computer chose ${this._computerChoice},<br>
                    You LOST this round.`
        }
    }

    _updateDisplays() {
        this._userChoiceButtons.classList.add('hidden');
        this._confirmChoiceBtn.classList.add('hidden');

        this._playerChoice = null;
        this._computerChoice = null;

        this._userScoreDisplay.innerHTML = this._playerScore;
        this._computerScoreDisplay.innerHTML = this._computerScore;
    }

    _reloadRound() {
        this._updateDisplays()
        this._userChoiceDisplay.innerHTML = 'Undecided';

        setTimeout(() => {
            if (this._playerScore == this._winningScore || this._computerScore == this._winningScore) {
                this._endGame();
            } else {
                this._roundDisplay.innerHTML = 'Make Your Move';
                this._userChoiceButtons.classList.remove('hidden');
            }
        }, 2000);
    }

    _endGame() {
        this._updateDisplays()
        this._userChoiceDisplay.innerHTML = '';
        this._resetGameBtn.classList.remove('hidden');
        this._roundDisplay.classList.add('hidden');
        this._winnerDisplay.classList.remove('hidden');

        this._winnerDisplay.innerHTML = this._playerScore == this._winningScore ? 'Congratulations, You Have Won Against the Computer' : 'Try Again, The Computer Bested You This Time.';

        this._resetGameBtn.addEventListener('click', this._resetGame.bind(this))
    }

    _resetGame() {
        this._playerScore = 0;
        this._computerScore = 0;

        this._updateDisplays();
        this._userChoiceButtons.classList.remove('hidden');
        this._resetGameBtn.classList.add('hidden');
        
        this._winnerDisplay.classList.add('hidden');
        this._winnerDisplay.innerHTML = '';

        this._roundDisplay.classList.remove('hidden')
        this._roundDisplay.innerHTML = 'Make Your Move';
    }
}

let newGame = new RockPaperScissors();