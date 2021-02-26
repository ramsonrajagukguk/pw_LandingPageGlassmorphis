$(document).ready(function () {

    // Nav Mobile
    const navmobile = document.querySelector('.nav-mobile');

    navmobile.querySelectorAll('li a').forEach((a, i) => {
        a.onclick = (e) => {
            if (a.classList.contains('nav-item-active')) return
            navmobile.querySelector('li a.nav-item-active').classList.remove('nav-item-active');

            a.classList.add('nav-item-active')

            // let nav_indicator = navmobile.querySelector('.nav-indicator');

            // nav_indicator.style.left = 'calc(${ i * 60 + 30}px - 45px)'
        }
    })
    /*[ Tabs ]
    ===========================================================*/
    const aboutSection = document.querySelector(".about-area"),
        tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("tab-item") &&
            !event.target.classList.contains("is-active")) {
            const target = event.target.getAttribute("data-target");
            tabsContainer.querySelector(".is-active").classList.remove("outer-shodow", "is-active");
            event.target.classList.add("is-active", "outer-shadow");


            aboutSection.querySelector(".tab-content.is-active").classList.remove("is-active");
            aboutSection.querySelector(target).classList.add("is-active")
        }

    });


    $("#chk").on("change", function () {
        document.body.classList.toggle('dark');
    });

    const videoSrc = $("#player-1").attr("src");
    $(".icon-video, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src", "");
        } else {
            $(".video-popup").addClass("open");
            if ($("#player-1").attr("src") == '') {
                $("#player-1").attr("src", videoSrc);
            }
        };
    })


    $(".nav-left").on("click", function () {
        $(".nav-left").removeClass("active");
        $(this).addClass("active");
    });




    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 56)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 500
    });

    // Zoom Image
    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    //------- fixed navbar --------//  
    $(window).scroll(function () {
        var sticky = $('.navbar'),
            scroll = $(window).scrollTop();

        if (scroll > 150) sticky.addClass('color');
        else sticky.removeClass('color');
    });

    //------- fixed Nafbar left --------//  
    // $(window).scroll(function () {
    //     var sticky = $('.navbar-left'),
    //         scroll = $(window).scrollTop();

    //     if (scroll > 150) sticky.addClass('show');
    //     else sticky.removeClass('show');
    // });


    //------- testimonials Carousel --------// 
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        // dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3,
            }
        }
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        item: 3,
        itemsMobile: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3,
                loop: true
            }
        }
    });






    var labelGallerys = $('.label-gallery');

    $(labelGallerys).each(function () {
        $(this).on('click', function () {
            for (var i = 0; i < labelGallerys.length; i++) {
                $(labelGallerys[i]).removeClass('is-actived');
            }

            $(this).addClass('is-actived');
        });
    });
});