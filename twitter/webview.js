module.exports = (Franz, options) => {
  const getMessages = () => {
    const span = Array.prototype.filter.call(document.getElementsByTagName("a"), (a) => a.href.includes("/messages"))[0].getElementsByTagName("span");
    const count = span.length > 0 ? span[0].textContent : 0;
    Franz.setBadge(count);
  };
  Franz.loop(getMessages);
};
