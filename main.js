(function($) {
    var $html = $('html'),
      $h1 = $('h1'),
      colors = [
        '#1ea18b',
      ],
      txt = [
        'Karam',
        'Its your Birthday',
        'let`s Party',
        '<span class="fa fa-4x fa-birthday-cake"></span><hr><h2>HAPPY BIRTHDAAAY</h2>'
      ],
      animate = function(it, direction) {
        var c = Math.floor((Math.random() * colors.length));
        var m = direction == "left" ? -1 : 1;
        $h1
          .velocity({
            opacity: 1,
            translateY: [0, -2000],
            translateX: [0, 0]
          }, {
            duration: 1200,
            delay: 0,
            easing: [150, 15],
            begin: function(el) {
              $h1.css({
                'background-color': colors[it % colors.length]
              });
              $h1.html(txt[it]);
            }
          })
          .velocity({
            translateX: m * 1500
          }, {
            duration: 1000,
            delay: 2500,
            easing: [50, 14],
            complete: function() {
              animate(it == txt.length - 1 ? 0 : it + 1, direction == "left" ? "right" : "left");
            }
          });
      }
  
    animate(0, "left");
  })(window.jQuery);