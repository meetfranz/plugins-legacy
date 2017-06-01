module.exports = (Franz, options) => {
  function getMessages() {
    const googleButton = document.getElementById('google_auth_button');
    if (googleButton) {
      googleButton.onclick = function(){ return Dialog.Login.loginWithGoogle(true, 'https://app.asana.com/-/oauth2callback', 'https:\/\/app.asana.com\/') } ;
    }
    const inbox = document.getElementsByClassName('topbar-notificationsButton has-newNotifications');
    const count = inbox.length;

    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}
