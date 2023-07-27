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


function PlayerChoice(choice){
    console.log('Player chose:', choice);
    const botChoice = BotChoice();
    console.log('Bot chose:', botChoice);
}
Playerrock.addEventListener('click', ()=>{
PlayerChoice("rock");

})
Playerpaper.addEventListener('click', ()=>{
    PlayerChoice("paper");
});
Playerscissors.addEventListener('click', () =>{
PlayerChoice("scissors");

})
function BotChoice(){
    const randomValue = Math.floor(Math.random() * 3) + 1;
    let botchoice;
    if(randomValue===1){
        botchoice="Rock";
    }else if(randomValue===2){
        botchoice="Paper";
    }else{
        botchoice="Scissors";
    }
    return botchoice;
}


});
