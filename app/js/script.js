document.addEventListener('DOMContentLoaded', function() {
    /*mobile menu*/
    $(document).on('click', '#mobile-menu', function (event) {
        event.preventDefault();
        var menu = $(this).closest('.header__navigation').find('.header__nav');
        if ($(this).hasClass('js-trigger-active')) {
            $(this).removeClass('js-trigger-active');
            menu.slideUp('slow');
        } else {
            $(this).addClass('js-trigger-active');
            menu.slideDown('slow');
        }
        return false;
    });
    /*close mobile menu*/
});

window.onload = function () {
    var width = document.documentElement.clientWidth;
};
window.addEventListener('resize', function () {
    var width = document.documentElement.clientWidth;

});