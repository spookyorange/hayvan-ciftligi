import beeImage from './images/honey-311047.svg'
import cowImage from './images/milk-cow-297483.svg'
import chickenImage from './images/chicken-306110.svg'
import lionImage from './images/lion-158639.svg'
import monkeyImage from './images/monkey-37394.svg'
import elephantImage from './images/elephant-308776.svg'

import anime from 'animejs'

const matchGameGenerator = (() => {

  const listening = [];
  const matchGameWrapper = document.createElement('div');
  const animalsArray = ['cow', 'cow', 'chicken', 'chicken', 'lion', 'lion', 'monkey', 'monkey', 'elephant', 'elephant', 'bee', 'bee'];

  const generateCards = () => {
    const cloneOfAnimalsArray = animalsArrayCloner();

    const cards = document.createElement('ul');
    cards.classList.add('cards-list');


    let randomNo = 0;
    while (cloneOfAnimalsArray.length >= 1) {
      randomNo = Math.floor(Math.random() * cloneOfAnimalsArray.length);

      const givenAnimal = cloneOfAnimalsArray[parseInt(randomNo)]
      const card = createCard(givenAnimal);

      cards.appendChild(card);
      cloneOfAnimalsArray.splice(randomNo, 1);
    }

    return cards
  }


  const createCard = (givenAnimal) => {
    const card = document.createElement('li');

    card.dataset.animal = givenAnimal;


    const cardImage = document.createElement('img');

    if (givenAnimal == 'cow') {
      cardImage.src = cowImage;
    }
    else if (givenAnimal == 'chicken') {
      cardImage.src = chickenImage;
    }
    else if (givenAnimal == 'lion') {
      cardImage.src = lionImage;
    }
    else if (givenAnimal == 'monkey') {
      cardImage.src = monkeyImage;
    }
    else if (givenAnimal == 'elephant') {
      cardImage.src = elephantImage;
    }
    else if (givenAnimal == 'bee') {
      cardImage.src = beeImage;
    }

    card.appendChild(cardImage);
    card.classList.add('card');
    card.classList.add('usable-card');
    cardImage.classList.add('card-image', 'invisible');

    return card
  }

  const animalsArrayCloner = () => {
    const newAnimalArray = animalsArray.map((x) => x)
    return newAnimalArray
  }

  const addEventListenersToCards = (cards) => {
    let i = 0;
    while (i < cards.children.length) {
      const currentCard = cards.children[i];

      function listenToCard() {
        if (listening[0] && currentCard == listening[0]) {

        }
        else {
          listening.unshift(currentCard);
          currentCard.firstChild.classList.remove('invisible')

          if (listening.length == 2) {
            if (listening[0] != listening[1] && listening[0].dataset.animal == listening[1].dataset.animal) {
              Array.from(cards.children).forEach((x) => {
                if (x.dataset.animal == listening[0].dataset.animal) {
                  const newCard = cards.insertBefore(createCard(listening[0].dataset.animal), x);
                  newCard.firstChild.classList.remove('invisible');
                  newCard.firstChild.classList.add('turned');
                  newCard.classList.remove('usable-card');
                  cards.removeChild(x)
                  anime({
                    targets: newCard,
                    scale: [1, 1.5],
                    duration: 1500
                  })
                  anime({
                    targets: newCard,
                    keyframes: [
                      {scale: 1.5},
                      {scale: 1}
                  ],
                    duration: 1500
                  })
                }
              })
              let f = 0;
              while (f < listening.length) {
                listening.shift()
              }
            f = 0
            }
            else {
              let f = 0;
              while (f < listening.length) {
                function makeItInvisible(listening) {
                  listening.firstChild.classList.add('invisible')
                }
                setTimeout(makeItInvisible, 1000, listening[0])
                listening.shift()
              }
              f = 0
            }
          }
        currentCard.firstChild.classList.add('turned');
        }
      }

      if (cards.children.length == 0){
        anime({
          targets: '.home-button',
          scale: 1
        })
      }

      currentCard.addEventListener('click', listenToCard)

      i += 1
      anime({
        targets: currentCard,
        scale: [1, 1.3, 1],
        duration: 800,
        delay: 500,
        easing: 'linear'
      })
    }
  }

  const generateGame = () => {
    const cards = generateCards();
    addEventListenersToCards(cards);
    return cards
  }

  const generateMatchGame = () => {
    matchGameWrapper.appendChild(generateGame());

    return matchGameWrapper
  }


  const resetWrapper = () => {
    let i = 0;

    while (i < matchGameWrapper.children.length) {
      matchGameWrapper.removeChild(matchGameWrapper.lastChild);
      i += 1
    }
    i = 0;
    if (listening.length > 0){
      while (i < listening.length) {
        listening.shift();
        i += 1
      }
    }
  }

  return { generateMatchGame, resetWrapper }

})()

export function generatedMatchGame() {
  return matchGameGenerator.generateMatchGame()
}
export function resetMatchWrapper() {
  return matchGameGenerator.resetWrapper()
}