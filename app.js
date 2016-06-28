
$(document).ready(function() {

  function bettingGame(starting_balance) {
    // Initialize player's bank balance
    this.playerBankroll = starting_balance,

    this.playRound = function(bet, guess) {
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
          $("span#current-balance").text(this.playerBankroll);
          break;
        default:
          this.playerBankroll -= bet;
          alert("Better luck next time... your new balance is " + this.playerBankroll);
          $("span#current-balance").text(this.playerBankroll);
      }
    }
  };

  var newGame = new bettingGame(100);

  $("button#play-round").on("click", function() {
    var playerBet = $("select#bet").val();
    var playerGuess = $("input#guess").val();
    newGame.playRound(playerBet, playerGuess);
  });

});
