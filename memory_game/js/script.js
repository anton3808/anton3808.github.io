const cards = document.querySelectorAll('.memory-card');



let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  setTimeout(() => {
	  firstCard.classList.toggle('hide');
	  secondCard.classList.toggle('hide');

	  resetBoard();
  }, 300);
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));


// const button_class = document.getElementsByClassName('start');

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



// button_class[0].addEventListener('click', start1, false);


