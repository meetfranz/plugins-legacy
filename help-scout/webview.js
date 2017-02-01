module.exports = (Franz, options) => {
	function getMessages() {
		let mine = '';
		let unassigned = '';
		let total = '0';

		if ($('.dropdown.mailboxes').length && $('.dropdown.mailboxes a').hasClass('active')) {
			mine = $('li.mine a .badge').text();
			unassigned = $('li.unassigned a .badge').text();
		} else if (window.location.href === 'https://secure.helpscout.net/dashboard/') {
			mine = 0;
			unassigned = 0;

			$('.card.mailbox .c-list').each(function() {
				let m = $(this).find('a:nth-child(2)').find('.count').text();
				let u = $(this).find('a:first-child').find('.count').text();

				if ($.isNumeric(m)) {
					mine += parseInt(m);
				}

				if ($.isNumeric(u)) {
					unassigned += parseInt(u);
				}
			});

			mine = mine.toString();
			unassigned = unassigned.toString();
		}

		if (mine != '') {
			total = mine;
		}

		if (unassigned != '') {
			total = total + '/' + unassigned;
		}

		Franz.setBadge(total);
	}

	Franz.loop(getMessages);
}
