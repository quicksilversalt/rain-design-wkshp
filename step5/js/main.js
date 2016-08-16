$( document ).ready(function() {
    console.log( "ready!" );

    TweenMax.to(".line-2", 1.3, {opacity:1, scale:1, ease:Power1.easeInOut});
    TweenMax.to(".line-1", 1, {opacity:1, scale:1, delay:0.3, ease:Power1.easeInOut});
    // TweenMax.from(".content--column", 1, {opacity:0, delay:0.8, ease:Power1.easeInOut});

    TweenMax.staggerTo(".content--image", 0.8, {opacity: 1, delay:1, ease:Power1.easeInOut}, 0.05);
    TweenMax.to(".content--text", 1, {opacity: 1, delay:2, ease:Power1.easeInOut});
    TweenMax.to(".content--link", 0.5, {opacity: 1, delay:2.5, ease:Power1.easeOut});
    
});
