function loading(){
    var tl = gsap.timeline();

    tl.to("#yellow1", {
        top: "-100%",
        delay:0.5,
        duration:0.7,
        ease:"expo.out"
    });

    tl.from("#yellow2", {
        top:"100%",
        duration:0.7,
        delay:0.6,
        ease:"expo.out"
    },"anim");

    tl.to("#loader h1",{
        delay:0.5,
        duration:0.7,
        color:"black",
    },"anim");

    tl.to("#loader", {
       opacity: 0,
       display: "none",
    });

    
} loading();

let scroll;

window.addEventListener("load", () => {
  scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });
});

document.querySelector("#footer h2").addEventListener("click", () => {
   scroll.scrollTo(0);
});

var elems = document.querySelectorAll('.elem');
var pg2 = document.querySelector("#page2");

elems.forEach((elem) => {
    elem.addEventListener('mouseenter', (e) => {
        var bgimg = elem.getAttribute("data-img");
        pg2.style.backgroundImage = `url(${bgimg})`;
    });
});






