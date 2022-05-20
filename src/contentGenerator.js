const contentGenerator = (() => {
  
  const matchGameContent = () => {
    const matchGame = document.createElement('div');

    return matchGame
  }

  const testGameContent = () => {
    const testGame = document.createElement('div');

    return testGame
  }

  const dragDropGameContent = () => {
    const dragDropGame = document.createElement('div');

    return dragDropGame
  }

  const lectureContent = () => {
    const lecture = document.createElement('div');

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