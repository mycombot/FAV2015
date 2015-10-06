
(function($) {
    "use strict";
    
    /* -------------------
    Revolution Sliders
    ---------------------*/
    $('.tp-banner').show().revolution({
        delay: 16000,
        startwidth: 1170,
        startheight: 700,
        hideThumbs: 200,
        dottedOverlay: "none",
		hideTimerBar: "on",
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 5,
        navigationType: "none",
        navigationArrows: "solo",
        navigationStyle: "preview4",
        touchenabled: "on",
        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,
        keyboardNavigation: "off",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationVOffset: 20,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        fullWidth: "off",
        fullScreen: "on",
        spinner: "spinner1",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        forceFullWidth: "off",
        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off"
    });
    $('.tp-banner-video').show().revolution({
        dottedOverlay: "none",
        delay: 9000,
        startheight: 700,
        hideTimerBar: "on",
        navigationType: "none",
		navigationStyle: "preview4",
		touchenabled: "on",
		swipe_velocity: 0.7,
		swipe_min_touches: 1,
		swipe_max_touches: 1,
		drag_block_vertical: false,
		keyboardNavigation: "on",
		fullScreen: "on",
		spinner: "spinner1",
		stopLoop: "off",
		stopAfterLoops: -1,
		stopAtSlide: -1,
		forceFullWidth: "off",
		fullScreenAlignForce: "off",
		minFullScreenHeight: "400",
		hideThumbsOnMobile: "off",
		hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
		hideArrowsOnMobile: "off"
    });
    /* -------------------
    Owl Slider callings
    ---------------------*/
    $("#quote-slider").owlCarousel({
        autoPlay : false,
        singleItem : true,
        pagination: false,
        navigation: false
    });
    $("#owl-testimonials").owlCarousel({
        autoPlay : true,
        singleItem : true,
        pagination: true,
        navigation: false
    });
    // AJAX project slider
    $(document).ajaxComplete(function(){
        $("#project-slider").owlCarousel({
            autoPlay : true,
            singleItem : true,
            pagination: true,
            navigation: false,
        });
    });
    $("#owl-slider").owlCarousel({
        autoPlay : true,
        singleItem : true,
        pagination: true,
        navigation: false,
        navigationText : ['<i class="icon ion-chevron-left"></i>','<i class="icon ion-chevron-right"></i>'],
    });
    /* -------------------
    Parallax Sections
    ---------------------*/
    if(!Modernizr.touch){
        $('#home-parallax-fullscreen').parallax("50%", 0.5); 
        $('#home-parallax-fullwidth').parallax("50%", 0.5); 
        $('.parallax-section-1').parallax("50%", 0.5);
        $('.parallax-section-2').parallax("50%", 0.5);
        $('.parallax-section-3').parallax("50%", 0.5);
        $('.parallax-section-4').parallax("50%", 0.5);
        $('.parallax-section-5').parallax("50%", 0.5);
        $('.parallax-section-6').parallax("50%", 0.5);
        $('.parallax-section-7').parallax("50%", 0.5); 
        $('.parallax-section-8').parallax("50%", 0.5); 
        $('#home-landing').parallax("50%", 0.5)
    }
    /* -------------------
    Google map
    ---------------------*/
    $("#map").gmap3({
        marker:{     
        address:"2 boulevard de la république, 29400, Landivisiau", 
        options:{ icon: "img/assets/marker.png"}},
        map:{
        options:{
        styles: [ {
        stylers: [ { "saturation":-90 }, { "lightness": 0 }, { "gamma": 0.0 }]},
        ],
        zoom: 13,
        scrollwheel:false,
        draggable: true }
        }
    });	
    
    
   
    /* -------------------
    Scroll functions
    ---------------------*/
    $(window).scroll(function(){
        parallax();
        /* -------------------
        Header Animation
        ---------------------*/
        if ($(this).scrollTop() > 5){  
            $('nav').addClass("navbar-small")
        }
        else{
            $('nav').removeClass("navbar-small")
        }
        /* -------------------
        Back to top button popup
        ---------------------*/
        if($(window).scrollTop() > 400){
        $("#back-to-top").stop().animate({ bottom:'16px' },300,'easeInOutCubic')
        } 
        else{
            $("#back-to-top").stop().animate({ bottom:'-50px' },300,'easeInOutCubic')
        }
    });
    /* -------------------
    Preloader
    ---------------------*/
    $(window).load(function(){ 
        // Preloader 
        $('.loader').fadeOut('slow');
        $('#preloader').delay(350).fadeOut('slow'); 
    }); // End Window Load
    /* -------------------
    Page Hero Parallax
    ---------------------*/
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.hero').css('top',-(scrolled*0.0515)+'rem');
        $('.home-container').css('bottom',-(scrolled*0.0515)+'rem');
        $('.op-1,.op-2,.op-3').css('opacity',1-(scrolled*.00110));            
    };
    /* -------------------
    Animation.css calling
    ---------------------*/
    new WOW().init();
    /* -------------------
    Smooth scrolling to anchor
    ---------------------*/
    $('.to-section a,.btn-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 54
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
    /* -------------------
    Back to top button function
    ---------------------*/
    $('#back-to-top,.to-top').click(function() {
        $('html, body').animate({ scrollTop: 0}, 1000, 'easeInOutExpo');
        return false;
    });
    /* -------------------
    Active menu item on page scroll
    ---------------------*/
    var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();
    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
      sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();
        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('current');
          sections.removeClass('current');
          $(this).addClass('current');
          nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('current');
        }
      });
    });
    /* -------------------
    Auto-close responsive navbar
    ---------------------*/
    function close_toggle() {
        if ($(window).width() <= 992) {
          $('.navbar-collapse a').on('click', function(){
              $('.navbar-collapse').collapse('hide')
          }); 
        }
        else {
         $('.navbar .navbar-default a').off('click')
        }
    }
    close_toggle();
    $(window).resize(close_toggle); 
    $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
    
    /* -------------------
    Bootstrap Tooltip, Alert, Tabs
    ---------------------*/
    $(function () { $("[data-toggle='tooltip']").tooltip();  
        $(".alert").alert()
    });
    $(function () {
        var active = true;
        $('#collapse-init').click(function () {
            if (active) {
                active = false;
                $('.panel-collapse').collapse('show');
                $('.panel-title').attr('data-toggle', '');
                $(this).text('Close All');
            } else {
                active = true;
                $('.panel-collapse').collapse('hide');
                $('.panel-title').attr('data-toggle', 'collapse');
                $(this).text('Open All');
            }
        });
        $('#accordion').on('show.bs.collapse', function () {
            if (active) $('#accordion .in').collapse('hide');
        });
    });
    $('#myTab a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
    
})(jQuery);

