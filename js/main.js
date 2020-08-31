"use strict";
  // variables
  var nav = jQuery(".navbar");
  var lcard = jQuery(".my-card");
  var rmenu = jQuery(".right-menu");

  //dinamicaly add background
  jQuery.each(jQuery('[data-bg]'), function(){
    if (jQuery(this).attr('data-bg').length > 0){
      jQuery(this).css('background-image', 'url('+ jQuery(this).attr('data-bg') +')');
    }
  });

  jQuery(window).on("load", function(){
    setTimeout(function(){
      jQuery(".overlay").fadeOut("slow");
    }, 2400)
  });
  

jQuery(document).ready(function(){

  // skills animations
  setTimeout(function(){
      loadDaBars();
    }, 2400)

  // smooth scroll to div
    jQuery(function() {
      jQuery('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = jQuery(this.hash);
          target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            jQuery('html, body').animate({
              scrollTop: target.offset().top - 30
            }, 1000);  
            jQuery("#main-menu li").removeClass("active");
            jQuery(this).parent().addClass("active");
            return false;
          }        
        }
      });
    });    
    // initilizing scrollspy
  jQuery(document).on("scroll", onScroll);
  
  // masonry isotope gride
  jQuery('#works-grid').isotope({ 
    itemSelector: '.work-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });

    // form ajax settings
     jQuery(function() {

          // Get the form.
          var form = jQuery('#contactForm');

          // Get the messages div.
          var formMessages = jQuery('#form-messages');

          // Set up an event listener for the contact form.
          jQuery(form).submit(function(e) {
            // Stop the browser from submitting the form.
            e.preventDefault();
            // Serialize the form data.
            var formData = jQuery(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
              type: 'POST',
              url: jQuery(form).attr('action'),
              data : formData,
              success : function(response) {
                jQuery("#name-input").val("");
                jQuery("#email-input").val("");
                jQuery("#sub-input").val("");
                jQuery("#message").val("");
                
                jQuery(formMessages).addClass("visible");
              }
            })
          });

      });

    
});

// check if window scroll pass element
// fixed elements
jQuery(window).on("scroll", function(){
  if ( jQuery(window).scrollTop() > nav.outerHeight() ) {
    lcard.css({
          'top': '30px',
            'left': 'auto',
            'width': '285px',
            'bottom': 'auto',
            'position': 'fixed'
        });
        rmenu.css({
          'top': '30px',
            'left': rmenu.offset().left,
            'right': 'auto',
            'bottom': 'auto',
            'position': 'fixed'
        });
    } else {
      lcard.css({
          'top': '0',
            'left': 'auto',
            'width': '285px',
            'bottom': 'auto',
            'position': 'absolute'
        });
        rmenu.css({
          'top': '0',
            'left': 'auto',
            'right': '-45px',
            'bottom': 'auto',
            'position': 'absolute'
        });
  }
});

// current year
jQuery('#currentYear').html(new Date().getFullYear());

// right navigation scrollspy
function onScroll(event){
  var scrollPosition = jQuery(document).scrollTop();
  jQuery('.right-menu a').each(function () {
    var currentLink = jQuery(this);
    var refElement = jQuery(currentLink.attr("href"));
    if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
      jQuery('.right-menu ul li').removeClass("active");
      currentLink.parent().addClass("active");
    }
    else{
      currentLink.parent().removeClass("active");
    }
  });
}

    
// animate progress bars
function loadDaBars() {
  jQuery(".meter > span").each(function() {
    jQuery(this).data("origWidth", jQuery(this).width())
      .width(0)
      .animate({
        width: jQuery(this).data("origWidth")
      }, 1200);
  });
}

      

