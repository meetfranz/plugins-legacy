module.exports = (Franz, options) => {
    function parseIntOrZero(val) {
        return isNaN(parseInt(val)) ? 0 : parseInt(val);
    }

    function getMessages() {
        var el = document.querySelector('.msgCount');
        var count;

        if (el) {
            // Legacy version of Google Voice
            count = parseIntOrZero(el.innerHTML.replace(/[\(\) ]/gi,""));
        } else {
            // Updated version of Google Voice
            const count_messages = parseIntOrZero(document.querySelector('gv-nav-button[label="Messages"] div[aria-label="Unread count"]').innerHTML);
            const count_calls = parseIntOrZero(document.querySelector('gv-nav-button[label="Calls"] div[aria-label="Unread count"]').innerHTML);
            const count_voicemails = parseIntOrZero(document.querySelector('gv-nav-button[label="Voicemail"] div[aria-label="Unread count"]').innerHTML);
            count = count_messages + count_calls + count_voicemails;
        }

        Franz.setBadge(count);
    }

    Franz.loop(getMessages);
}