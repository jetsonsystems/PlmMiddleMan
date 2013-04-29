$(document).ready(function(){

  // Activate the hamburger slider
  $(".hamburger-button").pageslide({ direction: "right", modal: false });

    // Hack for Entypo font-icon visual bug on windows
    $(".icon-button a").add("header a").add("nav a").add(".icon").attr('style', 'margin-top:-10px;padding-bottom:10px;');

});
