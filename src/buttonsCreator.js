const buttonsCreator = (() => {

  const createButton = (nameOfIt) => {
    const newButton = document.createElement('button');
    newButton.textContent = nameOfIt;
    return newButton
  }

  return { createButton }
})()

export default function createButton(name) {
  return buttonsCreator.createButton(name)
}