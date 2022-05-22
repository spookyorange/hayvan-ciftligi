import beeImage from './images/honey-311047.svg'
import cowImage from './images/milk-cow-297483.svg'
import chickenImage from './images/chicken-306110.svg'
import lionImage from './images/lion-158639.svg'
import monkeyImage from './images/monkey-37394.svg'
import elephantImage from './images/elephant-308776.svg'

const matchGameGenerator = (() => {

  const listening = []
  const matchGameWrapper = document.createElement('div');
  const animalsArray = ['cow', 'cow', 'chicken', 'chicken', 'lion', 'lion', 'monkey', 'monkey', 'elephant', 'elephant', 'bee', 'bee'];

  const generateCards = () => {
    console.log(matchGameWrapper)
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
    cardImage.classList.add('card-image', 'invisible');

    return card
  }

  const animalsArrayCloner = () => {
    const newAnimalArray = animalsArray.map((x) => x)
    return newAnimalArray
  }

  const addEventListenersToCards = (cards) => {
    let i = 0;
    console.log(cards.children[0])
    while (i < cards.children.length) {
      const currentCard = cards.children[i];

      function listenToCard() {
        listening.unshift(currentCard);
        currentCard.firstChild.classList.remove('invisible')
        console.log('added')
        console.log(listening)

        if (listening.length == 2) {
          if (listening[0].dataset.animal == listening[1].dataset.animal) {
            console.log('gratz')
            listening[0].removeEventListener('click', listenToCard)
            listening[1].removeEventListener('click', listenToCard)
          }
          let f = 0;
          while (f <= listening.length) {
            console.log(listening[0])
            listening.shift()
            console.log('deleted')
            f += 1
          }
          f = 0
        }
      }
      currentCard.addEventListener('click', listenToCard)

      i += 1
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