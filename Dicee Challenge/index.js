
var player1=Math.floor(Math.random()*6)+1;
var player2=Math.floor(Math.random()*6)+1;
var image1="images/dice"+player1+".png";
var image2="images/dice"+player2+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);
if(player1>player2){
    document.querySelector("h1").innerHTML='🚩player 1 has won';
}
else if(player1<player2){
    document.querySelector("h1").innerHTML='player 2 har won 🚩';
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}
