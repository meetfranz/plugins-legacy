const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    const newMessage = document.getElementsByClassName("Fe7ul3Lt _2DggF3sL _2izplv41")[0].innerText == "New Tweets";
    Franz.setBadge(newMessage ? "." : "0");
  Franz.loop(getMessages);
};
