var toggler = $('#menu');
var innerContainer = $('.inner');
var mainContainer = $('.container');
var sideMenu = $('.sideMenu');
var bars = $('.fa-bars');
var menuText = $('#menuText');
var navBar = $('.navBar');

$(document).ready(function(){
    sideMenu.animate({
        width: 'toggle'
    })
})


toggler.on('click',function(){
    innerContainer.toggleClass('animation');
    mainContainer.toggleClass('containerLocked');
    sideMenu.animate({
        width: 'toggle'
    })
})





