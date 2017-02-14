if ($('.log-main-table').length == 0 && location.pathname != '/online/') {
  location.pathname = '/online/';
  return false;
}

const path = require('path');

module.exports = (Franz, options) => {

  function getMessages() {

    const directMessages = $(".bx-messenger-cl-item .bx-messenger-cl-count-digit, .bx-messenger-cl-notify-button .bx-messenger-cl-count-digit, #bx-desktop-tab-notify .bx-desktop-tab-counter-digit, #bx-desktop-tab-im-lf .bx-desktop-tab-counter-digit").length;

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

$('.bx-layout-table > tbody > tr:first').after($('.bx-im-fullscreen-popup-table .bx-im-fullscreen-popup-td2'));

$(document).ready(function () {
    $('body').off('click', '#logo_24_a, .bx-messenger-panel-title-link, .bx-notifier-item-text a').on('click', '#logo_24_a, .bx-messenger-panel-title-link, .bx-notifier-item-text a', function(event){
        window.open(this.href, '__blank');
        event.stopPropagation();
        event.stopImmediatePropagation();
        event.preventDefault();
        return false;
    });
});