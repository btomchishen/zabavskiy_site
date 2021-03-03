$(document).ready(function () {
    $(".menu_icon").click(function () {
      $(".mobilenav").fadeToggle(500);
      $(".top-menu").toggleClass("top-animate");
      $(".mid-menu").toggleClass("mid-animate");
      $("body").toggleClass("fixed_hamburger");
      $(".bottom-menu").toggleClass("bottom-animate");
    });
  });

$(document).ready(function(){
    $(".nav_close").click(function(){
        $(".mobilenav").fadeToggle(500);
        $(".top-menu").toggleClass("top-animate");
        $(".mid-menu").toggleClass("mid-animate");
        $("body").toggleClass("fixed_hamburger");
        $(".bottom-menu").toggleClass("bottom-animate");
    });
});
  
$(document).ready(function () {
 
  var show = true;
  var countbox = ".benefits__inner";
  $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      var w_height = $(window).height(); // Высота окна браузера
      var d_height = $(document).height(); // Высота всего документа
      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.benefits__number').css('opacity', '1');
          $('.benefits__number').spincrement({
              thousandSeparator: "",
              duration: 1800
          });
           
          show = false;
      }
  });

});

$(document).ready(function(){
  $(".show").click(function(){
      $(".social_hidden").css('display', 'flex');
      $(".click").css('display', 'none');
  });
});

$(document).ready(function(){
  $(".close").click(function(){
      $(".social_hidden").css('display', 'none');
      $(".click").css('display', 'flex');
  });
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
