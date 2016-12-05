module.exports = (Franz, options) => {
    function getMessages() {
        const count = feedbin.count_data.unread_entries.length || 0;

        Franz.setBadge(count);
    }

    Franz.loop(getMessages);
}
