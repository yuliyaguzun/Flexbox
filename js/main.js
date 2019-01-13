$(function () {
    console.log('hhhh');
    $('#transfom1').click(function () {
        $('.case_holder').toggleClass('justify-content-start');
        $('.case_holder').removeClass('justify-content-between');
        $('.case_holder').removeClass('justify-content-end');
        $('.case_holder').removeClass('direction-column');
    });
    $('#transfom2').click(function () {
        $('.case_holder').toggleClass('justify-content-between');
    });
    $('#transfom3').click(function () {
        $('.case_holder').toggleClass('justify-content-end');
    });
    $('#transfom4').click(function () {
        $('.case_holder').toggleClass('direction-column');
    });
    $('#transfom5').click(function () {
        $('.case_card_long:last-child').css('order', '-5');
        $('.case_card_long:first-child').css('order', '5');
    });
    $('#transfom6').click(function () {
        $('.case_card_long:nth-child(2)').toggleClass('down-position');
        $('.case_card_long:nth-child(3)').toggleClass('down-position');
    });
});
