$(document).ready(function() {
  // FLip blocks
  function randomFlip() {

    var $blocks = $('div');
    var random = 1 + Math.floor(Math.random() * 107);

    $('div:nth-child(' + random + ')').addClass('flip-it');

    setInterval(function() {
      // var random = 1 + Math.floor(Math.random() * 75);
      // $blocks.removeClass('flip-it');
      // $('div:nth-child(' + random + ')').addClass('flip-it');
    }, 1250);

  }

  function deploy() {
    randomFlip();
  }

  deploy();
});