module.exports = (Franz, options) => {
  const getUnreads = () => {
    const e = $('.badge--notification');
		if (e) {
			Franz.setBadge(Number(e.text()));
		} else {
			Franz.setBadge(0)
		}
  };

  Franz.loop(getUnreads);
};
