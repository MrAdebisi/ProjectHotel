var toggle = $('#toggle');
var innerContainer = $('.inner');
var mainContainer = $('.container');




toggle.on('click',function(){
    innerContainer.addClass('animation');
    mainContainer.addClass('containerLocked')
})