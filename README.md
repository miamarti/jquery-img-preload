JQuery Images Preload
===========
[jquery-img-preload] Images Preload on jQuery

<p>
  <img src="https://img.shields.io/badge/jquery--img--preload-release-green.svg">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg">
  <img src="https://img.shields.io/bower/v/bootstrap.svg">
</p>

## Bower install de dependency
```
$ bower install jquery-img-preload --save
```

## HTML Page include
```
<script src="bower_components/jquery-img-preload/dist/img-preload.min.js"></script>
```

## Creating preload
```
$(document).ready(function() {
    
    var config = {
        cycles: {
            '1': {
                url: 'assets/slides/slide01/Cycle-0.sprite.png'
            },
            '2': {
                url: 'assets/slides/slide01/Cycle-1.sprite.png'
            },
            '3': {
                url: 'assets/slides/slide01/Cycle-2.sprite.png'
            },
            '4': {
                url: 'assets/slides/slide01/Cycle-3.sprite.png'
            }
        }
    };
    
    $.imgPreload(config.cycles, function(obj){
        console.log('Preload successfully completed');
    });
    
});
```

## Settings

### #play
Starts playing continuous animation that doesn't stop until interrupted by other methods.
```
$(document).ready(function() {

    var settings = { attribute: 'img' };
    var config = {
        cycles: {
            '1': {
                img: 'assets/slides/slide01/Cycle-0.sprite.png'
            },
            '2': {
                img: 'assets/slides/slide01/Cycle-1.sprite.png'
            },
            '3': {
                img: 'assets/slides/slide01/Cycle-2.sprite.png'
            },
            '4': {
                img: 'assets/slides/slide01/Cycle-3.sprite.png'
            }
        }
    };
    
    $.imgPreload(config.cycles, config, function(obj){
        console.log('Preload successfully completed');
    });
    
});
```
