//gallery
var
  $smallImage = $(".center__image"),
  $display = $(".hover_display"),
  $li = $(".section__ul").find(">li"),
  $lightBox = $(".double__block"),
  $close = $(".double__button--close"),
  $prev = $(".double__button--prev"),
  $next = $(".double__button--next"),
  targetImg,
  liIndex;

$smallImage.click(function () {
  liIndex = $(this).parent().index();
  targetImg = $(this).attr("src");
  $lightBox.find("img").attr("src", targetImg);
  $display.slideDown(1000);
  $lightBox.fadeIn(1000);
  $lightBox.css("display", "block");
});

$close.click(function () {
  $lightBox.fadeOut(500);
  $display.slideUp(1000);
});

$next.click(function () {
  if ((liIndex + 1) < $li.length) {
    targetImg = $li.eq(liIndex + 1).find("img").attr("src");
    liIndex++;
  } else {
    targetImg = $li.eq(0).find("img").attr("src");
    liIndex = 0;
  }
  $lightBox.find("img").attr("src", targetImg);
});

$prev.click(function () {
  if (liIndex > 0) {
    targetImg = $li.eq(liIndex - 1).find("img").attr("src");
    liIndex--;
  } else {
    targetImg = $li.eq($li.length - 1).find("img").attr("src");
    liIndex = $li.length - 1;
  }
  $lightBox.find("img").attr("src", targetImg);
});

//menu
$(".burg").click(function () {
  if ($("#burg_btn").is(':checked')) {
    $(".nav__menu").css("display", "block").css("visibility", "visible");
  } else {
    $(".nav__menu").css("display", "none").css("visibility", "hidden");
  }
});
//commit
$(".commit__button").click(function () {
  $(".commit__square").prepend('<span>' +'&#9996;'+($(".commit__name").val())+'</span>' + "<br>" + '<p>' + ($("#message").val()) +'</p>' + "<br>");
});

