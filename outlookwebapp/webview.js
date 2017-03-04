module.exports = (Franz, options) => {
  function getMessages() {
  	var numberUnreadMessages = document.getElementById('mailtree').getElementsByClassName('trNd')[1].getAttribute("_iuc");
    Franz.setBadge(numberUnreadMessages);
  }

  Franz.loop(getMessages);
}
