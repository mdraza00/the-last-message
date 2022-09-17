var msg = 0;
$("#NEXT").click(function() {
  msg++;
  if (msg === 1) {
    $("#cir").fadeOut();
    setTimeout(function() {
      $("#prlgm").removeClass("hide").fadeIn();
    }, 300);

  }
  if( msg === 2){
    $("#prlgm").fadeOut();
    setTimeout(function(){
      $("#dmd").removeClass("hide").fadeIn();
    }, 400);
  }
  if(msg === 3){
    $("#dmd").fadeOut();
    $("#NEXT").addClass("hide");
    setTimeout(function(){
      $("#last-message").removeClass("hide").fadeIn();
    }, 400);
  }
});
setTimeout(function() {
  $("#prlgm").fadeOut();
  $("#dmd").fadeOut();
  $("#last-message").fadeOut();
}, 1);
