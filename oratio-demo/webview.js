module.exports = (Franz, options) => {
  function getMessages() {
    let count = 0;
    let stati = document.querySelectorAll('.tabs .status');
    [].forEach.call(stati, function(item) {
      let el = item.querySelectorAll('span');
      if (el && el.length) count += parseInt(el[0].innerHTML.replace('(', '').replace(')', ''));
    });

    Franz.setBadge(count);
  }

  setInterval(getMessages, 1000);
}
