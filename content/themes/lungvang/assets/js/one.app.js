/*
 * Template Name: Unify - Responsive Bootstrap Template
 * Description: Business, Corporate, Portfolio and Blog Theme.
 * Version: 1.6
 * Author: @htmlstream
 * Website: http://htmlstream.com
*/

var App = function () {



    function handleHeader() {
        //jQuery to collapse the navbar on scroll
        $(window).scroll(function() {
            if ($(".navbar").offset().top > 300) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
                $("#mylogo-nav-first").replaceWith( " <img class='logo-nav' id='mylogo-nav-second' src='/assets/images/logo_lungvang.png' alt='Logo'>" );
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
                $("#mylogo-nav-second").replaceWith( " <img class='logo-nav' id='mylogo-nav-first' src='/assets/images/logo_footer.png' alt='Logo'>" );
            }
        });

        //jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function() {
            $('.page-scroll a').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });

        //Collapse Navbar When It's Clickicked
        $('.navbar-nav li a, .navbar-brand').click(function() {
            $(".navbar-collapse.in").collapse('hide');
        });
    }

    return {
        init: function () {
            handleHeader();
            //handleBootstrap();
        },
        initParallaxBg: function () {
            $(window).load(function () {
                jQuery('.parallaxBg').parallax("50%", 0.4);
            });
        }

    };

}();
