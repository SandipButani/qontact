$(document).ready(function () {
    //Fixed Header Js
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100){  
        $('header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
      }
    });
  
    // menu
    $(window).click(function (event) {
        if(event.target.className != "hamburger" && event.target.parentElement.className != "hamburger"){
          $(this).removeClass("is-active");
          $('.hamburger').removeClass("is-active");
          $("#menu-item,body,html").removeClass("is-active");
          $(".menu-activebg").removeClass("is-active"); 
          $(".menu-overle").removeClass("is-active"); 
        }else{
          $(this).toggleClass("is-active");
          $('.hamburger').toggleClass("is-active");
          $("#menu-item,body,html").toggleClass("is-active");
          $(".menu-activebg").toggleClass("is-active");  
          $(".menu-overle").toggleClass("is-active"); 
        }
    });
    //Menu Item Active Js
    $(".menu_listing li a").click(function () {
        $(".menu_listing a").removeClass("menu-item_active");
        $(this).addClass("menu-item_active");
    });
    // Back to top button
    $(".back_to_top").hide();
    $(window).scroll(function () {
        if ($(document).scrollTop() > 250) {
            $(".back_to_top").fadeIn(300);
        } else {
            $(".back_to_top").fadeOut(300);
        }
    });
    $(".back_to_top").click(function () {
        $("html, body").animate({
            scrollTop: 0,
        });
        return false;
    });
 
});

$(document).ready(function () {
    $(document).on("scroll", function(event){
         var scrollPos = $(document).scrollTop();
        $('.menu_listing li a.smooth_section').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if(refElement.position() != undefined){
                if (refElement.position().top - 125 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.menu_listing li a.smooth_section').removeClass("menu-item_active");
                    currLink.addClass("menu-item_active");
                }else{
                    currLink.removeClass("menu-item_active");
                }
            }
            
        });
    });
    // Magnific popup 
    $('.popup-link').magnificPopup({type:'image'});
});


// custom dropdown
const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
let index = 1;

select.forEach(a => {
  a.addEventListener('click', b => {
    const next = b.target.nextElementSibling;
    next.classList.toggle('toggle');
    next.style.zIndex = index++;
  })
})
option.forEach(a => {
  a.addEventListener('click', b => {
    b.target.parentElement.classList.remove('toggle');
    
    const parent = b.target.closest('.select').children[0];
    parent.setAttribute('data-type', b.target.getAttribute('data-type'));
    parent.innerText = b.target.innerText;
  })
})


// Home page press slider
jQuery(document).ready(function($) {
    $('.press-main-slider').owlCarousel({
      items: 3,
      loop: true,
      nav:true,
      dots:false,
      margin: 10,
      responsive: {
        1200: {
          items: 3
        },
        768: {
          items: 3,
          dots:true,
        },
        320: {
          items: 2,
          dots:true,
        }
      }
    });
  });

// Home page Client logo slider
jQuery(window).on('load resize',function(){
      if (jQuery(window).width() < 768) {
        setTimeout(function(){         
          jQuery(".inner-client-logo").addClass("client-logo-slider owl-carousel owl-theme");
            jQuery('.client-logo-slider').owlCarousel({
              autoplay: true,
              dots: false,
              nav: false,
              items: 4,
              autoHeight : true,
              loop:true,
              responsive: {
                0: {
                  items:3,
                },
                389: {
                  items: 4,
                }
              }
          });
      }, 300);
      } 
      if (jQuery(window).width() >= 768) {
          setTimeout(function(){
            jQuery('.client-logo-slider').trigger('destroy.owl.carousel');  
          }, 300);
      }
  });
