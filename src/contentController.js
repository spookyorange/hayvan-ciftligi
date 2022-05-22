import createButton from "./buttonsCreator";
import { returnMatchGame, returnTestGame, returnDragDropGame, returnLectureContent, returnHelpContent } from "./contentGenerator";
import { returnFooter } from './footerController';
import { returnHeader } from "./headerController";
import { resetTestWrapper } from "./testsGenerator";
import { resetMatchWrapper } from "./matchGameGenerator";
import homeButtonImage from './images/home.svg';


const contentController = (() => {
  const content = document.createElement('div');
  const footer = returnFooter();
  const header = returnHeader();

  const contentInitializer = () => {
    content.classList.add('content');
    generateIndexContent();
    return content
  }

  const generateIndexContent = () => {
    wipeCurrentLayout();
    header.textContent = 'Merhaba!';
    const indexContent = document.createElement('div');

    const playMatchButton = createButton('Eşini Bulma');
    assignFunctionToButton(playMatchButton, generateMatchGame);
    indexContent.appendChild(playMatchButton);

    const playTestButton = createButton('Test');
    assignFunctionToButton(playTestButton, generateTestGame);
    indexContent.appendChild(playTestButton);

    const playDragDropButton = createButton('Eşleştirme');
    assignFunctionToButton(playDragDropButton, generateDragDropGame);
    indexContent.appendChild(playDragDropButton);

    const lectureButton = createButton('Konu Anlatımı');
    assignFunctionToButton(lectureButton, generateLectureContent);
    indexContent.appendChild(lectureButton);

    const helpButton = createButton('Yardım');
    assignFunctionToButton(helpButton, generateHelpContent);
    indexContent.appendChild(helpButton);

    content.appendChild(indexContent);
  }


  const generateMatchGame = () => {
    header.textContent = 'Eşini Bulma';
    wipeCurrentLayout();
    content.appendChild(returnMatchGame());
    footer.appendChild(generateHomeButtonWithWrapperResetMatch());
  }

  const generateTestGame = () => {
    header.textContent = 'Test';
    wipeCurrentLayout();
    content.appendChild(returnTestGame());
    footer.appendChild(generateHomeButtonWithWrapperReset());
  }

  const generateDragDropGame = () => {
    header.textContent = 'Eşleştirme';
    wipeCurrentLayout();
    content.appendChild(returnDragDropGame());
    footer.appendChild(generateHomeButton());
  }

  const generateLectureContent = () => {
    header.textContent = 'Konu Anlatımı';
    wipeCurrentLayout();
    content.appendChild(returnLectureContent());
    footer.appendChild(generateHomeButton());
  }

  const generateHelpContent = () => {
    header.textContent = 'Yardım';
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