module.exports = (Franz, options) => {

  function tryGetCount(countSelectionFunction) {
    try {
        return parseInt(countSelectionFunction()) || 0;
    } catch (e) {
        return 0;
    }
  }

  function getMessages() {
    var count =
        tryGetCount(function(){
            // Get count for old Google Voice UI
            return document.querySelector('.msgCount').innerHTML.replace(/[\(\) ]/gi,"");
        }) + tryGetCount(function() {
            // Get count for new Google Voice UI
            return document.querySelector('div[aria-label="Unread count"]').innerHTML;
        });
    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}
