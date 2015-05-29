$(document).ready(function() {

  $(window).bind('scroll', function(e) {
    scrollingfn();
  });

  $('a.header').click(function() {
    $('html, body').animate({ scrollTop:$('#header').offset().top - '60'}, 1000,
      function() {
        scrollingfn();
      });
    return false;
  });

  $('a.service').click(function() {
    $('html, body').animate({ scrollTop:$('#service').offset().top - '60'}, 1000,
      function() {
        scrollingfn();
      });
    return false;
  });
  
  $('a.portfolio').click(function() {
    $('html, body').animate({ scrollTop:$('#portfolio').offset().top - '60'}, 1000,
      function() {
        scrollingfn();
      });
    return false;
  });

  $('a.pricing').click(function() {
    $('html, body').animate({ scrollTop:$('#pricing').offset().top - '60'}, 1000,
      function() {
        scrollingfn();
      });
    return false;
  });
  
  $('a.aboutus').click(function() {
    $('html, body').animate({ scrollTop:$('#aboutus').offset().top - '60'}, 1000,
      function() {
        scrollingfn();
      });
    return false;
  });

$('a.testimonials').click(function() {
    $('html, body').animate({ scrollTop:$('#testimonials').offset().top - '60'}, 1000,
      function() {
        scrollingfn();
      });
    return false;
  });
  
$('a.contactus').click(function() {
    $('html, body').animate({ scrollTop:$('#contactus').offset().top - '60'}, 1000,
      function() {
        scrollingfn();
      });
    return false;
  });

 $(window).scroll(function() {
      if ($(this).scrollTop() > 400) {
          $('#scroller2').fadeIn();
      } else {
          $('#scroller2').fadeOut();
      }
  });

// Script for alert box

$( "#contact-form" ).submit(function( event ) {
  //alert( "Handler for .submit() called." );
  event.preventDefault();
  $.alert('Thank you for your message. We will get back to you as soon as possible', {
    closeTime: 5000,
    onClose: function () {
      return true;

      // Need to add a flag to check - see: http://stackoverflow.com/questions/7610871/how-to-trigger-an-event-after-using-event-preventdefault
    }
  })
  
});

});



function scrollingfn() {
  var scrollPosition = $(window).scrollTop();
}

// Script for top Navigation Menu
    jQuery(window).bind('scroll', function () {
      if (jQuery(window).scrollTop() > 100) {
        jQuery('#headnev').addClass('navbar-fixed-top').removeClass('topnavbar');
        jQuery('body').addClass('bodytopmargin').removeClass('bodynomargin');
      } else {
        jQuery('#headnev').removeClass('navbar-fixed-top').addClass('topnavbar');
        jQuery('body').removeClass('bodytopmargin').addClass('bodynomargin');
      }
    });



// Script for Mixitup Plugin
$(function(){
        $('#Grid').mixitup();
      });



