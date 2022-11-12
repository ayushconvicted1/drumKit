var numberOfDrumButtons = document.querySelectorAll('.drum').length;
//assigning audio files to variables
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var crash = new Audio("sounds/crash.mp3");
var kickBass = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");
// playing sound through clicks on buttons
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        player(this.innerHTML);
        animBtn(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event){
    player(event.key);
    animBtn(event.key);
})

function player(key) {
    switch (key) {
        case "w":
            tom1.load();
            tom1.play();
            break;
        case "a":
            tom2.load();
            tom2.play();
            break;
        case "s":
            tom2.load();
            tom3.play();
            break;
        case "d":
            tom4.load();
            tom4.play();
            break;
        case "j":
            crash.load();
            crash.play();
            break;
        case "k":
            kickBass.load();
            kickBass.play();
            break;
        case "l":
            snare.load();
            snare.play();
            break;
        default:
            break;
    }
}
function animBtn(keyPr){
    document.querySelector("."+keyPr).classList.add('pressed');
    setTimeout (function(){
        document.querySelector("."+keyPr).classList.remove('pressed');
    }, 100);
}
