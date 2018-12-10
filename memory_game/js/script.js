const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let hasFlippedCardSecond = false;
let lockBoard = false;
let firstCard, secondCard, thirdCard;


function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  if (!hasFlippedCardSecond) {
    hasFlippedCardSecond = true;
    secondCard = this;
    checkForTwoMatch();

    return;
  }

  thirdCard = this;
  checkForTheeMatch();
}



function checkForTwoMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? flipCard() : unflipTwoCards();
}
function disableTwoCards() {
  setTimeout(() => {
	  firstCard.classList.toggle('hide');
	  secondCard.classList.toggle('hide');

	  resetBoard();
  }, 300);
}
function unflipTwoCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}




function checkForTheeMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch = firstCard.dataset.framework === thirdCard.dataset.framework;

  isMatch ? disableThreeCards() : unflipThreeCards();
}
function disableThreeCards() {
  setTimeout(() => {
	  firstCard.classList.toggle('hide');
	  secondCard.classList.toggle('hide');
	  thirdCard.classList.toggle('hide');

	  resetBoard();
  }, 300);
}
function unflipThreeCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    thirdCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}





function resetBoard() {
  [hasFlippedCard, lockBoard, hasFlippedCardSecond] = [false, false, false];
  [firstCard, secondCard, thirdCard] = [null, null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 18);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));







let button_id = document.getElementById("button");

button_id.addEventListener('click', flipAllCards);
function flipAllCards() {
	setTimeout(function() { 
		$('.memory-card').toggleClass('flip'); 
	}, 1000);

	setTimeout(function() { 
		$('.memory-card').toggleClass('flip'); 
	}, 3000);
}





