

   








$(document).ready(function( $ ) {


$('.project-list').mixItUp({
 
  effects: ['fade','rotateZ'],
     easing: 'snap',
}); 

// $('#titre_1').animate({
//     fontSize : ['50px', 'linear'], // cette propriété s'animera de façon linéaire
//     width : '200px' // les autres s'animeront de la façon définie ensuite : swing
// }, 'swing');
$('#titre_1').hide();
$('.fill').hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300 ) {
		$('#titre_1').fadeIn(1000);
		console.log(window)
		}
	
		if ($(this).scrollTop() > 1100 ) {
		$('.fill').fadeIn(1500);
		}
	});
  
	
	  	
    // CounterUp
	$(document).ready(function( $ ) {
		if($("span.count").length > 0){	
			$('span.count').counterUp({
					delay: 10, // the delay time in ms
			time: 1500 // the speed time in ms
			});
		}
	});
	
  	// Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

	$('a[href*="#"]').on('click', function(e) {
		e.preventDefault()
	  
		$('html, body').animate(
		  {
			scrollTop: $($(this).attr('href')).offset().top,
		  },
		  1000,
		  'linear'
		)
	  })
	


});	
