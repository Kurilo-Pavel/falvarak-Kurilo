//gallery
var
  $smallImage = $(".center__image"),
  $display = $(".hover_display"),
  $li = $(".section__ul").find(">li"),
  $lightBox = $(".double__block"),
  $close = $(".full__image"),
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
    $(".nav__menu").slideUp(1000);
    $(".nav__menu").css("display", "block");
  } else {
    $(".nav__menu").slideDown(1000)
  }
});

$(".nav__menu__li--services").click(function () {
  if ($("#submenu").is(":checked")) {
    $(".nav__menu--sub").slideDown(1000);
    $(".nav__menu--sub").css("display", "block");
  } else {
    $(".nav__menu--sub").slideUp(1000);
  }
});


//commit
$(".commit__button").click(function () {
  $(".commit__square").prepend('<span>' + '&#9996;' + ($(".commit__name").val()) + '</span>' + "<br>" + '<p>' + ($("#message").val()) + '</p>' + "<br>");
});


//about_us slaider
const container = document.getElementById('section_container')
const leftCont = document.getElementById('left_container')
const rightCont = document.getElementById('right_container')

const cont = document.querySelectorAll('#section_container div')

let idx = 0

function changeContainer() {
  if (idx > cont.length - 1) {
    idx = 0
  } else if (idx < 0) {
    idx = cont.length - 1
  }
  container.style.transform = `translateY(${-idx * 450}px)`

}

leftCont.addEventListener('click', () => {
  idx--
  changeContainer()

})

rightCont.addEventListener('click', () => {
  idx++
  changeContainer()
 
})