module.exports = (Franz, options) => {

   function getMessages() {
	var bell = document.querySelectorAll("#view65 > span")[0];

	counter = parseInt(bell.innerText);

	Franz.setBadge(counter);
  };

  Franz.loop(getMessages);

}
