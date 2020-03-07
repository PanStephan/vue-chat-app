export default function(elementNode) {
  const $newMessage = elementNode.lastElementChild
  const newMessageStyles = getComputedStyle($newMessage)
  const newMessageMargin = parseInt(newMessageStyles.marginBottom)
  const newMessageHeight = $newMessage.offsetHeight + newMessageMargin
  const visibleHeight = elementNode.offsetHeight
  const containerHeight = elementNode.scrollHeight
  const scrollOffset = elementNode.scrollTop + visibleHeight

  if (containerHeight - newMessageHeight <= scrollOffset) {
    elementNode.scrollTop = elementNode.scrollHeight
  }
}
