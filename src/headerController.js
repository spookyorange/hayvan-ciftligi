const headerController = (() => {
  const header = document.createElement('div');
  const headerText = document.createElement('h1');

  const headerInitializer = () => {
    header.appendChild(headerText);
    header.classList.add('header');
    
    return header
  }

  const headerTextInitializer = () => {
    headerText.classList.add('header-text');
    headerText.textContent = 'Merhaba!';

    return headerText
  }

  const returnHeader = () => {
    return headerText;
  }

  return { headerInitializer, headerTextInitializer, returnHeader }
})()


export function headerInitializer() {
  return headerController.headerInitializer()
}

export function headerTextInitializer() {
  return headerController.headerTextInitializer()
}

export function returnHeader() {
  return headerController.returnHeader()
}