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

  return { headerInitializer, headerTextInitializer }
})()


export function headerInitializer() {
  return headerController.headerInitializer()
}

export function headerTextInitializer() {
  return headerController.headerTextInitializer()
}