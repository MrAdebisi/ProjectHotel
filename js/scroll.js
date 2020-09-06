var inner = $('.inner');
var nav = $('.navBar');
var navHeight = (nav.innerHeight())*0.5;
console.log(navHeight);
var scrollValue = inner.scrollTop();
console.log(scrollValue);

inner.scroll(function(){
    var offsetValue = this.scrollTop;
    if(offsetValue > navHeight){
        nav.addClass('sticky')
    }
    else if(offsetValue < navHeight){
        nav.removeClass('sticky');
    }
    else{
        console.log('error');
    }
})




