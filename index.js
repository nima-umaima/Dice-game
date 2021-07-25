// chosing a random dice for each player
// Dice 1
var randomNumer1 = Math.floor(Math.random() * 6) + 1; //creates a random number from 1-6
var randomDiceImage = "dice" + randomNumer1 + ".png"; // append dice to the left of randomNumer1 and .png to the right of randomNumer1 dice1.png-dice6.png;
var randomImageSource = "images/" + randomDiceImage; //changes the source of the image based on the random dice number
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


//Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// Dice 3
var randomNumer3 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage3 = "dice" + randomNumer3 + ".png";
var randomImageSource3 = "images/" + randomDiceImage3;
var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src", randomImageSource3);

// Dice 4
var randomNumber4 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage4 = "dice" + randomNumber4 + ".png";
var randomImageSource4 = "images/" + randomDiceImage4;
var image4 = document.querySelectorAll("img")[3];
image4.setAttribute("src", randomImageSource4);


// announcing the winning based on the player with the highest dice Number

if (randomNumer1 > randomNumber2) {
  if (randomNumer1 > randomNumer3) {
    if (randomNumer1 > randomNumber4) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 is the winner!";
    } else if (randomNumer1 == randomNumber4){
      document.querySelector("h1").innerHTML = "🚩 Player 1 and 4 are the winners!";
    } else {
        document.querySelector("h1").innerHTML = "🚩 Player 4 is the winner!";
    }
  } else if (randomNumer1 == randomNumer3){
    if (randomNumer1 > randomNumber4){
        document.querySelector("h1").innerHTML = "🚩 Player 1 and 3 are the winners!";
    }else if (randomNumer1 == randomNumber4) {
      document.querySelector("h1").innerHTML = "🚩 Player 1,3 and 4 are the winners!";
    }else{
      document.querySelector("h1").innerHTML = "🚩 Player 4 is the winner!";
    }
  } else if (randomNumer3 > randomNumber4){
    document.querySelector("h1").innerHTML = "🚩 Player 3 is the winner!";
  } else if (randomNumer3 == randomNumber4) {
    document.querySelector("h1").innerHTML = "🚩 Player 3 and 4 are the winner!";
  } else{
    document.querySelector("h1").innerHTML = "🚩 Player 4 is the winner!";
  }
}
else if (randomNumer1 == randomNumber2  ){
  if(randomNumer1 > randomNumer3){
    if(randomNumer1 > randomNumber4){
      document.querySelector("h1").innerHTML = "🚩 Player 1 and 2 are the winners!";
    } else if(randomNumer1 == randomNumber4){
      document.querySelector("h1").innerHTML = "🚩 Player 1,2 and 4 are the winners!";
    }else {
      document.querySelector("h1").innerHTML = "🚩 Player 4 is the winner!";
    }
  } else if(randomNumer1 == randomNumer3){
    if (randomNumer1 > randomNumber4){
      document.querySelector("h1").innerHTML = "🚩 Player 1,2 and 3 are the winners!";
    }else if(randomNumer1 == randomNumber4){
      document.querySelector("h1").innerHTML = "Draw!";
    } else {
      document.querySelector("h1").innerHTML = "🚩 Player 4 is the winner!";
    }
  }else if (randomNumer3 > randomNumber4) {
    document.querySelector("h1").innerHTML = "🚩 Player 3 is the winners!";
  } else if (randomNumer3 == randomNumber4) {
      document.querySelector("h1").innerHTML = "🚩 Player 3 and 4 are the winner!";
  }else{
      document.querySelector("h1").innerHTML = "🚩 Player 4 is the winner!";
  }
}
else if (randomNumber2 > randomNumer3) {
  if (randomNumber2 > randomNumber4){
    document.querySelector("h1").innerHTML = "🚩 Player 2 is the winner!";
  } else if (randomNumber2 == randomNumber4){
    document.querySelector("h1").innerHTML = "🚩 Player 2 and 4 are the winners!";
  }else {
    document.querySelector("h1").innerHTML = "🚩 Player 4 is the winner!";
  }
}else if (randomNumber2 == randomNumer3){
  if(randomNumber2 > randomNumber4){
    document.querySelector("h1").innerHTML = "🚩 Player 2 and 3 are the winners!";
  } else if (randomNumber2 == randomNumber4) {
    document.querySelector("h1").innerHTML = "🚩 Player 1,2 and 3 are the winners!";
  } else{
    document.querySelector("h1").innerHTML = "🚩 Player 4 is the winner!";
  }
} else if (randomNumer3 > randomNumber4) {
  document.querySelector("h1").innerHTML = "🚩 Player 3 is the winners!";
} else if(randomNumer3 == randomNumber4){
  document.querySelector("h1").innerHTML = "🚩 Player 3 and 4 are the winner!";
} else {
  document.querySelector("h1").innerHTML = "🚩 Player 4 is the winner!";

}

// refreshing the page to pick random numbers again
function refreshPage(){
  window.location.reload();
}
