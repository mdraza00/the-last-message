var msg = 0;
$("#NEXT").click(function() {
  msg++;
  if (msg == 1) {
    $("#cir").fadeOut();
    setTimeout(function() {
      $("#prlgm").removeClass("hide").fadeIn();
    }, 300);

  }
  if( msg == 2){
    $("#prlgm").fadeOut();
    $("#NEXT").addClass("hide");
    setTimeout(function(){
      $("#dmd").removeClass("hide").fadeIn();
    }, 400);
  }
});
setTimeout(function() {
  $("#prlgm").fadeOut();
  $("#dmd").fadeOut();
}, 1);
