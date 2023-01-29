var fightOrSkip = function () {
  // ask the player if they'd like to fight or run
  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' OR 'SKIP' to choose."
  );

  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  }

  // if yes (true), then fight
  if (confirmSkip) {
    window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerInfo.money = Math.max(0, playerInfo.money - 10);
  }
};

// function to set name
var getPlayerName = function () {
  var name = "";

  // loop
  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
    window.alert("You need  to provide a valid answer! Please try again.");
    return fightOrSkip();
  }

  console.log("Your robot's name is " + name);

  return name;
};

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: random(10, 14),
  },
  {
    name: "Amy Android",
    attack: random(10, 14),
  },
  {
    name: "Robo Trumble",
    attack: random(10, 14),
  },
];

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

enemy.health = Math.floor(Math.random() * 21) + 40;
enemy.attack = 12;

var fight = function (pickedEnemyObj) {
  // generate random damage value based on player's attack power
  while (enemy.health > 0 && enemy.health > 0) {
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemy.health = randomNumber();

      // use debugger to pause script from running and check what's going on at that moment in the code debugger;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter fight(pickedEnemyName);
    } else {
      window.alert("You have lost your robot in battle Game Over!");
      break;
    }

    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemy.health = Math.max(0, enemy.health - playerInfo.attack);

    console.log(
      playerInfo.name +
        " attacked " +
        enemy.name +
        ". " +
        enemy.name +
        " now has " +
        enemy.health +
        " health remaining."
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);

    console.log(
      enemy.name +
        " attacked" +
        playerInfo.name +
        " ." +
        playerInfo.name +
        " now has" +
        playerInfo.health +
        " health remaining."
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(
        playerInfo.name + " still has " + playerInfo.health + " health left."
      );
    }

    startGame();
  } // end while loop
}; // end fight function

// function to start a new game
var startGame = function () {
  // reset player stats
  playerInfo.reset();
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyInfo[i];

      pickedEnemyObj.health = randomNumber(40, 60);

      if (pickedEnemyName);
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  var endGame = function () {
    // if player is still alive, player wins!

    if (playerInfo.health > 0) {
      window.alert(
        "Great job, you've survived the game! You now have a score " +
          playerInfo.money +
          "."
      );
    } else {
      window.alert("You've lost your robot in battle.");
    }
  };

  var shop = function () {
    console.log("entered the shop");

    // ask the player what'd they like to do

    var shopOptionPrompt = window.prompt(
      "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'type 1 -> REFILL', 'type 2 -> UPGRADE', or 'type 3 -> LEAVE' to leave the store"
    );

    shopOptionPrompt = parseInt(shopOptionPrompt);

    switch (shopOptionPrompt) {
      case 1:
        // increase health and decrease money
        playerInfo.refillHealth();
        break;

      case 2:
        playerInfo.upgradeAttack();

        break;

      case 3:
        window.alert("Leaving the store.");

        // do nothing, so function will end
        break;

      default:
        window.alert("You did not pick a valid option. Try again");

        // call shop() again to force player to pick a valid option
        shop();
        break;
    }
  };

  // function to end the entire game
  var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");
  };

  // function to generate a random numeric value
  var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
  };

  // play again
  startGame();
};

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,

  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },

  refillHealth: function () {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.helath += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },

  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have enouth money!");
    }
  },
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: random(10, 14),
  },
  {
    name: "Amy Android",
    attack: random(10, 14),
  },
  {
    name: "Robo Trumble",
    attack: random(10, 14),
  },
];

// ask the player if they'd like to play again

var playAgainConfirm = window.confirm("Would you like to play again?");

// if we're not at the last enemy in the array

if (i < enemyNames.length - 1) {
  if (playerInfo.health > 0 && i < enemyNames.length - 1) {
    // ask if the player wants to use the store before the next round

    var storeConfirm = window.confirm(
      "The fight is over, visit the store before the next round?"
    );
    // if yes, take them to the store() function
    if (storeConfirm) {
      shop();
    }
  }
  shop();
}

if (playAgainConfirm) {
  // restart the game
  startGame();
} else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}

while (playerInfo.health > 0 && enemy.health > 0) {
  fightOrSkip();
}
