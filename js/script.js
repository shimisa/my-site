/*********************************
| | | |  preloader | | | | | | |
*********************************/

$(window).on('load', function () { //make sure that whole site loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
  });
