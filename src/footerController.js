const footerController = (() => {
  const footer = document.createElement('div');

  const footerInitializer = () => {
    footer.classList.add('footer');

    return footer
  }

  const returnFooter = () => {
    return footer
  }

  return { footerInitializer, returnFooter }
})()


export function footerInitializer() {
  return footerController.footerInitializer()
}

export function returnFooter() {
  return footerController.returnFooter()
}