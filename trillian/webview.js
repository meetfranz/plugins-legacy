const path = require('path');

module.exports = (Franz, options) => {
    const getMessages = () => {
        let count = 0;

        $('div.unread').find('.count').each((i, obj) => {
          count += parseInt(obj.innerText);
        });

        Franz.setBadge(count);
    };

    // check for new messages every second and update Franz badge
    Franz.loop(getMessages);
};
