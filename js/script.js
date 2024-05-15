// Menu burger ====================================================
$(document).ready(function() {
	$('.menu-burg').click(function() {
	  $('.menu-burg__burger').toggleClass('deactive');
	  $('.menu-burg__close').toggleClass('active');
	  $('.nav').toggleClass('active');
	  
	  // Додаємо або видаляємо клас 'lock' для 'main'
	  if ($('.nav').hasClass('active')) {
		 $('main, footer').addClass('lock');
	  } else {
		 $('main, footer').removeClass('lock');
	  }
	});
 });
 // Menu burger END ================================================