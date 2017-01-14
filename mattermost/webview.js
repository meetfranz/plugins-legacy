Notification.requestPermission = function(callback){ callback('granted');}

module.exports = (Franz, options) => {
    function getMessages() {
        var element = document.querySelector(".badge-notify");
    	Franz.setBadge(element !== null ? element.innerHTML : 0);
    };
    Franz.loop(getMessages);
}
