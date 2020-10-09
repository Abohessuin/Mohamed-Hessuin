//selectors
const introPage = document.querySelector("#introPage");
const introVidoe = document.querySelector(".introVideo");
const introText1 = document.querySelector(".introText1");
const burger = document.querySelector(".burger")
const aboutPage = document.querySelector("#aboutPage");
const aboutOverlay = document.querySelector(".aboutOverlay");
const imgpart1 = document.querySelector(".img-part-1");
const imgpart2 = document.querySelector(".img-part-2");
const imgpart3 = document.querySelector(".img-part-3");
const mohamedAnimation = document.querySelector(".mohamedAnimation");
const hessuinAnimation = document.querySelector(".hessuinAnimation2");
const introText2 = document.querySelector(".introText2");
const logo = document.querySelector(".logoo");
const aboutText = document.querySelector(".aboutText");
const sections = document.querySelectorAll("section");
//scrollmagic
const controller = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();
// gsap timeline
//intro gsap
const introTextAnim = gsap.timeline();
introTextAnim.fromTo(burger, 2, { y: "-300%" }, { y: "0%" });
introTextAnim.fromTo(logo, 2, { y: "-300%" }, { y: "0%" }, "-=2");
introTextAnim.fromTo(mohamedAnimation, 2.5, { x: "200%", y: "200%" }, { x: "0%", y: "0%" }, "-=2");
introTextAnim.fromTo(hessuinAnimation, 2.5, { x: "-200%", y: "-200%" }, { x: "0%", y: "0%" }, "-=2.5");
introTextAnim.fromTo(introText2, 2, { opacity: "0" }, { opacity: "1" });
introTextAnim.fromTo(introText2, 1.5, { color: "white" }, { color: "blueviolet" });

// about page Gsap
const aboutPageGsp = gsap.timeline();
aboutPageGsp.fromTo(aboutOverlay, 2, { opacity: "0" }, { opacity: "0.8" });
aboutPageGsp.fromTo(imgpart1, 2, { x: "300%", y: "300%" }, { x: "0%", y: "0%" });
aboutPageGsp.fromTo(imgpart2, 2, { x: "-300%", y: "-300%" }, { x: "0%", y: "0%" }, "-=2");
aboutPageGsp.fromTo(imgpart3, 2, { x: "300%" }, { x: "0%" }, "-=2.5");
aboutPageGsp.fromTo(imgpart1, 2, { skewX: "25deg", skewY: "20deg" }, { skewX: "0deg", skewY: "0deg" });
aboutPageGsp.fromTo(imgpart2, 2, { skewX: "25deg", skewY: "20deg" }, { skewX: "0deg", skewY: "0deg" });
aboutPageGsp.fromTo(imgpart3, 2, { skewX: "25deg" }, { skewX: "0deg" });
aboutPageGsp.fromTo(imgpart3, 2, { rotate: "20deg" }, { rotate: "0deg" });
aboutPageGsp.to(imgpart1, 1.1, { opacity: "0.8" });
aboutPageGsp.to(imgpart2, 1.1, { opacity: "0.8" });
aboutPageGsp.to(imgpart3, 1.1, { opacity: "0.8" });
aboutPageGsp.to(aboutText, 4, { clipPath: "circle(100%  at 20% 20%)" });

//scenes
let introVideoScene = new ScrollMagic.Scene({
  duration: "9200",
  triggerElement: introPage,
  triggerHook: 0
})
  .setPin(introPage)
  .setTween()
  .addTo(controller);

let introTextScene = new ScrollMagic.Scene({
  triggerElement: introPage,
  triggerHook: 0.8,
  offset: 8200

})

  /*.addIndicators({
    colorStart: "white",
    colorTrigger: "white",
    name: "page",
    indent: 200
  })*/
  .setTween(introTextAnim)
  .addTo(controller)


let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

introVideoScene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  introVidoe.currentTime = delay;
}, 40);

let aboutOffScene = new ScrollMagic.Scene({
  triggerElement: aboutPage,
  triggerHook: 0.2
})
  /*
  .addIndicators({
    colorStart:"black",
    colorTrigger:"white"
  })
  */
  .setTween(aboutPageGsp)
  .addTo(controller)


//Functions
function navTogle(e) {
  const navtogleScene = gsap.timeline();
  if (!e.target.classList.contains("active-nav")) {
    e.target.classList.add("active-nav");
    navtogleScene.to(".line1", 0.5, { rotate: "45", y: 5 });
    navtogleScene.to(".line2", 0.5, { rotate: "-45", y: -5 }, "-=0.5");
    navtogleScene.to(".nav-bar", 1.2, { clipPath: "circle(2500px at 100% -10%)" });
    navtogleScene.to(".nav-overlayeranimation", 2, { x: "100%" })
  } else {
    e.target.classList.remove("active-nav");
    navtogleScene.to(".line1", 0.5, { rotate: "0", y: 0 });
    navtogleScene.to(".line2", 0.5, { rotate: "0", y: 0 }, "-=0.5");
    navtogleScene.to(".nav-bar", 1.2, { clipPath: "circle(50px at 100% -10%)" });
    navtogleScene.to(".nav-overlayeranimation", 2, { x: "0%" }, "-=0.5")
  }



}



let pageScene;
sections.forEach((slide, index, slides) => {
  const pageTl = gsap.timeline();
  let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
  pageTl.fromTo(nextSlide, 4, { y: "0%" }, { y: "50%" });
  pageTl.fromTo(slide, 4, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.4 });
  pageTl.fromTo(nextSlide, 4, { y: "50%" }, { y: "0%" }, "-=4.5");
  pageTl.fromTo(burger, 6, { y: "-1000%" }, { y: "0%" });
  pageTl.fromTo(logo, 6, { y: "-1000%" }, { y: "0%" }, "-=2");

  //Create new scene
  if (slide.id === "introPage") {
    pageScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0,
      offset: 9200
    })





      .setPin(introPage, { pushFollowers: false })
      .setTween(pageTl)
      .addTo(controller2);

  }
  else {
    pageScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0
    })





      .setPin(slide, { pushFollowers: false })
      .setTween(pageTl)
      .addTo(controller2);

  }




});









////EventListeners
burger.addEventListener("click", navTogle);