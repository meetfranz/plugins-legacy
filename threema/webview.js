// orat.io integration
module.exports = (Franz, options) => {
  function getMessages() {
    const count = {};
    const FranzData = document.querySelector('#FranzMessages').dataset;
    if (FranzData) {
      count.count = FranzData.direct;
      count.count_indirect = FranzData.indirect;
    }

    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}
