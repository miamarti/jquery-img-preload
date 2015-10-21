/*!
 * jQuery-Img-Preload - 16th Out 2015
 * https://github.com/miamarti/jquery-img-preload
 *
 * Licensed under the MIT license.
 * http://opensource.org/licenses/MIT
 */
$.imgPreload = function(config, callback){
    if(config){
        $(config.loading).fadeIn('slow');

        var div = $('<div/>');
        $('body').append(div);

        for(var key in config.list){
            $(div).append($('<img/>').attr('src', config.list[key][config.attr]));
        }

        if(callback){
            setTimeout(function(){
                $(div).remove();
                $(config.loading).fadeOut('slow');
                callback();
            }, 2000);
        }

        return {
            clear: function(){
                $(div).remove();
            }
        };
    }
};
