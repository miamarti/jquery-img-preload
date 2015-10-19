$.imgPreload = function(){
    var options;
    var planned = 0;
    var loaded = 0;
    var callback = new Function();

    if(typeof arguments[1] === 'function'){
        callback = arguments[1];
        options = arguments[2];
    } else {
        options = arguments[1];
    }

    var defaults = {
        attribute: 'url'
    };
    var settings = $.extend({}, defaults, options);

    for(var key in arguments[0]){
        planned++;
    }

    for(var key in arguments[0]){
        $($("<img />").attr("src", arguments[0][key][settings.attribute])).load(function() {
           loaded++;
        });
    }

    var watchdog = function(){
        if(planned === loaded){
            callback();
        } else {
            setTimeout(watchdog, 10);
        }
    };
    watchdog();
};
