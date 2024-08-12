$(document).ready(function () {

    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.opencourse__header').addClass('scroll');
        } else {
            $('.opencourse__header').removeClass('scroll');
        }
    });

    $('.ocaccardeon__header').click(function(){
        $(this).slideUp();
        $(this).next().slideDown();
        $(this).parent('.ocaccardeon__row').addClass('open');

    });

    $('.ocaccardeonclose').click(function(){
        $(this).siblings('.ocaccardeon__header').slideToggle();
        $(this).siblings('.ocaccardeon__body').slideToggle();
        $(this).parent('.ocaccardeon__row').toggleClass('open');

    });


});