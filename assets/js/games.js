var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemy1 = "Roborto";
var enemy2 = "Amy Android";
var enemy3 = "Robo Trumble";

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var playerName = window.prompt("What is your robot's name?");
var promptFight = window.prompt(
  "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
);

if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - enemyAttack;
  console.log(
    playerName +
      "attacked " +
      enemyName +
      ". " +
      enemyName +
      " now has" +
      enemyHealth +
      " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttck variable

  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName +
      " attacked " +
      playername +
      ". " +
      playerName +
      " now has " +
      playerHealth +
      " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

  // if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  var confirmSkip = window.confirm("Are you sure you'd like  to quit?");
  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // substract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
  } else {
    fight();
  }
} else {
  window.alert("You need to choose a valid option. Try again!");
}

var fight = function () {
  // alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  enemyHealth = enemyHealth - playerAttack;

  console.log(
    playerName +
      " attacked " +
      enemyName +
      ". " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  playerHealth = playerHealth - enemyAttack;

  console.log(
    enemyName +
      " attacked " +
      playerName +
      ". " +
      playerName +
      " now has " +
      playerHealth +
      " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
};

//fight();
