var n = document.querySelectorAll(".drum").length;

function playAudio(test) {

    switch (test) {
                case "w":
                    var audio = new Audio("./sounds/crash.mp3");
                    audio.play();
                    break;

                case "a":
                    var audio = new Audio("./sounds/kick-bass.mp3");
                    audio.play();
                    break;

                case "s":
                    var audio = new Audio("./sounds/snare.mp3");
                    audio.play();
                    break;
                
                case "d":
                    var audio = new Audio("./sounds/tom-1.mp3");
                    audio.play();
                    break;
                
                case "j":
                    var audio = new Audio("./sounds/tom-2.mp3");
                    audio.play();
                    break;
                
                case "k":
                    var audio = new Audio("./sounds/tom-3.mp3");
                    audio.play();
                    break;
                
                case "l":
                    var audio = new Audio("./sounds/tom-4.mp3");
                    audio.play();
                    break;
                
                dafault:
                    console.log(this.innerHTML);
    } 
}  


for(var i=0; i<n;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(e) {
        playAudio(e.target.innerHTML);
        buttonAnimation(e.target.innerHTML);
    })
}

//or we do it without the event

//for (var i=0; i<n;i++){
  //  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //    playAudio(this.innerHTML);
    //})
//}

document.addEventListener("keydown", function(event) {
    playAudio(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");

    setTimeout(function() {
        document.querySelector("." + currentKey).classList.remove("pressed")
    }, 100);
}
