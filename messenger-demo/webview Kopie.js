module.exports = (Franz, options) => {
  function getMessages() {
    let elements = document.querySelectorAll('._5fx8,._1ht3');
    let count = 0;

    for (let i = 0; i < elements.length; i++) {
      let el = elements[i].querySelectorAll("._56ck")[0];
      let style = window.getComputedStyle(el);

      if(style.getPropertyValue('display') == "none") {
        count++;
      }
    }

    Franz.setBadge(count);
  }

  setInterval(getMessages, 1000);

  let saveLoginEl = document.getElementById('u_0_3');
  if(saveLoginEl) {
    saveLoginEl.checked = "checked";
  }
}
