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
function GameRules(){
    const resulttext = document.querySelector('.result-text')

    if(PlayerChoiceValue === BotChoice){
        let result = "It is a tie!";
        console.log(result);
        notification(result);
    }else if(
        (PlayerChoiceValue === "Rock" && BotChoice === "Scissors") ||
        (PlayerChoiceValue === "Paper" && BotChoice === "Rock") ||
        (PlayerChoiceValue === "Scissors" && BotChoice === "Paper")
    ){
        result = "You've won this one, congratulations!";
        console.log(result);
        notification(result);
    }else{
        result = "Unfortunatly, it seems that bot have beaten your ass...";
        console.log(result);
        notification(result);
    }
}
function notification(result){
    const resulttext = document.querySelector('.result-text');
    resulttext.textContent=result;
}


});
