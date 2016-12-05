const path = require('path');

module.exports = (Franz, options) => {
    const getMessages = () => {
        const unreadNotifications = parseInt(document.getElementById('notifications_amount').innerHTML);

        Franz.setBadge(unreadNotifications);
    }

    Franz.loop(getMessages);

    Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
};