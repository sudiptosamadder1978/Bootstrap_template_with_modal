
$(document).ready(function() {
    //Main Slider

    $('#hero-slider').owlCarousel({
    loop:true,
    margin:2,
    nav:true,
    items:1,
    smartSpeed:1000,
    dots: true,
    navText: ['PREV','NEXT'],
    responsive:{
        0:{
            nav: false,
        },
        768:{
             nav: true,
        }
       
    }
})


        //Project section slider

     $('#projects-slider').owlCarousel({
        loop: true,
        nav: true,
        items: 2,
        dots: false,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        navText: ['PREV','NEXT'],
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
                dots:true,
            }
        }
    })

     //Review section slider

  $('#review-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
   
});
