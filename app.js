
var bettingGame = {
  // Initialize player's bank balance
  playerBankroll: 100,

  playRound: function(bet, guess) {
    // Initialize new random number between 1 and 10 to guess
    var guessMe = Math.ceil(Math.random() * 10);
    // Check answer and update
    switch (guess) {
      case (guessMe + 1 || guessMe - 1):
        alert("Close!");
        break;
      case guessMe:
        this.playerBankroll += bet;
        alert("Good guess - your new balance is " + this.playerBankroll);
        break;
      default:
        this.playerBankroll -= bet;
        alert("Better luck next time... your new balance is " + this.playerBankroll);
    }
  }
};
