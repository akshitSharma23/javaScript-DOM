function mouseClick(){
    sound(this.textContent);
    btnclick(this.classList[0]);
}
function keyclick(g){
    sound(g.key);
    btnclick(g.key);
}
function sound(x){
    switch(x){
        case "w":
            var aud=new Audio("sounds/crash.mp3");
            aud.play();
            break;    
        case "a":
            var aud=new Audio("sounds/kick-bass.mp3");
            aud.play();
            break;
        case "s":
            var aud=new Audio("sounds/snare.mp3");
            aud.play();
            break;
        case "d":
            var aud=new Audio("sounds/tom-1.mp3");
            aud.play();
            break;
        case "j":
            var aud=new Audio("sounds/tom-2.mp3");
            aud.play();
            break;
        case "k":
            var aud=new Audio("sounds/tom-3.mp3");
            aud.play();
            break;
        case "l":
            var aud=new Audio("sounds/tom-4.mp3");
            aud.play();
            break;
        default:
            console.log(x);
    }
}
function btnclick(k){
    document.querySelector("."+k).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+k).classList.remove("pressed");
    },100);
}



var n=document.querySelectorAll("button").length;
for(var i=0;i<n;i++){
    document.querySelectorAll("button")[i].addEventListener("click",mouseClick);
}
document.addEventListener("keydown",keyclick);
