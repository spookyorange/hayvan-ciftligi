import createButton from "./buttonsCreator";

const contentController = (() => {
  const content = document.createElement('div');

  const contentInitializer = () => {
    content.classList.add('content');
    content.appendChild(generateIndexContent());

    return content
  }

  const generateIndexContent = () => {
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

    return indexContent
  }


  const generateMatchGame = () => {

  }

  const generateTestGame = () => {

  }

  const generateDragDropGame = () => {

  }

  const generateLectureContent = () => {

  }


  const generateHelpContent = () => {
    wipeCurrentLayout();
    
    
  }


  const assignFunctionToButton = (button, functionToIt) => {
    button.addEventListener('click', () => {
      functionToIt()
    })
  }

  const wipeCurrentLayout = () => {
    let i = 0;
    while (i < content.children.length) {
      content.removeChild(content.lastChild);
      i += 1
    }
  }

  return { contentInitializer }
})()


export default function contentInitializer() {
  return contentController.contentInitializer()
}