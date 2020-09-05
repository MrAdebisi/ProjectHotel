var toggler = $('#menu');
var innerContainer = $('.inner');
var mainContainer = $('.container');
var sideMenu = $('.sideMenu');
var bars = $('.fa-bars');
var menuText = $('#menuText')


toggler.on('click',function(){
    innerContainer.toggleClass('animation');
    mainContainer.toggleClass('containerLocked');
    sideMenu.toggleClass('slideAnimation');

    setTimeout(function(){
        bars.toggleClass('fa-bars');
        bars.toggleClass('fa-share');
        toggler.toggleClass('back');
        var text = menuText.text();
        if (text === 'MENU') {
            menuText.text('BACK');
        }
        else {
            menuText.text('MENU');
        }
    }, 80)
})


//


