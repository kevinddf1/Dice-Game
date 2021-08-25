//generate 2 random numbers
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
console.log(randomNumber2);

//update 2 images
var str1 = "images/dice"+randomNumber1+".png";
var str2 = "images/dice"+randomNumber2+".png";
document.querySelector(".container .dice .img1").setAttribute("src", str1);
document.querySelector(".container .dice .img2").setAttribute("src", str2);

//update result
var result;
if(randomNumber1>randomNumber2){result = "Player 1 wins";}
else if(randomNumber1<randomNumber2){result = "Player 2 wins";}
else{result = "draw";}
document.querySelector("h1").innerHTML = "🎲"+result;
