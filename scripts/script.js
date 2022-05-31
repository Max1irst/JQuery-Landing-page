
$(document).ready(function () {

    $('a[href*="#"]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'linear');
    });

    const btnUp = $('.btnUp')

    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            btnUp.fadeIn();
        }else{
            btnUp.fadeOut();
        }
    });
    btnUp.on('click', function(){
        $('html, body').animate({
        scrollTop: 0
        }, 1000, 'linear');
        return false;
    });

    $('.products_block-lg').hover(function () {
            $(this).addClass('blockHover');
        }, function () {
            $(this).removeClass('blockHover');
        }
    );

    $('.products_block-sm').hover(function () {
        $(this).addClass('blockHover');
    }, function () {
        $(this).removeClass('blockHover');
    }
);

    $('.pieOrder').click(function(){
        $('.site').addClass('siteHiden');
        $('.form').fadeIn()
    })

    $('.closeModal').click(function(){
        $('.site').removeClass('siteHiden');
        $('.form').fadeOut()
    })

    $(document).mouseup(function(e){
        let modal = $('.form');
        if(e.target != modal[0] && modal.has(e.target).length === 0){
            $('.site').removeClass('siteHiden');
            $('.form').fadeOut()
        }
    })
});