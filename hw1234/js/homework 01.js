        $(document).ready(function() {
        var delay = function(s){
          return new Promise(function(resolve,reject){
           setTimeout(resolve,s);
          });
        };
    $(window).on('load', function(event) {
        delay().then(function () {
            $('.MainBannertext').addClass('animated bounceInRight');
            $('.button').hide(function() {
            });
            return delay(1000);
        }).then(function () {
             $('.button').show(function() {
            });
            $('.button').addClass('animated bounceInRight');
        });
     });
});