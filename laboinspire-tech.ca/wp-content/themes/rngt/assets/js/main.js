jQuery(document).ready(function($) {

    $(window).on('load', function() {
        $('.grid').isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: 20
            }
        });

    });


    $('#parallax').parallax({
        invertX: true,
        invertY: true,
        scalarX: 10,
        frictionY: .1
    });
    $(document).ready(function() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent) == false) {

        }
    });




    $('.header-icon').on('click', function() {
        $("body").toggleClass("bodyOpen");
    });
    $('.fullscreen-nav li').on('click', function() {
        $("body").toggleClass("bodyOpen");
    });



    jQuery(".panel-heading").on('click', function() {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().find('.panel-body').slideUp();
            $(this).parent().removeClass('active');
            $(".panel-heading").not(this).parent().removeClass('active').find('.panel-body').slideUp();
        } else {
            $(this).parent().find('.panel-body').slideDown();
            $(this).parent().addClass('active');
            $(".panel-heading").not(this).parent().removeClass('active').find('.panel-body').slideUp();
        }
    });







});