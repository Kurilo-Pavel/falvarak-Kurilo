



$(function () {
  $(".center_image").click(function (event) {
    $(".double_image").fadeIn(500);
    $(".hover_display").addClass("active");
  });
  $(".hover_display").click(function () {
    $(".double_image").fadeOut(500);
    $(".hover_display").removeClass("active");
  });
});
