document.addEventListener('DOMContentLoaded', (event) => {
const StartGame = document.getElementById('start-game');
const InitialMenu = document.querySelector('.InitialMenu');
const UserInterface = document.querySelector('.UserInterface');
const play = document.querySelector('.play');
const playmenu = document.querySelector('.NavGameMenu');
const TheActualGameMenu = document.querySelector('.TheActualGameMenu');
const Playerrock = document.querySelector('.ButtonRock');
const Playerpaper = document.querySelector('.ButtonPaper');
const Playerscissors = document.querySelector('.ButtonScissors');
const AnimeMode = document.querySelector('.AnimeMode');
let ActualPlayerPoints = document.querySelector('.ActualPlayerPoints');
let ActualBotPoints = document.querySelector('.ActualBotPoints')
let anime1 = document.getElementById('anime1');
let anime2 = document.getElementById('anime2');
let anime3 = document.getElementById('anime3');
let anime4 = document.getElementById('anime4');
let PlayerNameText = document.querySelector('.PlayerNameText');
function HideStartGameMenu(){
InitialMenu.style.display = 'none';
TheActualGameMenu.style.display = 'none';
UserInterface.style.display = 'flex';
}
StartGame.disabled = true;
StartGame.addEventListener('click', HideStartGameMenu);
function HideNavGameMenu(){
    playmenu.style.display = 'none';
    TheActualGameMenu.style.display = "flex";
}
play.addEventListener('click', () => {
    HideNavGameMenu();
    ResetGame();
  });
  let roundCount = 0;
let PlayerChoiceValue = '';
function PlayerChoice(choice){
    console.log('Player chose:', choice);
    PlayerChoiceValue = choice;
    BotChoice = botchoice();
    console.log('Bot chose:', BotChoice);
    let playerPickImage = document.getElementById('PlayerPickImage');
    let botPickImage = document.getElementById('BotPickImage');

    playerPickImage.src = choice.toLowerCase() + ".jpg.png";
    botPickImage.src = BotChoice.toLowerCase() + ".jpg.png";
    
    RoundChecker();
    GameRules();
}
Playerrock.addEventListener('click', ()=>{
PlayerChoice("Rock");

})
Playerpaper.addEventListener('click', ()=>{
    PlayerChoice("Paper");
});
Playerscissors.addEventListener('click', () =>{
PlayerChoice("Scissors");

})
let BotChoice = '';
function botchoice(){
    const randomValue = Math.floor(Math.random() * 3) + 1;
    if(randomValue===1){
        BotChoice="Rock";
    }else if(randomValue===2){
        BotChoice="Paper";
    }else{
        BotChoice="Scissors";
    }
    return BotChoice;
}
let PlayerScore = 0;
let BotScore = 0;
let result = '';
function GameRules(){
    RoundChecker(roundCount);
    if(PlayerChoiceValue === BotChoice){
        result = "It is a tie!";
        PlayerScore++;
        BotScore++;
        ActualPlayerPoints.textContent = `Your actual points:  ${PlayerScore}`;
        ActualBotPoints.textContent = `Your actual points:  ${BotScore}`;
        console.log(result);
        notification(result);
    }else if(
        (PlayerChoiceValue === "Rock" && BotChoice === "Scissors") ||
        (PlayerChoiceValue === "Paper" && BotChoice === "Rock") ||
        (PlayerChoiceValue === "Scissors" && BotChoice === "Paper")
    ){
        PlayerScore++;
        ActualPlayerPoints.textContent = `Your actual points:  ${PlayerScore}`;
        result = "You've won this one, congratulations!";
        console.log(result);
        notification(result);
    }else{
        BotScore++;
        result = "Unfortunatly, it seems that bot have beaten your ass...";
        ActualBotPoints.textContent = `Your actual points:  ${BotScore}`;
        console.log(result);
        notification(result);
    }
    if (roundCount === 3) {
        roundtext.textContent = "3/3";
        GlobalNotification();
        ResetGame();
    }else{
        roundCount++;
    }
}
function notification(result){
    const resulttext = document.querySelector('.result-text');
    resulttext.textContent=result;
}
function GlobalNotification(){
        let HaveYouWonAlert;
        if(PlayerScore>BotScore){
            HaveYouWonAlert = "Congratulations, You've won the match!";
        }else if(BotScore>PlayerScore){
            HaveYouWonAlert = "Unfortunately, it seems that bot have beaten your ass..."
        }else{
            HaveYouWonAlert = "Uff, It was a hard match! It was a tie! Nice try!";
        }
        alert(HaveYouWonAlert); 
    }
    //tujestroundcount
    function RoundChecker() {
        const roundtext = document.querySelector('.RoundCounter-Text');
        if (roundCount === 0) {
          roundtext.textContent = "Game has not started";
        } else if (roundCount < 3) {
            roundtext.textContent = `${roundCount}/3`;
          } else {
            roundtext.textContent = "3/3";
            GlobalNotification();
            ResetGame();
          }
      }
      function ResetGame() {
        roundCount = 0;
        PlayerScore = 0;
        BotScore = 0;
        PlayerChoiceValue = '1';
        BotChoice = '0';
        RoundChecker();
      }
      const animethememusic = document.querySelector('.animethememusic')
      let PlayerImage = document.getElementById('PlayerImage');
      let BotImage = document.getElementById('BotAnimeImage');
      AnimeMode.addEventListener('click', () => {
        anime1.style.display = "flex";
        anime2.style.display = "flex";
        anime3.style.display = "flex";
        anime4.style.display = "flex";
        animethememusic.play();
        PlayerImage.src = 'secondimage.jpg';
        BotImage.src = 'botchangedpicture.jpg';
      })

      const PlayerName = document.getElementById('player-name-input');
      const SubmitName = document.getElementById('Submit-Player-Name');
      SubmitName.addEventListener('click', () => {
        let playerName = PlayerName.value.trim();
        if (playerName !== '') {
            ActualPlayerName = playerName;
            StartGame.disabled = false;
            PlayerNameText.textContent = `Hello ${playerName} Enjoy!`

        } else {
            alert("Please enter your name before playing.");
            StartGame.disabled = true;
        }

      });

});