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
function HideStartGameMenu(){
InitialMenu.style.display = 'none';
TheActualGameMenu.style.display = 'none';
UserInterface.style.display = 'flex';
}
StartGame.addEventListener('click', HideStartGameMenu);
function HideNavGameMenu(){
    playmenu.style.display = 'none';
    TheActualGameMenu.style.display = "flex";
}
play.addEventListener('click' , HideNavGameMenu);

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
    
}
Playerrock.addEventListener('click', ()=>{
PlayerChoice("Rock");
GameRules();

})
Playerpaper.addEventListener('click', ()=>{
    PlayerChoice("Paper");
    GameRules();
});
Playerscissors.addEventListener('click', () =>{
PlayerChoice("Scissors");
GameRules();

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
let roundCount = 1;
let PlayerScore = 0;
let BotScore = 0;
function GameRules(){
    RoundChecker(roundCount);
    if(PlayerChoiceValue === BotChoice){
        let result = "It is a tie!";
        PlayerScore++;
        BotScore++;
        console.log(result);
        notification(result);
    }else if(
        (PlayerChoiceValue === "Rock" && BotChoice === "Scissors") ||
        (PlayerChoiceValue === "Paper" && BotChoice === "Rock") ||
        (PlayerChoiceValue === "Scissors" && BotChoice === "Paper")
    ){
        PlayerScore++;
        result = "You've won this one, congratulations!";
        console.log(result);
        notification(result);
    }else{
        BotScore++;
        result = "Unfortunatly, it seems that bot have beaten your ass...";
        console.log(result);
        notification(result);
    }
    if (roundCount === 3){  
        GlobalNotification();
        ResetGame(PlayerChoiceValue,BotChoice);
    }else{
        roundCount++;
        PlayerChoiceValue = null;
        BotChoice = null;
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
    let roundtext = '';
function RoundChecker(roundCount){
    const roundtext = document.querySelector('.RoundCounter-Text');
    if(roundCount===1){
        roundtext.textContent = "1/3";
    }else if(roundCount===2){
        roundtext.textContent = "2/3";
    }else{
        roundtext.textContent = "3/3";
    }
}
function ResetGame(PlayerChoiceValue,BotChoice){
        roundCount = 1;
        PlayerScore = 0;
        BotScore = 0;
        PlayerChoiceValue = null;
        BotChoice = null;
        RoundChecker(roundCount);
}




});