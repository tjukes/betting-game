
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
          $("div.result-message").text("The random number was " + guessMe + ". Close but no cigar (smoking's bad anyway).");
          break;
        case guessMe:
          this.playerBankroll += bet;
          $("div.result-message").text("The random number was " + guessMe + ". Good guess - your new balance is " + this.playerBankroll);
          $("span#current-balance").text(this.playerBankroll);
          break;
        default:
          this.playerBankroll -= bet;
          $("div.result-message").text("The random number was " + guessMe + ". Better luck next time... your new balance is " + this.playerBankroll);
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

  $("button#new-game").on("click", function() {
    newGame = new bettingGame(100);
    $("span#current-balance").text(newGame.playerBankroll);
    $("div.result-message").text("Your balance has been reset. Fake gamble away.");
  });

});
