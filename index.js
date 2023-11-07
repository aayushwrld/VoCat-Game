let playBtn = document.querySelector("#play-button span");
let instructionBtn = document.querySelector(".instructions-button span");
let marioImage = document.getElementById("mario");

let bgmAudio = new Audio("./assets/background-music.mp3")
bgmAudio.volume = 0.6;
bgmAudio.play()
bgmAudio.loop = true

setInterval(()=>{
    setTimeout(()=>{
        marioImage.setAttribute("src","./assets/Mario Walk - Fall/MarioStandLarge.png");
        marioImage.style.paddingTop="8px";
    },300)
    marioImage.setAttribute("src","./assets/Mario Walk - Fall/MarioWalkLarge.png");
    marioImage.style.paddingTop="12px";
},600)

playBtn.addEventListener("click",() => {
    window.open("./theme.html", "_self")
})

instructionBtn.addEventListener("click",() => {
    window.open("./instructions.html", "_self")
})

