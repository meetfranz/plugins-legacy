const path = require('path');

module.exports = (Franz, options) => {
    const getMessages = () => {
        let updates = 0;
        let inbox = 0;

        $('.b-folders-user .ui-droppable').each((i, obj) => {
            const countText = $(obj).find('.count').first().html();
            if (typeof countText === 'string' && countText !== '') {
                if ($(obj).hasClass('system')) {
                    if ($(obj).hasClass('i-am-inbox')) {
                        // only get messages in 'Inbox', not other system folders
                        inbox += parseInt(countText);
                    }
                } else {
                    // get unread messages from folders
                    updates += parseInt(countText);
                }
            }
        });

        // set Franz badge
        // inbox => active unread count
        // updates => passive unread count
        Franz.setBadge(inbox, updates);
    };

    // check for new messages every second and update Franz badge
    Franz.loop(getMessages);
};
