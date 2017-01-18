module.exports = (Franz, options) => {
  const className = 'is_new';
  const topicsIndex = 0;
  const dmIndex = 1;
  const notificationsIndex = 2;
  const likesActivitiesIndex = 3;

  const hasUnreads = (sidebarItems, index) => {
    return Number($(sidebarItems.get(index)).hasClass(className));
  };

  const getUnreads = () => {
    const sidebarItems = $(".sidebar__item");
    const indirectMessages = hasUnreads(sidebarItems, topicsIndex) + hasUnreads(sidebarItems, likesActivitiesIndex);
    const directMessages = hasUnreads(sidebarItems, dmIndex) + hasUnreads(sidebarItems, notificationsIndex);

    Franz.setBadge(directMessages, indirectMessages);
  };

  Franz.loop(getUnreads);
};
