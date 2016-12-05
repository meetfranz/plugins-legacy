const path = require('path');

module.exports = (Franz, options) => {
  let updates = 0;
  const modal = document.createElement('div');

  function showModal (text) {
    show(modal);
    modal.querySelector('p').innerHTML = text;
    updates += 1;
  }

  function hideModal () {
    hide(modal);
    modal.querySelector('p').innerHTML = '';
    updates -= 1;
  }

  // Replace window.alert to hide alerts in Franz
  const oldAlert = window.alert;
  window.alert = function () {
    // when Google Calendar displays an alert notify the user
    showModal.apply(oldAlert, arguments);
  };

  function show (element) {
    element.style.display = 'inherit';
  }

  function hide (element) {
    element.style.display = 'none';
  }

  const getMessages = () => {
    // get unread messages
    //const updates = document.getElementById('franz').getAttribute('data-unread');

    // get conversations in 'My Inbox'
    //const inbox = document.getElementById('franz').getAttribute('data-inbox');

    // set Franz badge
    // updates => passive unread count
    // inbox => active unread count
    Franz.setBadge(0, updates);
  };

  modal.id = 'franz-modal';
  modal.innerHTML = '<div class="modal-content"><span class="close">&times;</span><p></p></div>';
  modal.querySelector('.close').addEventListener('click', hideModal);
  document.body.appendChild(modal);

  document.addEventListener('keydown', function(e) { if (e.keyCode === 27) { hideModal(); } })

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'css', 'modal.css'));

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
