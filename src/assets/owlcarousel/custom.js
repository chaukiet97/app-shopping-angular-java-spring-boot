function scrolltop() {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 900) {
            $('.scroll-top').fadeIn(600);
        } else {
            $('.scroll-top').fadeOut(600);
        }
    });
    $('.scroll-top').on("click", function () {
        $("html,body").animate({ scrollTop: 0 }, 1500);
        return false;
    });
}
function fixmenu() {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.menu, .fix-menu').addClass('navbar-fixed');
        } else {
            $('.menu, .fix-menu').removeClass('navbar-fixed');
        }
    });
}
function realestateactive(){
    $(window).ready(function() {
        $(".realestates").on("click", function(){
        $(".realestates").find(".active").removeClass("active");
        $(this).parent().addClass("active");
     });
    });
}
function slidesGallery() {
    $('.owl-carousel-gallery').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        nav: true,
        navigation: false,
        navigationText: ["prev", "next"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
}
function slidesResestate() {
    $('.owl-carousel-resestate').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: false,
        dots:false,
        navigation: false,
        navigationText: ["prev", "next"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
}
function slidesPaner() {
    $('.owl-carousel-paner').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        nav: true,
        navigation: false,
        navigationText: ["prev", "next"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
}
function loadvideo() {
    videos = document.querySelectorAll("video");
    for (var i = 0, l = videos.length; i < l; i++) {
        var video = videos[i];
        var src = video.src || (function () {
            var sources = video.querySelectorAll("source");
            for (var j = 0, sl = sources.length; j < sl; j++) {
                var source = sources[j];
                var type = source.type;
                var isMp4 = type.indexOf("mp4") != -1;
                if (isMp4) return source.src;
            }
            return null;
        })();
        if (src) {
            var isYoutube = src && src.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);
            if (isYoutube) {
                var id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi);
                id = (id.length > 1) ? id.splice(1) : id;
                id = id.toString();
                var mp4url = "http://www.youtubeinmp4.com/redirect.php?video=";
                video.src = mp4url + id;
            }
        }
    }
}
function slideFaq() {
    $('.owl-carousel-faq').owlCarousel({
        loop: true,
        margin: 10,
        // autoplay: true,
        // autoplayTimeout: 10000,
        nav: true,
        navigation: false,
        navigationText: ["prev", "next"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
}
function slidesContent() {
    $('.owl-carousel-content').owlCarousel({
        loop: true,
        margin: 10,
        // autoplay: true,
        //autoplayTimeout: 2000,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
}
function slidesServiceHouse() {
    $('.owl-carousel-service-house').owlCarousel({
        loop: true,
        margin: 10,
        // autoplay: true,
        //autoplayTimeout: 2000,
        nav: true,
        navigation: false,
        navigationText: ["prev", "next"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    })
}
function slidesService() {
    $('.owl-carousel-service').owlCarousel({
        loop: true,
        margin: 10,
        // autoplay: true,
        //autoplayTimeout: 2000,
        nav: true,
        navigation: false,
        navigationText: ["prev", "next"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    })
}
function bannerads() {
    $('.owl-carousel-bannerads').owlCarousel({
        loop: true,
        items: 1,
        margin: 10,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: false,
        dots: false
    })
}
function slides() {
    $('.owl-carousel-slides').owlCarousel({
        loop: true,
        items: 1,
        margin: 10,
        // autoplay: true,
        // autoplayTimeout: 30000,
        nav: false,
        dots: true
    })
}
function viewLibrary() {

    $('.fancybox').fancybox({
        thumbs: { "autoStart": true }
    });
}
function slideLicense() {
    $('.owl-carousel-license').owlCarousel({
        loop: true,
        margin: 50,
        padding: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
}

function test() {

    var $container = $('.animate-grid .gallary-thumbs');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.animate-grid .categories a').click(function () {
        $('.animate-grid .categories .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
}



function onYouTubeIframeAPIReady(ID_video) {

    var player;

    player = new YT.Player('YouTubeBackgroundVideoPlayer', {
        videoId: ID_video, // YouTube Video ID
        // Player height (in px)
        playerVars: {
            playlist: ID_video,
            rel: 0,
            autoplay: 1,        // Auto-play the video on load
            autohide: 1,
            startSeconds: 0,
            disablekb: 1,
            controls: 0,        // Hide pause/play buttons in player
            showinfo: 0,        // Hide the video title
            modestbranding: 1,  // Hide the Youtube Logo
            loop: 1,            // Run the video in a loop
            fs: 1,              // Hide the full screen button
            autohide: 1,         // Hide video controls when playing
            enablejsapi: 1
        },
        events: {
            onReady: function (e) {
                e.target.mute();
                e.target.setPlaybackQuality('hd1080');
                e.target.playVideo();
            },
            onStateChange: function (e) {
                if (e && e.data === 1) {
                    e.target.playVideo();
                } else if (e && e.data === 0) {
                    e.target.playVideo()
                }
            }
        }
    });
}
