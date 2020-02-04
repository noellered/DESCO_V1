// Hide navbar on scroll
$(window).scroll(function(e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (scroll >= 30) {
        $('.navbar').addClass("navbar-hide");
    } else {
        $('.navbar').removeClass("navbar-hide");
    }

});

// CTA onclick relocate
function relocate_getInvolved()
{
     location.href = "#getInvolved";
} 

