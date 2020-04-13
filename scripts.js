// Hide navbar on scroll
$(window).scroll(function(e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (scroll >= 30 && !$('#navbarNavAltMarkup').hasClass('show')) {
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

$('.navbar-toggler').click(event => {
  $dropdownNav = $($(event.currentTarget).attr('data-target'));
  $dropdownNav.css('transition', 'height 0.2s linear');
  $navbar = $(event.currentTarget).parents('.navbar');
  if ($dropdownNav.hasClass('show')) {
    $('main').css('margin-top', '');
    $navbar.removeClass('bg-custom');
  } else {
    $('main').css('margin-top', $dropdownNav.height() + $navbar.height());
    $navbar.addClass('bg-custom');
  }
});