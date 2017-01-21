if ($('.log-main-table').length == 0 && location.pathname != '/online/') {
  location.pathname = '/online/';
}

const path = require('path');

module.exports = (Franz, options) => {

  function getMessages() {

    const directMessages = $(".bx-messenger-cl-item .bx-messenger-cl-count-digit, .bx-messenger-cl-notify-button .bx-messenger-cl-count-digit").length;

    Franz.setBadge(directMessages);
  }

  Franz.loop(getMessages);
  Franz.injectCSS(path.join(__dirname, "style.css"));
}

$('#header').after('<button type="button" id="slideUp"></button>');

$(document).on('click', '#slideUp', function(){
	$('#header').slideToggle();
	var display = function () {
		if (localStorage.getItem('display') == 1) {
			return 0;
		} else {
			return 1;
		}
	}
	localStorage.setItem('display', display());
});

if (localStorage.getItem('display') == 0) {
	$('#header').hide();
}

$(document).on('click', '#logo_24_a', function(){
	window.open(this.href, '__blank');
	return false;
});