$( document ).ready(function() {
    console.log( "ready!" );

    TweenMax.to(".line-2", 1.3, {opacity:1, scale:0.95, ease:Power1.easeInOut});
    TweenMax.to(".line-1", 1, {opacity:1, scale:0.95, delay:0.3, ease:Power1.easeInOut});
    // TweenMax.from(".content--column", 1, {opacity:0, delay:0.8, ease:Power1.easeInOut});

    var timeline = new TimelineMax();
});
