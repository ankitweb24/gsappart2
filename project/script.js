let typeText = ["hello", "subsribe karo", "plz plz"];
let typeContent = document.querySelector(".typing");
let wordIndex = 0;
let charIndex = 0;
let removeChar = false;
function typing() {
  let currentIndex = typeText[wordIndex];
  let currentChar = currentIndex.substring(0, charIndex);

  typeContent.innerHTML = currentChar;

  if (!removeChar && charIndex < currentIndex.length) {
    charIndex++;
    setTimeout(typing, 100);
  } else if (removeChar && charIndex > 0) {
    charIndex--;
    setTimeout(typing, 100);
  } else {
    removeChar = !removeChar;
    wordIndex = !removeChar ? (wordIndex + 1) % typeText.length : wordIndex;
    setTimeout(typing, 100);
  }
}

typing();

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//scrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.to(".center_hero", {
  width: "95%",
  height: "80%",
  scrollTrigger: {
    trigger: ".center_hero",
    // markers : true,
    start: "top 10%",
    end: "top 50%",
    scrub: 1.5,
  },
});
gsap.to(".sampelTxt_hover", {
  width: "80%",
  scrollTrigger: {
    trigger: ".section2",
    // markers : true,
    start: "top 30%",
    end: "top 0%",
    scrub: 2,
  },
});

let scroll_element = document.querySelectorAll(".scroll_element");

scroll_element.forEach((element, index) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      // markers: true,
      start: "top 50%",
      end: "top 20%",
      scrub: 2,
    },
  });

  tl.to(element, {
    opacity : 1,
    duration : .7
  });


  tl.to(element, {
    opacity : .2,
    duration : .7
  })

});


gsap.to(".left_textBox div", {
  rotate : 360,
  x : 490,
  scrollTrigger: {
    trigger: ".left_textBox div",
    // markers : true,
    start: "top 50%",
    end: "top 0%",
    scrub: 1.5,
  },
});


gsap.to(".sec5 h1", {
  transform: "translateX(-100%)",
  opacity: 0.2,
  scrollTrigger: {
    trigger: ".sec5",
    markers : true,
    start: "top -10%",
    end: "top -300%",
    scrub: 2,
    pin: true,
  },
});


