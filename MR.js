//Scenes
let introVideoScene;
let introTextScene;
let aboutOffScene;
let contactScene;
let pageScene;
let pageScene2;
let controller;





//nav events
const burgerr = document.querySelector(".burger");
const introPage = document.querySelector("#introPage");
const aboutPage = document.querySelector("#aboutPage");
const contactPage = document.querySelector("#contactPage");
const navli1 = document.querySelector(".nav-li-1");
const navli2 = document.querySelector(".nav-li-2");
const navli3 = document.querySelector(".nav-li-3");
const navli4 = document.querySelector(".nav-li-4");




burgerr.addEventListener("click",navTogle);



//Functions

function removeNav() {
  const navtogleScene = gsap.timeline();
  burgerr.classList.remove("active-nav");
  navtogleScene.to(".line1", 0.5, { rotate: "0", y: 0 });
  navtogleScene.to(".line2", 0.5, { rotate: "0", y: 0 }, "-=0.5");
  navtogleScene.to(".nav-bar", 1.2, { clipPath: "circle(50px at 100% -10%)" });
  navtogleScene.to(".nav-overlayeranimation", 2, { x: "0%" }, "-=0.5")
}


function bringNavIntoPage() {
  const burger = document.querySelector(".burger")
  const logo = document.querySelector(".logoo");
  const navAnim = gsap.timeline();
  navAnim.fromTo(burger, 2, { y: "-300%" }, { y: "0%" });
  navAnim.fromTo(logo, 2, { y: "-300%" }, { y: "0%" }, "-=2");
}

function moveNavoutPage() {
  const burger = document.querySelector(".burger")
  const logo = document.querySelector(".logoo");
  const navAnim = gsap.timeline();
  navAnim.fromTo(burger, 2, { y: "0%" }, { y: "-300%" });
  navAnim.fromTo(logo, 2, { y: "0%" }, { y: "-300%" }, "-=2");
}

function navTogle(e) {

  const navtogleScene = gsap.timeline();
  if (!e.target.classList.contains("active-nav")) {
    e.target.classList.add("active-nav");
    navtogleScene.to(".line1", 0.5, { rotate: "45", y: 5 });
    navtogleScene.to(".line2", 0.5, { rotate: "-45", y: -5 }, "-=0.5");
    navtogleScene.to(".nav-bar", 1.2, { clipPath: "circle(2500px at 100% -10%)" });
    navtogleScene.to(".nav-overlayeranimation", 2, { x: "100%" })
  } else {
    console.log("hey"); 
    e.target.classList.remove("active-nav");
    navtogleScene.to(".line1", 0.5, { rotate: "0", y: 0 });
    navtogleScene.to(".line2", 0.5, { rotate: "0", y: 0 }, "-=0.5");
    navtogleScene.to(".nav-bar", 1.2, { clipPath: "circle(50px at 100% -10%)" });
    navtogleScene.to(".nav-overlayeranimation", 2, { x: "0%" }, "-=0.5")
  }



}


function introFPage() {
  const burger = document.querySelector(".burger")
  const logo = document.querySelector(".logoo");
  const introPage = document.querySelector("#introPage");
  const introVidoe = document.querySelector(".introVideo");
  const mohamedAnimation = document.querySelector(".mohamedAnimation");
  const hessuinAnimation = document.querySelector(".hessuinAnimation2");
  const introText2 = document.querySelector(".introText2");
  controller = new ScrollMagic.Controller();
  const introTextAnim = gsap.timeline();
  introTextAnim.fromTo(burger, 2, { y: "-300%" }, { y: "0%" });
  introTextAnim.fromTo(logo, 2, { y: "-300%" }, { y: "0%" }, "-=2");
  introTextAnim.fromTo(mohamedAnimation, 2.5, { x: "200%", y: "200%" }, { x: "0%", y: "0%" }, "-=2");
  introTextAnim.fromTo(hessuinAnimation, 2.5, { x: "-200%", y: "-200%" }, { x: "0%", y: "0%" }, "-=2.5");
  introTextAnim.fromTo(introText2, 2, { opacity: "0" }, { opacity: "1" });
  introTextAnim.fromTo(introText2, 1.5, { color: "white" }, { color: "blueviolet" });

  introVideoScene = new ScrollMagic.Scene({
    duration: "9250",
    triggerElement: introPage,
    triggerHook: 0
  })
    .setPin(introPage)
    .setTween()
    .addTo(controller);

  introTextScene = new ScrollMagic.Scene({
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


}


function aboutFPage() {

  const aboutPage = document.querySelector("#aboutPage");
  const aboutOverlay = document.querySelector(".aboutOverlay");
  const imgpart1 = document.querySelector(".img-part-1");
  const imgpart2 = document.querySelector(".img-part-2");
  const imgpart3 = document.querySelector(".img-part-3");
  const aboutText = document.querySelector(".aboutText");


  controller = new ScrollMagic.Controller();
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
  aboutPageGsp.to(aboutText, 4, { clipPath: "circle(100%  at 30% 30%)" });


  aboutOffScene = new ScrollMagic.Scene({
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



}





function contactOn(e) {

  const navtogleScene = gsap.timeline();
  const githubContact = document.querySelector(".githubContact");
  const LinkinContact = document.querySelector(".LinkinContact");
  const gmailContact = document.querySelector(".gmailContact");
  const twitterContact = document.querySelector(".twitterContact");
  const facebookContact = document.querySelector(".facebookContact");
  const githubArrow = document.querySelector(".githubArrow");
  const LinkinArrow = document.querySelector(".LinkinArrow");
  const gmailArrow = document.querySelector(".gmailArrow");
  const twitterArrow = document.querySelector(".twitterArrow");
  const facebookArrow = document.querySelector(".facebookArrow");

  if (window.innerWidth > 1025) {


    navtogleScene.to(githubArrow, 1, { width: "0.1%", height: "15%" });
    navtogleScene.to(githubContact, 1, { x: "-70%", y: "-70%" }, "-=1");
    navtogleScene.to(LinkinArrow, 1, { width: "0.1%", height: "15%" }, "-=1");
    navtogleScene.to(LinkinContact, 1, { x: "70%", y: "-70%" }, "-=1");
    navtogleScene.to(facebookArrow, 1, { width: "0.1%", height: "15%" }, "-=1");
    navtogleScene.to(facebookContact, 1, { x: "88%" }, "-=1");
    navtogleScene.to(twitterArrow, 1, { width: "0.1%", height: "15%" }, "-=1");
    navtogleScene.to(twitterContact, 1, { x: "70%", y: "70%" }, "-=1");
    navtogleScene.to(gmailArrow, 1, { width: "0.1%", height: "15%" }, "-=1");
    navtogleScene.to(gmailContact, 1, { x: "-75%", y: "75%" }, "-=1");

  }
}
function contactOff(e) {
  const navtogleScene = gsap.timeline();
  const githubContact = document.querySelector(".githubContact");
  const LinkinContact = document.querySelector(".LinkinContact");
  const gmailContact = document.querySelector(".gmailContact");
  const twitterContact = document.querySelector(".twitterContact");
  const facebookContact = document.querySelector(".facebookContact");
  const githubArrow = document.querySelector(".githubArrow");
  const LinkinArrow = document.querySelector(".LinkinArrow");
  const gmailArrow = document.querySelector(".gmailArrow");
  const twitterArrow = document.querySelector(".twitterArrow");
  const facebookArrow = document.querySelector(".facebookArrow");

  navtogleScene.to(githubArrow, 1, { width: "0%", height: "0%" });
  navtogleScene.to(githubContact, 1, { x: "0%", y: "0%" }, "-=1");
  navtogleScene.to(LinkinArrow, 1, { width: "0%", height: "0%" }, "-=1");
  navtogleScene.to(LinkinContact, 1, { x: "0%", y: "0%" }, "-=1");
  navtogleScene.to(facebookArrow, 1, { width: "0%", height: "0%" }, "-=1");
  navtogleScene.to(facebookContact, 1, { x: "0%" }, "-=1");
  navtogleScene.to(twitterArrow, 1, { width: "0%", height: "0%" }, "-=1");
  navtogleScene.to(twitterContact, 1, { x: "0%", y: "0%" }, "-=1");
  navtogleScene.to(gmailArrow, 1, { width: "0%", height: "0%" }, "-=1");
  navtogleScene.to(gmailContact, 1, { x: "0%", y: "0%" }, "-=1");
}

function contactFPage() {

  const contact = document.querySelector(".contact");
  const contactPage = document.querySelector("#contactPage");
  const contactImg = document.querySelector(".contactImg");
  const githubContact = document.querySelector(".githubContact");
  const LinkinContact = document.querySelector(".LinkinContact");
  const gmailContact = document.querySelector(".gmailContact");
  const twitterContact = document.querySelector(".twitterContact");
  const facebookContact = document.querySelector(".facebookContact");

  // COntact page Gsap
  controller = new ScrollMagic.Controller();

  const contactPageGsap = gsap.timeline();
  contactPageGsap.fromTo(contact, 5, { opacity: "0" }, { opacity: "0.9" });
  contactPageGsap.fromTo(contact, 6, { scale: "0" }, { scale: "1" }, "-=7");
  contactPageGsap.fromTo(githubContact, 2.5, { x: "-400%", y: "-400%" }, { x: "0%", y: "0%" }, "-=2.5");
  contactPageGsap.fromTo(gmailContact, 2.5, { x: "-400%", y: "400%" }, { x: "0%", y: "0%" }, "-=2.5");
  contactPageGsap.fromTo(LinkinContact, 2.5, { x: "400%", y: "-400%" }, { x: "0%", y: "0%" }, "-=2.5");
  contactPageGsap.fromTo(twitterContact, 2.5, { x: "-400%", y: "400%" }, { x: "0%", y: "0%" }, "-=2.5");
  contactPageGsap.fromTo(facebookContact, 2.5, { x: "400%" }, { x: "0%" }, "-=2.5");


  contactScene = new ScrollMagic.Scene({
    triggerElement: contactPage,
    triggerHook: 0,
    reverse: true

  })



    .setTween(contactPageGsap)
    .addTo(controller);

  contactImg.addEventListener("mouseenter", contactOn);
  contactImg.addEventListener("mouseleave", contactOff);


}

function projectFpage() {
  bringNavIntoPage();
  const slides = document.querySelectorAll(
    ".projects-section .wrapperr .containerr .slide"
  );
  const nextbtn = document.querySelector("#Next");
  const prevbtn = document.querySelector("#Prev");
  const dots = document.querySelectorAll(".dot");
  const Divs = document.querySelectorAll(".projects-section .des");
  const wrapper = document.querySelector(".projects-section .wrapperr");
  const closebtns = document.querySelectorAll(
    ".projects-section .des .fa-times-circle"
  );
  const proname = document.querySelectorAll(".des .proname h3");
  const desc = document.querySelectorAll(".des .desc h5");
  var currentslide = 0;

  slides.forEach((img, i) => {
    img.style.display = "none";
    dots[i].style.background = "#c2c9c6";

    img.addEventListener("click", () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
      Divs[i].style.display = "inline";
      tl.fromTo(
        Divs[i],
        1,
        { opacity: 0 },

        { opacity: 1 }
      )
        .fromTo(
          wrapper,
          0.1,
          { opacity: 1 },

          { opacity: 0.9 },
          "-=0.5"
        )
        .fromTo(Divs[i], 0.7, { skewX: 90 }, { skewX: 0 });
      wrapper.style.filter = "blur(3px)";

      tl.fromTo(
        proname[i],
        0.8,
        { scale: 0 },

        { scale: 1 },
        "+=0.05"
      ).fromTo(desc[i], 0.8, { scale: 0 }, { scale: 1 }, "+=0.025");
    });

    closebtns[i].addEventListener("click", () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.fromTo(
        wrapper,
        0.5,
        { opacity: 0.9 },

        { opacity: 1 },
        "-=0.5"
      )
        .fromTo(Divs[i], 0.7, { skewX: 0 }, { skewX: 90 })
        .fromTo(
          Divs[i],
          1,
          { opacity: 1 },

          { opacity: 0 }
        );
      wrapper.style.filter = "blur(0px)";
    });

    closebtns[i].addEventListener("mouseover", () => {
      console.log("mo");
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
      console.log(proname[0]);
      tl.fromTo(
        proname[i],
        1,
        { rotationX: 0 },

        { rotationX: 90 }
      );
    });

    closebtns[i].addEventListener("mouseout", () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.fromTo(
        proname[i],
        1,
        { rotationX: 90 },

        { rotationX: 0 }
      );
    });
  });

  slides[currentslide].style.display = "inline";
  dots[currentslide].style.background = "#b34854";


  nextbtn.addEventListener("click", () => {
    slides[currentslide].style.display = "none";
    dots[currentslide].style.background = "#f9f5f3";

    if (currentslide == slides.length - 1) {
      currentslide = -1;
    }

    currentslide++;
    slides[currentslide].style.display = "inline";
    dots[currentslide].style.background = "#b34854";
  });

  prevbtn.addEventListener("click", () => {
    slides[currentslide].style.display = "none";
    dots[currentslide].style.background = "#f9f5f3";
    if (currentslide == 0) {
      currentslide = slides.length;
    }
    currentslide--;
    slides[currentslide].style.display = "inline";
    dots[currentslide].style.background = "#b34854";
  });


}





function slidesAnimation() {
  const burger = document.querySelector(".burger")
  const logo = document.querySelector(".logoo");
  const introPage = document.querySelector("#introPage");
  const sections = document.querySelectorAll(".slideanim");
  controller = new ScrollMagic.Controller();
  sections.forEach((slide, index, slides) => {
    const pageTl = gsap.timeline();
    let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
    pageTl.fromTo(nextSlide, 30, { y: "0%" }, { y: "50%" });
    pageTl.fromTo(slide, 30, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.4 });
    pageTl.fromTo(nextSlide, 30, { y: "50%" }, { y: "0%" }, "-=29.5");
    pageTl.fromTo(burger, 2, { y: "-300%" }, { y: "0%" });
    pageTl.fromTo(logo, 2, { y: "-300%" }, { y: "0%" }, "-=2");

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
        .addTo(controller);

    }
    else {
      pageScene = new ScrollMagic.Scene({
        triggerElement: slide,
        duration: "100%",
        triggerHook: 0
      })





        .setPin(slide, { pushFollowers: false })
        .setTween(pageTl)
        .addTo(controller);

    }




  });
}




function slidesAnimation2() {
  const burger = document.querySelector(".burger")
  const logo = document.querySelector(".logoo");
  const sections = document.querySelectorAll(".slideanim2");
  controller = new ScrollMagic.Controller();
  sections.forEach((slide, index, slides) => {
    const pageTl = gsap.timeline();
    let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
    pageTl.fromTo(nextSlide, 50, { y: "0%" }, { y: "50%" });
    pageTl.fromTo(slide, 50, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.4 });
    pageTl.fromTo(nextSlide, 50, { y: "50%" }, { y: "0%" }, "-=49.5");
    pageTl.fromTo(burger, 2, { y: "-300%" }, { y: "0%" });
    pageTl.fromTo(logo, 2, { y: "-300%" }, { y: "0%" }, "-=2");

    pageScene2 = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0,
    })

      .setPin(slide, { pushFollowers: false })
      .setTween(pageTl)
      .addTo(controller);






  });
}





//TRANSITIONS BETWEEN PAGES

barba.init({
  views: [
    {
      namespace: 'firstPage',
      afterEnter() {
        introFPage();
        aboutFPage();
        slidesAnimation();
        logo.href = "./MR.html";

      },
      beforeLeave() {
        introVideoScene.destroy();
        introTextScene.destroy();
        aboutOffScene.destroy();
        pageScene.destroy();
        controller.destroy();
        removeNav();
      }
    },
    {
      namespace: 'secondPage',
      beforeEnter() {
        bringNavIntoPage();
        projectFpage();
        contactFPage();
       slidesAnimation2();
        logo.href = "../MR.html";
      },
      beforeLeave() {
        contactScene.destroy();
        pageScene2.destroy();
        controller.destroy();
        removeNav();

      }
    }
  ],
  transitions: [
    {
      leave({ current, next }) {

        let done = this.async();
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.fromTo(current.container, 3, { opacity: 1 }, { opacity: 0 });
        tl.fromTo(".transitionBetweenPages", 3, { x: "-100%" }, { x: "0%" });
        tl.fromTo(".logoOverlay", 2.5, { x: "0%" }, { x: "300%" });
        tl.fromTo(".logoOverlay2", 2.5, { x: "0%" }, { x: "-300%" }, "-=1.5");
        tl.fromTo(".logoOverlay3", 2.5, { x: "0%" }, { x: "300%" });
        tl.fromTo(".logoOverlay4", 2.5, { x: "0%" }, { x: "-300%" }, "-=1.5");
        tl.fromTo(".swipe", 0.75, { x: "-100%" }, { x: "0%", onComplete: done }, "-=0.5");


      },
      enter({ current, next }) {
        let done = this.async();
        window.scroll(0, 0)
        //Scroll to the top

        //An Animation
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.fromTo(".transitionBetweenPages", 3, { x: "0%" }, { x: "100%" }, "-=5");
        tl.fromTo(".swipe", 1, { x: "0%" }, { x: "100%", stagger: 1, onComplete: done });
        tl.fromTo(next.container, 3, { opacity: 0 }, { opacity: 1 });


      }
    }
  ]
});