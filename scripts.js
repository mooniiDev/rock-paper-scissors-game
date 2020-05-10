const weaponsButtons = document.querySelectorAll('.weapon-button');
const gameOutput = document.querySelector('.game-output');
const rounds = document.querySelector('.round');
const computerPlayDiv = document.querySelector('.grey-border');
const lives = document.querySelector('.lives');
const combatText = document.querySelector('.combat-text');
const buttonPlayAgain = document.querySelector('.play-again');

let playerLives = 5;
let computerLives = 5;
let round = 1;

playGame();

function playGame() {
  weaponsButtons.forEach((weapon) => {
    weapon.addEventListener('click', function() {
      const weaponIcons = document.querySelectorAll('.weapon-icon');
      if (weapon.classList.contains('wand-button')) {
        weaponIcons[0].style.color = '#8070ac';
        weaponIcons[1].style.color = '#5e5e5e';
        weaponIcons[2].style.color = '#5e5e5e';
        playerSelection = 'wand';
      } else if (weapon.classList.contains('bow-button')) {
        weaponIcons[1].style.color = '#62b49c';
        weaponIcons[0].style.color = '#5e5e5e';
        weaponIcons[2].style.color = '#5e5e5e';
        playerSelection = 'bow';
      } else {
        weaponIcons[2].style.color = '#b96b78';
        weaponIcons[0].style.color = '#5e5e5e';
        weaponIcons[1].style.color = '#5e5e5e';
        playerSelection = 'mace';
      }
      countRounds();
      countLives(playerSelection, computerPlay());
      endGame(playerLives, computerLives);
      resetGame();
    });
  });
  return;
};

function countRounds() {
  rounds.innerText = `Round: ${round}`;
  round =+ round;
  round++;
  return round;
};

function computerPlay() {
  const weapons = ['wand', 'bow', 'mace'];
  const computerSelection = weapons[Math.floor(Math.random() * weapons.length)];
  const computerIcon = document.querySelector('.computer-icon');
  computerIcon.classList.remove('fa-skull');
  if (computerSelection === 'wand') {
    computerIcon.classList.add('fa-wand-magic');
    computerIcon.style.color = '#8070ac';
  } else if (computerSelection === 'bow') {
    computerIcon.classList.add('fa-bow-arrow');
    computerIcon.style.color = '#62b49c';
  } else if (computerSelection === 'mace'){
    computerIcon.classList.add('fa-mace');
    computerIcon.style.color = '#b96b78';
  }
  return computerSelection;
};

function countLives(playerSelection, computerSelection) {
  switch (true) {
    case (playerSelection == 'wand' && computerSelection == 'mace'):
    case (playerSelection == 'bow' && computerSelection == 'wand'):
    case (playerSelection == 'mace' && computerSelection == 'bow'):
      combatText.textContent = `Impressive Attack! The enemy lost one life, because the great power of your ${playerSelection} crushed his ${computerSelection}!`;
      gameOutput.style.border = '4px solid #62b49c';
      computerPlayDiv.classList.remove('grey-border', 'red-border', 'purple-border');
      computerPlayDiv.classList.add('green-border');
      computerLives--;
      break;
    case (playerSelection == 'wand' && computerSelection == 'bow'):
    case (playerSelection == 'bow' && computerSelection == 'mace'):
    case (playerSelection == 'mace' && computerSelection == 'wand'):
      combatText.innerText = `Unfortunate Defeat.. You lost one life, because your ${playerSelection} lacks of power against enemy's ${computerSelection}!`;
      gameOutput.style.border = '4px solid #b96b78';
      computerPlayDiv.classList.remove('grey-border', 'green-border', 'purple-border');
      computerPlayDiv.classList.add('red-border');
      playerLives--;
      break;
    case (playerSelection == computerSelection):
      combatText.innerText = `Hmm.. Two ${playerSelection}s means a draw, so no lives were lost. Let's try again.`;
      gameOutput.style.border = '4px solid #8070ac';
      computerPlayDiv.classList.remove('grey-border', 'green-border', 'red-border');
      computerPlayDiv.classList.add('purple-border');
      break;
  }
  lives.innerText = `Your Lives: ${playerLives} ︱ Enemy Lives: ${computerLives}`;
  return [playerLives, computerLives];
};

function endGame(playerLives, computerLives) {
  const gameEndText = document.querySelector('.game-end-text');
  if (playerLives === 0 || computerLives === 0) {
    for(let i = 0; i < weaponsButtons.length; i++) {
      weaponsButtons[i].disabled = true;
      weaponsButtons[i].classList.add('disabled-button');
      weaponsButtons[i].style.opacity = '0.5';
    };
    if (playerLives > computerLives) {
      combatText.innerText = 'Hehe, poor enemy has no life left.. He barely holds himself in one piece.';
      gameEndText.textContent = 'You Won This Battle!';
      gameEndText.style.color = '#62b49c';
    } else {
      combatText.innerText = 'Ouch.. No life left for you. Enjoy the mocking enemy laughter.';
      gameEndText.textContent = 'You Lost This Battle!';
      gameEndText.style.color = '#b96b78';
    };
    buttonPlayAgain.style.visibility = 'visible';
  };
  return;
};

function resetGame() {
  buttonPlayAgain.addEventListener('click', function() {
    window.location.reload();
  });
  return;
};
