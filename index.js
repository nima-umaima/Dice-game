// Dice 1
var randomNumer1 = Math.floor(Math.random()* 6) + 1; //creates a random number from 1-6
var randomDiceImage ="dice" + randomNumer1 + ".png"; // append dice to the left of randomNumer1 and .png to the right of randomNumer1 dice1.png-dice6.png;
var randomImageSource = "images/" + randomDiceImage;//changes the source of the image based on the random dice number
var image1 = document.querySelectorAll("img")[0]; //
image1.setAttribute("src", randomImageSource); //


//Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage2= "dice"+ randomNumber2  +".png"// dice1.png - dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; // picks the selected dice from the images folder(images/dice1.png -images/die6.png)
var image2 = document.querySelectorAll('img')[1]; //changes source attribute of the image element
image2.setAttribute("src", randomImageSource2 );

// if player 1 wins
if (randomNumer1 > randomNumber2 ){
  document.querySelector("h1").innerHTML = "🚩 Player 1 is the winner!";
}
//if player 2 wins
else if (randomNumber2 > randomNumer1){
  document.querySelector("h1").innerHTML = "🚩 Player 2 is the winner!";
}
//if both roll the same random number
else {
  document.querySelector("h1").innerHTML = "Draw";
}
