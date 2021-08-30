//sidebar toggle
$('.sidebar-toggle').click(function (){
    $('.main-wrapper').toggleClass('mini-sidebar');
});

$(document).ready(function (){
    //alt position
    $('.alt').each(function (){
        let altTop = $(this).closest('.alt-box').height();
        let altRight = $(this).closest('.alt-box').width()/2;
        $(this).css('top', altTop + 4 + 'px');
        $(this).css('right', altRight + 'px');
    });
});

//sidebar link select
$('.sidebar-link').click(function (){
    $('.sidebar-link').removeClass('selected');
    $(this).addClass('selected');
    $('.sidebar-link-dropdown').removeClass('active');
    $('.first-level').removeClass('show');
    $(this).closest('.sidebar-link-dropdown').addClass('active');
    $(this).closest('.first-level').addClass('show');
});

//toggle first link sidebar
$('.sidebar-link-dropdown').click(function (){
    $(this).toggleClass('active');
    $(this).next('.first-level').toggleClass('show');
})
