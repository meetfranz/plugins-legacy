module.exports = (Franz, options) => {
  function getMessages () {
    var count = 0

    document.querySelectorAll('.unread-count').forEach(element => {
      const localCount = parseInt(element.innerHTML.replace(/\s+/g, ''))
      if (localCount > 0) {
        count++
      }
    })

    Franz.setBadge(count)
  }

  Franz.loop(getMessages)
}
