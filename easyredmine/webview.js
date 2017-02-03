module.exports = (Franz, options) => {
    function getMessages() {
        Franz.setBadge(document.querySelectorAll('.sign.count').length);
    }
    Franz.loop(getMessages);
}
