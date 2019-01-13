$(function () {
    console.log('hhhh');
    $('.btn-holder_item_purple').click(function () {
        $('.case_holder').toggleClass('justify-content-start');
        $('.case_holder').removeClass('justify-content-between');
        $('.case_holder').removeClass('justify-content-end');
        $('.case_holder').removeClass('direction-column');
    });
    $('.btn-holder_item_orange').click(function () {
        $('.case_holder').toggleClass('justify-content-between');
    });
    $('.btn-holder_item_green').click(function () {
        $('.case_holder').toggleClass('justify-content-end');
    });
    $('.btn-holder_item_violet').click(function () {
        $('.case_holder').toggleClass('direction-column');
    });
});
