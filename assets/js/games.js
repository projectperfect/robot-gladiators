var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  while (enemyHealth > 0 && enemyHealth > 0) {
    // ask the player if they'd like to fight or run
    var promptFight = window.prompt(
      "Woul you like to FIGHT or SKIP this battle? Enter 'FIGHT' OR 'SKIP' to choose."
    );

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    }

    // if yes (true), then fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney);
      break;
    }
  }
};
