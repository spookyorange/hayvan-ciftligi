import chickenImage from './images/chicken-306110.svg';
import chickenSound from './sounds/chicken.mp3';
import elephantImage from './images/elephant-308776.svg';
import elephantSound from './sounds/elephant.mp3';

import beeImage from './images/honey-311047.svg'
import beeSound from './sounds/bee.mp3';
import lionImage from './images/lion-158639.svg'
import lionSound from './sounds/lion.mp3';
import cowImage from './images/milk-cow-297483.svg'
import cowSound from './sounds/cow.mp3';
import monkeyImage from './images/monkey-37394.svg'
import monkeySound from './sounds/monkey.mp3';

import { test1 } from './testsGenerator';
const contentGenerator = (() => {

  const matchGameContent = () => {
    const matchGame = document.createElement('div');

    return matchGame
  }

  const testGameContent = () => {
    const testGame = document.createElement('div');

    testGame.appendChild(test1());
    return testGame
  }

  const dragDropGameContent = () => {
    const dragDropGame = document.createElement('div');

    return dragDropGame
  }

  const lectureContent = () => {
    const lecture = document.createElement('div');
    lecture.classList.add('lecture')
    const lectureText = document.createElement('h3');

    lecture.appendChild(createLecture(chickenImage, chickenSound, lectureText, 'Tavuk gıdaklar ve yumurta verir.'));
    lecture.appendChild(createLecture(elephantImage, elephantSound, lectureText, 'Fillerin büyük hortumları vardır.'));
    lecture.appendChild(createLecture(beeImage, beeSound, lectureText, 'Arılar bal yapar.'));
    lecture.appendChild(createLecture(lionImage, lionSound, lectureText, 'Aslan çok güçlüdür.'));
    lecture.appendChild(createLecture(cowImage, cowSound, lectureText, 'İnek ot yer ve süt verir.'));
    lecture.appendChild(createLecture(monkeyImage, monkeySound, lectureText, 'Maymunlar muz yer.'));

    lecture.appendChild(lectureText);
    return lecture
  }

  const createLecture = (imageFile, audioFile, lectureTextObject, lectureText) => {
    const lecture = document.createElement('div');

    const lectureImage = document.createElement('img');
    lectureImage.src = imageFile;
    lectureImage.height = '225';
    lecture.appendChild(lectureImage);
    const lectureAudio = new Audio(audioFile);

    lectureImage.addEventListener('click', () => {
      lectureAudio.play();
      lectureTextObject.textContent = lectureText
    });


    return lecture
  }

  const helpContent = () =>  {
    const help = document.createElement('div');
    const helpHeader = document.createElement('h1');
    const helpText = document.createElement('p');
    
    helpHeader.textContent = 'Yardım';
    helpText.textContent = 'This is a placeholder for help content.';

    help.appendChild(helpHeader);
    help.appendChild(helpText);

    return help
  }

  return { matchGameContent, testGameContent, dragDropGameContent, lectureContent, helpContent }
})()


export function returnMatchGame() {
  return contentGenerator.matchGameContent()
}

export function returnTestGame() {
  return contentGenerator.testGameContent()
}

export function returnDragDropGame() {
  return contentGenerator.dragDropGameContent()
}

export function returnLectureContent() {
  return contentGenerator.lectureContent()
}

export function returnHelpContent() {
  return contentGenerator.helpContent()
}