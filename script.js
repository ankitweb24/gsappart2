// gsap.to('.box', {
//     x : 600,
//     duration : 1,
//     delay : 1,
//     ease: "steps(12)",
// });

// //text
// gsap.registerPlugin(TextPlugin)


// //replaces yourElement's text with "This is the new text" 
// gsap.to(".text", {
//     duration: 2,
//     text: "This is the new text",
//     ease: "expo.inOut",
//     repeat : -1,
//     yoyo : true
//   });



//scrollTrigger
gsap.registerPlugin(ScrollTrigger) 

gsap.to(".box", {
    x : 500,
    rotate : 360,
    scrollTrigger: {
        trigger : ".page2",
        markers : true,
        start : "top 50%",
        end : "top 30%",
        scrub : 1,
    }
  });