$(window).scroll(function(){

var wScroll = $(this).scrollTop();
var offset1 = $('.large-window-1.periscope-1').offset().top;
var offset2 = $('.large-window-2.periscope-2').offset().top;
var offset3 = $('.large-window-3.periscope-3').offset().top;
var offset4 = $('.large-window-4.periscope-4').offset().top;
var wHeight = $(window).height();
var windowsize = $(window).width();
var opacity1 = (wScroll - offset1 + 800) / (wScroll / 10);
var opacity2 = (wScroll - offset1 - 100) / (wScroll / 10);
var opacity3 = (wScroll - offset1 - 1300) / (wScroll / 6);
var opacity4 = (wScroll - offset1 - 2500) / (wScroll / 6);

  $('.logo').css({
	"transform" : "translate(0px, "+ wScroll /2 +'%)'
  });

  $('.back-bird').css({
	'transform' : "translate(0px, "+ wScroll /4 +'%)'
  });

  $('.fore-waifu').css({
	"transform" : "translate(0px, -"+ wScroll /30 +'%)'
  });
	if(wScroll > $('.image-gallery').offset().top - ( wHeight/ 1.2) ) {
		$('.image-gallery figure').each(function(i){

		  setTimeout(function() {
			 $('.image-gallery figure').eq(i).addClass('is-showing');
		   }, 350 * (i+1));          
		});
	  }


	if (wScroll > (offset1 - wHeight) ) {
	  
	  $('.large-window-1.periscope-1').css({'background-position' : 'top' + (wScroll - offset1 + 'px')
		});
	}

	if (wScroll > (wHeight *  6 ) ) {
			console.log(wScroll);
			$('.circle-downarrow').css({'transform' : 'rotate(180deg)'});
			$('.circle-downarrow').css({'transition' : 'all 0.8s ease-in-out'});
		}
	else {
		$('.circle-downarrow').css({'transform' : 'rotate(0deg)'});
		$('.circle-downarrow').css({'transition' : 'all 0.8s ease-in-out'});
	}

	if(wScroll > (offset1 - wHeight)) {
	    $('.large-window-1.periscope-1').css({'background-position':'center '+ (wScroll - offset1 +'px')});	
	    $('.window-tint-1').css({'opacity': opacity1});	
 	 }

 	 if(wScroll > (offset2 - wHeight)) {
		$('.large-window-2.periscope-2').css({'background-position':'center '+ (wScroll - offset2 +'px')});
		$('.window-tint-2').css({'opacity': opacity2});
	}

	if (windowsize > 1280) {
	 	 if(wScroll > (offset3 - wHeight)) {
	 	 	$('.large-window-3.periscope-3').css({'background-position':'top left '+ (wScroll - offset3 +'px')});
	 		$('.window-tint-3').css({'opacity': opacity3});
	 	}
	 	if(wScroll > (offset4 - wHeight)) {	
			$('.large-window-4.periscope-4').css({'background-position':'top right '+ (wScroll - offset4 +'px')});
			$('.window-tint-4').css({'opacity': opacity4});
		}
	}

	console.log("Opacity 3:" + opacity3);
	console.log("Opacity 4:" +opacity4);
}); //end
