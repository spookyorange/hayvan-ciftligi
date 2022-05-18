const contentController = (() => {
  const content = document.createElement('div');

  const contentInitializer = () => {
    content.classList.add('content');

    return content
  }

  return { contentInitializer }
})()


export default function contentInitializer() {
  return contentController.contentInitializer()
}