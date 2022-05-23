import beeImage from './images/honey-311047.svg'
import cowImage from './images/milk-cow-297483.svg'
import elephantImage from './images/elephant-308776.svg';
import lionImage from './images/lion-158639.svg'
import anime from 'animejs';


const dragDropGameGenerator = (() => {

  const names = ['inek', 'aslan', 'arı', 'fil'];
  const gameItself = document.createElement('div');
  gameItself.classList.add('drag-drop-div');
  
  
  const createImages = () => {
    const imagesDiv = document.createElement('div');
    imagesDiv.classList.add('drag-drop-images');

    
    let i = 0;

    while (i < names.length) {
      const imageWrapper = document.createElement('div');
      const theImage = document.createElement('img');
      
      if (names[i] == 'inek') {
        theImage.src = cowImage;
        theImage.dataset.animal = 'inek';
      }
      else if (names[i] == 'aslan') {
        theImage.src = lionImage;
        theImage.dataset.animal = 'aslan';
      }
      else if (names[i] == 'arı') {
        theImage.src = beeImage;
        theImage.dataset.animal = 'arı';
      }
      else if (names[i] == 'fil') {
        theImage.src = elephantImage;
        theImage.dataset.animal = 'fil';
      }


      theImage.draggable = true;

      function haha(event) {
        event.dataTransfer.setData("name", event.target.dataset.animal);
      }
      theImage.ondragstart = haha

      
      imageWrapper.appendChild(theImage)
      imagesDiv.appendChild(imageWrapper)
      i += 1
    }

    return imagesDiv
  }





  const createDestinations = () => {
    const destinationsDiv = document.createElement('div');
    destinationsDiv.classList.add('drag-drop-dests');


    destinationsDiv.appendChild(createDestWrapper('arı'));
    destinationsDiv.appendChild(createDestWrapper('inek'));
    destinationsDiv.appendChild(createDestWrapper('fil'));
    destinationsDiv.appendChild(createDestWrapper('aslan'));


    return destinationsDiv
  }


  const createDestWrapper = (nameForIt) => {
    const destWrapper = document.createElement('div');
    const destText = document.createElement('p');
    
    destWrapper.dataset.animal = nameForIt;

    destText.textContent = nameForIt;

    function allowDrop(event) {
      event.preventDefault()
    }
    function drop(event) {
      event.preventDefault();
      var data = event.dataTransfer.getData("name");
      if (data == nameForIt) {
        const animalImg = document.querySelector(`[data-animal="${nameForIt}"]`)
        animalImg.ondragstart = null;
        animalImg.draggable = false;
        event.target.removeChild(event.target.firstChild)
        event.target.appendChild(animalImg);
        event.target.ondragover = null;
        event.target.ondrop = null;
      }
    }

    destWrapper.ondragover = allowDrop;
    destWrapper.ondrop = drop;

    destWrapper.appendChild(destText);
    return destWrapper
  }

  const wipeGame = () => {
    console.log(gameItself)
    while (0 < gameItself.children.length){
      gameItself.removeChild(gameItself.children[0])
    }
  }
  
  const dragDropGame = () => {
    const imagesWrapper = createImages()
    gameItself.appendChild(imagesWrapper);
    anime({
      targets: imagesWrapper,
      translateX:[-200, 0],
      duration: 2000
    })
    
    const destsWrapper = createDestinations()
    gameItself.appendChild(destsWrapper)
    
    anime({
      targets: destsWrapper,
      translateX:[200, 0],
      duration: 2000
    })

    return gameItself
  }

  return { dragDropGame, wipeGame }
})()

export function generateDragDropGame() {
  return dragDropGameGenerator.dragDropGame()
}

export function resetDragDropGameWrapper() {
  return dragDropGameGenerator.wipeGame()
}