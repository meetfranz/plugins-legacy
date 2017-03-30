module.exports = (Franz, options) => {

    function sum( obj ) {
        var sum = 0;
        for( var el in obj ) {
            if( obj.hasOwnProperty( el ) ) {
                sum += parseFloat( obj[el] );
            }
        }
        return sum;
    }

    function getMessages() {
	// get message counts for each directory from roundcube js environement
        const mail_dict = rcmail.env.unread_counts;

	// loop through all directory and sum unread messages
        var indir = sum(mail_dict);

	// get current selected directory
        const curr = rcmail.env.mailbox ? rcmail.env.mailbox : "INBOX";

	// subtract message count of current directory from global count (direct/indirect messages)
        if (curr in mail_dict) {
            dir = mail_dict[curr];
            indir -= dir;
        }

	// update message count 
	//   dir   = directMessages (messages of current selected directory)
	//   indir = indirectMessages (messages of other directories)
        Franz.setBadge(dir, indir);
    }

    Franz.loop(getMessages);
}
