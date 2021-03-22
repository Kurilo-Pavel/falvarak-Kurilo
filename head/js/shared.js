var
  $smallImage = $(".center_image"),
  $display = $(".hover_display"),
  $li = $(".section_ul").find(">li"),
  $lightBox = $(".double_block"),
  $close = $(".double_close"),
  $prev = $(".double_prev"),
  $next = $(".double_next"),
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



