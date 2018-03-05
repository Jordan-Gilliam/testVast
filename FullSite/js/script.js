$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        autoWidth: true,
        autoplay: true,
        autoplayTimeout: 1700,
        responsiveClass: true,
        responsive: {
            0: {
                margin: 50,
            },
            767: {
                margin: 90,
            },
        }
    });
});

$('body').scrollspy({
    target: '#navbarNav'
})
