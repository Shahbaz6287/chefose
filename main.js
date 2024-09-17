 $(document).ready(function() {
     $(".open-nav-menu").click(function() {
         $(".nav-menu").addClass("open");
         $(".menu-overlay").addClass("active");
     });
     $(".close-nav-menu").click(function() {
         $(".nav-menu").removeClass("open");
         $(".menu-overlay").removeClass("active");
     });
     $(".menu-overlay").click(function() {
         $(".nav-menu").removeClass("open");
         $(".menu-overlay").removeClass("active");
     });
     $('.menu-item-has-children').on('click', function() {
         $(this).toggleClass('active');
     });
 });

 $(document).ready(function() {
     $(window).scroll(function() {
         if ($(this).scrollTop() > 100) {
             $('.mobile-bottom-section').addClass('sticky')
         } else {
             $('.mobile-bottom-section').removeClass('sticky')
         }
     });
 });



 $('.best-seller-slider').slick({
     dots: true,
     infinite: false,
     speed: 300,
     slidesToShow: 5,
     slidesToScroll: 4,

     responsive: [{
             breakpoint: 1024,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: true,
                 dots: true
             }
         },
         {
             breakpoint: 600,
             settings: {
                 slidesToShow: 2,
                 arrows: false,
                 slidesToScroll: 2
             }
         },
         {
             breakpoint: 300,
             settings: {
                 slidesToShow: 2,
                 arrows: false,
                 slidesToScroll: 1
             }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
     ]
 });
 $('.testimonial-slider').slick({
     dots: true,
     infinite: false,
     speed: 300,
     slidesToShow: 3,
     slidesToScroll: 4,
     responsive: [{
             breakpoint: 1024,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: true,
                 dots: true
             }
         },
         {
             breakpoint: 600,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,
                 arrows: false
             }
         },
         {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 arrows: false,
                 slidesToScroll: 1
             }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
     ]
 });
 
 $('.logo-slider').slick({
     dots: false,
     arrows: false,
     autoplay:true,
     infinite: true,
     margin:15,
     speed: 300,
     slidesToShow: 5,
     slidesToScroll: 1,
     responsive: [{
             breakpoint: 1024,
             settings: {
                 slidesToShow: 4,
                 slidesToScroll: 1,
                 infinite: true,
                 dots: true
             }
         }, {
             breakpoint: 700,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1
             }
         }, {
             breakpoint: 480,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1
             }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
     ]
 });

 $(document).ready(function() {
     $('#filterOptions li a').click(function() {
         // fetch the class of the clicked item
         var ourClass = $(this).attr('class');

         // reset the active class on all the buttons
         $('#filterOptions li').removeClass('active');
         // update the active state on our clicked button
         $(this).parent().addClass('active');

         if (ourClass == 'all') {
             // show all our items
             $('#ourHolder').children('div.item').show();
         } else {
             // hide all elements that don't share ourClass
             $('#ourHolder').children('div:not(.' + ourClass + ')').hide();
             // show all elements that do share ourClass
             $('#ourHolder').children('div.' + ourClass).show();
         }
         return false;
     });
 });