import $ from 'jquery';

  (function() {
    var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
  
    if (isWindows) {
      // if we are on windows OS we activate the perfectScrollbar function
      // $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
  
      $('html').addClass('perfect-scrollbar-on');
    } else {
      $('html').addClass('perfect-scrollbar-off');
    }
  })();

  var mobile_menu_visible = 0;

$(document).on('click', '.navbar-toggler', function() {
    var $toggle = $(this);

    if (mobile_menu_visible == 1) {
      $('html').removeClass('nav-open');

      $('.close-layer').remove();
      setTimeout(function() {
        $toggle.removeClass('toggled');
      }, 400);

      mobile_menu_visible = 0;
    } else {
      setTimeout(function() {
        $toggle.addClass('toggled');
      }, 430);

      var $layer = $('<div class="close-layer"></div>');

      if ($('body').find('.main-panel').length != 0) {
        $layer.appendTo(".main-panel");

      } else if (($('body').hasClass('off-canvas-sidebar'))) {
        $layer.appendTo(".wrapper-full-page");
      }

      setTimeout(function() {
        $layer.addClass('visible');
      }, 100);

      $layer.click(function() {
        $('html').removeClass('nav-open');
        mobile_menu_visible = 0;

        $layer.removeClass('visible');

        setTimeout(function() {
          $layer.remove();
          $toggle.removeClass('toggled');

        }, 400);
      });

      $('html').addClass('nav-open');
      mobile_menu_visible = 1;

    }

  });