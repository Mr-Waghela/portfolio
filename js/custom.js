// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });


    // form validation

    $('#contact_name').on('input', function() {
      var input=$(this);
      var is_name=input.val();
      if(is_name){input.removeClass("invalid").addClass("valid");}
      else{input.removeClass("valid").addClass("invalid");}
    });
    
    // Email must be an email
    $('#contact_email').on('input', function() {
      var input=$(this);
      var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      var is_email=re.test(input.val());
      if(is_email){input.removeClass("invalid").addClass("valid");}
      else{input.removeClass("valid").addClass("invalid");}
    });
    
    // <!--Website must be a website -->
    $('#contact_number').on('input', function() {
      var input=$(this);
      var re = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
      var is_num=re.test(input.val());
      if(is_num){input.removeClass("invalid").addClass("valid");}
      else{input.removeClass("valid").addClass("invalid");}
    });
    
    // <!--Message can't be blank -->
    $('#contact_message').keyup(function(event) {
      var input=$(this);
      var message=$(this).val();
      if(message){input.removeClass("invalid").addClass("valid");}
      else{input.removeClass("valid").addClass("invalid");}	
    });

  // <!-- After Form Submitted Validation-->
  $("#submit").click(function(event){
    var form_data=$("#contact-form").serializeArray();
    var error_free=true;
    for (var input in form_data){
      var element=$("#contact_"+form_data[input]['name']);
      var valid=element.hasClass("valid");
      var error_element=$("span", element.parent());
      if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
      else{error_element.removeClass("error_show").addClass("error");}
    }
    if (!error_free){
      event.preventDefault(); 
      alert("Please fill in the details.");
    }
  });
});



// my js

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
  };