$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    "transform" : "translate(0px, "+ wScroll /2 +'%)'
  });

  $('.back-bird').css({
    'transform' : "translate(0px, "+ wScroll /4 +'%)'
  });

  $('.fore-bird').css({
    "transform" : "translate(0px, -"+ wScroll /40 +'%)'
  });
    if(wScroll > $('.image-gallery').offset().top - ($(window).height() / 1.2)) {
        $('.image-gallery figure').each(function(i){

          setTimeout(function(i){
             $('.image-gallery figure').eq(i).addClass('is-showing');
           }, 150 * (i+1));          
        });     
    }
}); //end


