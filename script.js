document.addEventListener('DOMContentLoaded', (event) => {
const StartGame = document.getElementById('start-game');
const InitialMenu = document.querySelector('.InitialMenu');
const UserInterface = document.querySelector('.UserInterface');
function HideStartgameMenu(){
InitialMenu.style.display = 'none';
UserInterface.style.display = 'flex';
}
StartGame.addEventListener('click', HideStartgameMenu);

});