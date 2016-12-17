module.exports = (Franz, options) => {
  var last_messages = {};
  function doAllTheThings() {
		Franz.setBadge(getMessageCount());
  }

  /*
   * Find all of the per-conversation divs in the "buddy list" (Conversations)
   * iframe, and extract the number of messages from them.
   */
  function getMessageCount() {
    // get the iframe for the Conversations
    var buddylist_iframe = document.querySelectorAll('#hangout-landing-chat')[0].getElementsByTagName('iframe')[0];
    // get the content document for the buddylist iframe
    var buddylist = buddylist_iframe.contentDocument ? buddylist_iframe.contentDocument : buddylist_iframe.contentWindow.document;
    // get the div containing the conversations
    var conversations_div = buddylist.querySelectorAll("[aria-label=Conversations]")[0];
    // each conversation is contained in a direct child of conversations_div
    var num_messages = 0;
    for ( let convo of conversations_div.childNodes ) {
      // find the div that tells us the unread message count
      var msgcount = 0;
      for ( let d of convo.querySelectorAll('[aria-label]') ) {
        var convo_str = d.attributes["aria-label"].value;
        if ( ! convo_str.startsWith("Conversation with") ) {
          continue;
        }
        // ok, we have the right div. Find the count and then exit the loop
        try {
          msgcount = parseInt(convo_str.match(/(\d+) unread message/)[1]);
        } catch(err) {
          msgcount = 0;
        }
        //console.log(convo_str + " Message Count: " + msgcount);
        num_messages = num_messages + msgcount;
        break;
      }
      //console.log(convo_str + " Has msgcount: " + msgcount);
      // if we have unread messages, send a popup for the latest one
      if ( msgcount > 0 ) {
        // find the div with the username and latest message
        user_div = convo.querySelectorAll('[hovercard-email]')[0].childNodes[0];
        // get the user's name
        user_name = user_div.querySelectorAll('[title][aria-hidden]')[0].attributes['title'].value;
        // the message is the first (currently only) div with one text child...
        for ( let d of user_div.childNodes ) {
          // nodeType 3 is a text node
          if ( d.childNodes.length != 1 || d.childNodes[0].nodeType != 3 ) {
            continue;
          }
          msg = d.innerHTML;
          //console.log("New Message from " + user_name + ": " + msg);
          if ( ! last_messages.hasOwnProperty(user_name) ) {
            // if we haven't seen this message, just add it to the var; no popup
            last_messages[user_name] = msg;
          } else {
            // otherwise, see if it's the same as the last message we saw
            if ( last_messages[user_name] != msg ) {
              // new message; popup and update
              new Notification(user_name + ' (Hangouts)', {body: msg});
              last_messages[user_name] = msg;
            }
          }
          break;
        }
      }
    }
    //console.log("num_messages=" + num_messages);
    return num_messages;
  }

  Franz.loop(doAllTheThings);
}
