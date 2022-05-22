import createButton from "./buttonsCreator";
import { returnMatchGame, returnTestGame, returnDragDropGame, returnLectureContent, returnHelpContent } from "./contentGenerator";
import { returnFooter } from './footerController';
import { returnHeader } from "./headerController";
import { resetTestWrapper } from "./testsGenerator";
import { resetMatchWrapper } from "./matchGameGenerator";
import homeButtonImage from './images/home.svg';
import anime from "animejs";


const contentController = (() => {
  const content = document.createElement('div');
  const footer = returnFooter();
  const header = returnHeader();

  const contentInitializer = () => {
    content.classList.add('content');
    generateIndexContent();
    return content
  }

  const animateHeader = () => {
    anime({
      targets: returnHeader(),
      keyframes: [
        {scale: 2},
        {scale: 1},
      ],
      duration: 1000
    })
  }

  const generateIndexContent = () => {
    animateHeader();
    wipeCurrentLayout();

    header.textContent = 'Hayvan Çiftliği!';
    const indexContent = document.createElement('div');
    const indexFirstHalf = document.createElement('div');
    const indexSecondHalf = document.createElement('div');



    indexContent.classList.add('index-content')
    indexFirstHalf.classList.add('index-first-half')
    indexSecondHalf.classList.add('index-second-half')


    const playMatchButton = createButton('Eşini Bulma');
    assignFunctionToButton(playMatchButton, generateMatchGame);
    indexFirstHalf.appendChild(playMatchButton);

    const playTestButton = createButton('Test');
    assignFunctionToButton(playTestButton, generateTestGame);
    indexFirstHalf.appendChild(playTestButton);

    const playDragDropButton = createButton('Eşleştirme');
    assignFunctionToButton(playDragDropButton, generateDragDropGame);
    indexFirstHalf.appendChild(playDragDropButton);

    const lectureButton = createButton('Konu Anlatımı');
    assignFunctionToButton(lectureButton, generateLectureContent);
    indexSecondHalf.appendChild(lectureButton);

    const helpButton = createButton('Yardım');
    assignFunctionToButton(helpButton, generateHelpContent);
    indexSecondHalf.appendChild(helpButton);

    const sourceButton = createButton('Kaynak Kodu');
    sourceButton.addEventListener('click', () => (
      window.open('https://github.com/spookyorange/hayvan-ciftligi')
    ))

    anime({
      targets: [playMatchButton, playDragDropButton, playTestButton, lectureButton, helpButton, sourceButton],
      scale: [0, 1],
      duration: 850
    })


    indexSecondHalf.appendChild(sourceButton)

    indexContent.appendChild(indexFirstHalf)
    indexContent.appendChild(indexSecondHalf)
    
    content.appendChild(indexContent);
  }


  const generateMatchGame = () => {
    header.textContent = 'Eşini Bulma';
    animateHeader();
    wipeCurrentLayout();
    content.appendChild(returnMatchGame());
    footer.appendChild(generateHomeButtonWithWrapperResetMatch());
  }

  const generateTestGame = () => {
    header.textContent = 'Test';
    animateHeader();
    wipeCurrentLayout();
    content.appendChild(returnTestGame());
    footer.appendChild(generateHomeButtonWithWrapperReset());
  }

  const generateDragDropGame = () => {
    header.textContent = 'Eşleştirme';
    animateHeader();
    wipeCurrentLayout();
    content.appendChild(returnDragDropGame());
    footer.appendChild(generateHomeButton());
  }

  const generateLectureContent = () => {
    header.textContent = 'Konu Anlatımı';
    animateHeader();
    wipeCurrentLayout();
    content.appendChild(returnLectureContent());
    footer.appendChild(generateHomeButton());
  }

  const generateHelpContent = () => {
    header.textContent = 'Yardım';
    animateHeader();
    wipeCurrentLayout();
    content.appendChild(returnHelpContent());
    footer.appendChild(generateHomeButton());
  }

  const generateHomeButton = () => {
    const homeButton = document.createElement('img');
    homeButton.src = homeButtonImage;
    homeButton.classList.add('home-button');
    homeButton.addEventListener('click', () => {
      generateIndexContent();
    });

    return homeButton
  }

  const generateHomeButtonWithWrapperReset = () => {
    const homeButton = document.createElement('img');
    homeButton.src = homeButtonImage;
    homeButton.classList.add('home-button');
    homeButton.addEventListener('click', () => {
      resetTestWrapper();
      generateIndexContent();
    });

    return homeButton
  }

  const generateHomeButtonWithWrapperResetMatch = () => {
    const homeButton = document.createElement('img');
    homeButton.src = homeButtonImage;
    homeButton.classList.add('home-button');
    homeButton.addEventListener('click', () => {
      resetMatchWrapper();
      generateIndexContent();
    });

    return homeButton
  }


  const assignFunctionToButton = (button, functionToIt) => {
    button.addEventListener('click', () => {
      functionToIt()
    })
  }

  const wipeCurrentLayout = () => {
    content.innerHTML = '';
    footer.innerHTML = '';
  }

  return { contentInitializer }
})()


export default function contentInitializer() {
  return contentController.contentInitializer()
}