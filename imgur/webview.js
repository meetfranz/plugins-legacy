// imgur.com integration
module.exports = (Franz, options) => {
  function getMessages() {
    var count = 0;
    var ImgurIconData = parseInt(document.querySelector('span.unread-count').innerHTML);
    var ImgurMessageData = document.querySelectorAll('.message-list-item-badge--unread').length;
    if (ImgurIconData > 0) {
      count = ImgurIconData;
    }
    if (ImgurMessageData > 0) {
      count = ImgurMessageData;
    }

    Franz.setBadge(count,0);
  }

  Franz.loop(getMessages);
}
