const headerController = (() => {
  const header = document.createElement('div');

  const headerInitializer = () => {
    header.classList.add('header');

    return header
  }

  return { headerInitializer }
})()


export default function headerInitializer() {
  return headerController.headerInitializer()
}