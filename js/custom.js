$(function () {
    var swiper = new Swiper(".swiper01", {
        direction: 'vertical',
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 4000,
        loop: true,
        loopedSlides: 3,
        slidesPerView: 3,
        spaceBetween: 10,
    })

    var swiper = new Swiper(".swiper02", {
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 4000,
        loop: true,
        loopedSlides: 3,
        slidesPerView: 3,
        spaceBetween: 30,
    })

    var sNap = false;
    var secL = $(".section").length;
    var sEc = $(".section");
    var selI;


    sEc.eq(0).addClass("on");
    $("#fullpage").fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        controlArrows: false,
        loopHorizontal: false,
        scrollingSpeed: 800,
        afterLoad: function (origin, destination) {
            sNap = false;
            sEc.eq(destination.index).addClass("on").siblings().removeClass("on");
        },
        onLeave: function () {
            sNap = true;
        },
    });


    $(".section").on("mousewheel", function (e) {
        var selI = $(this).index();
        if (sNap) return false;
        $(".pra").css({
            zIndex: 9,
            transform: "translateY(" + 0 + "px)",
            transition: 0.01 + "s"
        });
        if (e.originalEvent.wheelDelta / 120 > 0) {
            if (selI == 0) return false;
            $(this).find(".pra").css({
                zIndex: 1,
                backgroundPositionY: 0,
                transform: "translateY(" + (-500) + "px)",
                transition: 1 + "s"
            });
        } else {
            if (selI == secL - 1) return false;
            $(this).find(".pra").css({
                zIndex: 1,
                backgroundPositionY: 0,
                transform: "translateY(" + (500) + "px)",
                transition: 1 + "s"
            });
        }
    });

    $("#project").on("mousewheel", function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            fullpage_api.moveSlideLeft();
        }
        else {
            fullpage_api.moveSlideRight();
        }
    });


    $('.btn-open-popup').on('click', function () {
        $('.modal').toggleClass('on');
        $('.text').toggleClass('on');
        $('.s_text').toggleClass('on');
    });

    $(".tab-wrapper .tab").on('click', function () {

        $(".tab-wrapper .tab").removeClass("on");
        $(this).addClass("on");
        $(".tab-contents").hide();
        let tabid = $(this).attr("rel");
        $("." + tabid).fadeIn();
    });


});