// menu.js
(function ($) {
    var main_nav_pc_wrap_li = $('.main_nav_pc_wrap').children('li');
    var menu_order
    var main_page = $('.main_page');


    // 로고 클릭 기능
    $('.logo_wrap').on('click', function (e) {
        e.preventDefault();
        main_page.css({ display: 'block' });
        $('.section_wrap').css({ display: 'none' });



        $('.section_wrap').children('li').css({ display: 'none' });



    });


    // 메뉴 클릭 기능
    main_nav_pc_wrap_li.on('click', function (e) {
        e.preventDefault();
        main_page.css({ display: 'none' });
        menu_order = $(this).index();
        main_nav_pc_wrap_li.eq(menu_order).css({ transform: 'scale(1.1)' });
        main_nav_pc_wrap_li.eq(menu_order).siblings().css({ transform: 'scale(1)' });

        $('html').scrollTop(0);

        $('.section_wrap').css({ display: 'block' });
        $('.section_wrap').children('li').eq(menu_order).css({ display: 'block' });
        $('.section_wrap').children('li').eq(menu_order).siblings().css({ display: 'none' });
    });

    main_nav_pc_wrap_li.on('mouseover', function () {
        menu_order = $(this).index();
        $('.under_line').css({ display: 'block' });
        $('.under_line').css({ left: menu_order * 25 + '%' });
    });

    main_nav_pc_wrap_li.on('mouseleave', function () {
        $('.under_line').css({ display: 'none' });

    });

    var menu_t_n = 0;
    // 테블릿 메뉴창 슬라이드
    $('.main_nav_t').on('click', function (e) {
        e.preventDefault();
        if (menu_t_n == 0) {
            $('.main_nav_wrap_t').css({ display: 'block' });
            $('.main_nav_wrap_t').stop(true,false).animate({ left: 10 });
            menu_t_n = 1;
        } else {
            menu_t_n = 0;
            $('.main_nav_wrap_t').stop(true,false).animate({ left: -250 }, function () {
                $('.main_nav_wrap_t').css({ display: 'none' });

            });
        }
    });

    $('.main_nav_wrap_t').mouseleave(function(){
        $('.main_nav_wrap_t').animate({left:-250},function(){$('.main_nav_wrap_t').css({display:'none'});
        menu_t_n=0;

        });
       

    });




    //테블릭 메뉴 선택
    $('.main_nav_wrap_t').children('li').on('click',function(e){
        e.preventDefault();
        menu_order=$(this).index();

main_page.css({ display: 'none' });
        $('.section_wrap').css({display:'block'});
       $('.main_nav_wrap_t').find('li').eq(menu_order).css({ transform: 'scale(1.1)' });
       $('.main_nav_wrap_t').find('li').eq(menu_order).siblings().css({ transform: 'scale(1)' });

        $('.section_wrap').children('li').eq(menu_order).css({ display: 'block' });
        $('.section_wrap').children('li').eq(menu_order).siblings().css({ display: 'none'});
        $('html').scrollTop(0);
      

    })




    

$(window).resize( function(){
    console.log(window.innerWidth);
    if(window.innerWidth>768){
        $('.main_nav_wrap_t').css({display:'none'});
    }
});















})(jQuery);