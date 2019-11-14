console.log("Up and running!");
//creates the game board by adding elements to the doc
function createBoard(){
	for (let i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);	
	}
}

const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];
//resets the game board using an event listener
function resetBoard(){
	for(let i = 0; i < cards.length; i ++){
	var board = document.querySelector('img');
	board.parentNode.removeChild(board);
	}
	createBoard(); 
}
document.getElementsByTagName('button')[0].addEventListener('click', resetBoard);

//Checks that cards match and sends user alert
function checkForMatch(){
	if(cardsInPlay[0].rank === cardsInPlay[1].rank){
	alert("You found a match.");
	} else{
	alert("Sorry try again.");
	}
}

//Flips cards and assigns card image
function flipCard(){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId]).rank;
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if(cardsInPlay.length === 2){
		checkForMatch();
		}
}

createBoard();











