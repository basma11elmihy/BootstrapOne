// let widthleft = $('.settings-inner').outerWidth(true);
// $(".settings").css({left:`-${widthleft}px`});

$('.settings-icon').click(function () {
    let left = $('.settings').css('left');
    if (left == '0px') {
        let widthleft = $('.settings-inner').outerWidth(true);
        $(".settings").animate({
            left: `-${widthleft}px`
        }, 1000);
    } else {
        $('.settings').animate({
            left: `0px`
        }, 1000);

    }
})

$('.box').click(function () {
    let color = $(this).css("background-color");
    $(':root').css('--main-color', color);
})


var typed = new Typed(".mov", {
    strings: ["Basma Elmihy", "a Front End Developer", "a Digital Creator"],
    typeSpeed: 50,
    backSpeed: 20,
    loop: true
})