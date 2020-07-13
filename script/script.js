$(document).ready(function() {
  $('.mobile-menu-button').click(function() {
    $('.mobile-menu-button, nav').toggleClass('active');
    $('body').toggleClass('lock');
    });
  $('.headingSearch').submit(function(e) {
    e.preventDefault();
    $('.input1').css('display', 'block');
    
  });
  $(document).click(function(e) { 
		var input = $('.input1'); 
		if (!input.is(e.target) && input.has(e.target).length === 0) { 		
      input.hide(); 

  }});

});