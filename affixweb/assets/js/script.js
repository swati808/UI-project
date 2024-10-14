// Mobile Menu
const menu = $(".menu");
const openMenuButton = $(".open-menu-button");
const closeMenuButton = $(".close-menu-button");

openMenuButton.add(closeMenuButton).on("click", function () {
    menu.toggleClass("open");
    menu.css("transition", "transform 0.5s ease");
    toggleOverlay();
});

menu.on("transitionend", function () {
    $(this).removeAttr("style");
});

menu.find(".dropdown .arrow-icon").on("click", function () {
    $(this).closest('.dropdown').toggleClass("active");
});

function toggleOverlay() {
    if ($('.menu').hasClass('open')) {
        $('body').addClass('overlay-black');
    } else {
        $('body').removeClass('overlay-black');
    }
}

// Review Page
if ($(".star").length > 0) {
    let selectedStars = 0;

    function rateStar(stars) {
        selectedStars = stars;
        updateStars();
    }

    function updateStars() {
        const stars = document.querySelectorAll('.star');
        stars.forEach((star, index) => {
            star.classList.toggle('active', index < selectedStars);
        });
    }
}


// Filter Gallery
if ($(".tile").length > 0) {
    
    var defaultGalleryItem = "Basic";
    filter(defaultGalleryItem);
    
    
    function filter(galleryItem) {
        var selector = ".tile." + galleryItem;
        var notSelected = ".tile:not(" + galleryItem + ")";
        $(notSelected).addClass('hide');
        $(selector).removeClass('hide');
    }
}


// Scroll to Top
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#scroll-to-top').fadeIn();
    } else {
        $('#scroll-to-top').fadeOut();
    }
});

$('#scroll-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});

// Slick Slider
if ($(".technology-slider").length > 0) {
    $('.technology-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: true,
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
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
}


if ($(".testimonial-slider").length > 0) {
    $('.testimonial-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    });
}


// Slick Slider
if ($(".service-area-slider").length > 0) {
    $('.service-area-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 1023,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }]
    });
}


// image popup

if ($(".gallery").length > 0) {
    var myLightbox = GLightbox({
        'selector': '.gallery'
    });
}