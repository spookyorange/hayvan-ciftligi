const footerController = (() => {
  const footer = document.createElement('div');

  const footerInitializer = () => {
    footer.classList.add('footer');

    return footer
  }

  return { footerInitializer }
})()


export default function footerInitializer() {
  return footerController.footerInitializer()
}