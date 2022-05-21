import createButton from "./buttonsCreator";
import { returnMatchGame, returnTestGame, returnDragDropGame, returnLectureContent, returnHelpContent } from "./contentGenerator";
import { returnFooter } from './footerController';
import homeButtonImage from './images/home.svg';


const contentController = (() => {
  const content = document.createElement('div');
  const footer = returnFooter();

  const contentInitializer = () => {
    content.classList.add('content');
    generateIndexContent();
    return content
  }

  const generateIndexContent = () => {
    wipeCurrentLayout();
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
    wipeCurrentLayout();
    content.appendChild(returnMatchGame());
    footer.appendChild(generateHomeButton());
  }

  const generateTestGame = () => {
    wipeCurrentLayout();
    content.appendChild(returnTestGame());
    footer.appendChild(generateHomeButton());
  }

  const generateDragDropGame = () => {
    wipeCurrentLayout();
    content.appendChild(returnDragDropGame());
    footer.appendChild(generateHomeButton());
  }

  const generateLectureContent = () => {
    wipeCurrentLayout();
    content.appendChild(returnLectureContent());
    footer.appendChild(generateHomeButton());
  }

  const generateHelpContent = () => {
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