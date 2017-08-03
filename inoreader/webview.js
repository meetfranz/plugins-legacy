module.exports = (Franz, options) => {
    function getMessages() {
    	const count = document.querySelector('#unread_cnt_all_items').innerText || 0;

        Franz.setBadge(count);
    }

    Franz.loop(getMessages);
}
