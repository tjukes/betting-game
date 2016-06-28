
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


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("play-round").addEventListener("click", function() {
    var playerBet = prompt("What's your bet? ($5 - $10)");
    var playerGuess = prompt("What's your guess? (1-10)");
    bettingGame.playRound(playerBet, playerGuess);
  });
});
