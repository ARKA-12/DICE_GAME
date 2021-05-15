
var randomno1 = Math.random();
var n = Math.floor((randomno1*6)+1);

// if(n === 1)
// document.querySelector(".img1").setAttribute("src","images/dice1.png");
// else if(n===2)
// document.querySelector(".img1").setAttribute("src","images/dice3.png");
// else if(n===3)
// document.querySelector(".img1").setAttribute("src","images/dice3.png");
// else if(n===4)
// document.querySelector(".img1").setAttribute("src","images/dice4.png");
// else if(n===5)
// document.querySelector(".img1").setAttribute("src","images/dice5.png");
// else
// document.querySelector(".img1").setAttribute("src","images/dice6.png");


var randomno2 = Math.random();
var x = Math.floor((randomno2*6)+1);


// if(x===1)
// document.querySelector(".img2").setAttribute("src","images/dice1.png");
// else if(x===2)
// document.querySelector(".img2").setAttribute("src","images/dice2.png");
// else if(x===3)
// document.querySelector(".img2").setAttribute("src","images/dice3.png");
// else if(x===4)
// document.querySelector(".img2").setAttribute("src","images/dice4.png");
// else if(x===5)
// document.querySelector(".img2").setAttribute("src","images/dice5.png");
// else
// document.querySelector(".img2").setAttribute("src","images/dice6.png");


document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + x + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + n + ".png");

if(x>n)
document.querySelector("h1").innerHTML="🏆 Player 2 is Winner";
else if(n>x)
document.querySelector("h1").innerHTML="Player 1 is Winner 🏆";
else
document.querySelector("h1").innerHTML="!Draw!";

