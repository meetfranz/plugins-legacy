module.exports = (Franz, options) => {

  document.querySelector('#pagelet_bluebar').style.display = "none"

  function getMessages() {
    const title =  document.querySelector("title")
    const matches = title && title.textContent.match(/\d+/)
    const count = matches && matches[0] || 0
    Franz.setBadge(count)
  }

  Franz.loop(getMessages)
}
