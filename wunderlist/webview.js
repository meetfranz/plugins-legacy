module.exports = (Franz, options) => {

   function getMessages() {
	var bell = document.querySelectorAll("#user-toolbar > div > a.activities-count > span")[0];

	counter = parseInt(bell.innerText);

	Franz.setBadge(counter);
  };

  Franz.loop(getMessages);

}
