console.log("Up and running!");



const cards = ["queen", "queen", "king", "king"];
var cardOne = cards[0];
const cardsInPlay = [];
cardsInPlay.push(cardOne);
console.log("user flipped queen");
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("user flipped king");
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
	alert("you found a match!");
} else {
	alert("Sorry, try again.");
}