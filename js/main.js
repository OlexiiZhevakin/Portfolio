$(function(){

   $(".menu a, .header__link").on("click", function (event) {
		event.preventDefault();
		const id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.menu__btn, .menu a').on('click', function() {
    $('.menu').toggleClass('menu--active');
  });

  const mixer = mixitup('.portfolio__content');

});