
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//ScrollSmoother.create({
//  wrapper: '.site-container',
//  content:  '.wrapper',
//  effects: true,
//})

const counters = document.querySelectorAll('.count');
const speed = 30;

function mainCounter() {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(counter.getAttribute('data-target'));
      const count = parseInt(counter.innerText.replace(/\s/g, '')); // Удаляем пробелы из текущего значения
      const increment = Math.ceil((target - count) / speed); // Используем динамический инкремент

      if (count < target) {
        counter.innerText = numberWithSpaces(count + increment); // Применяем разделитель тысяч к обновленному значению
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = numberWithSpaces(target); // Применяем разделитель тысяч к целевому значению
      }
    };
    updateCount();
  });

  function numberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}


//! header + main-section
const sectionBg = document.querySelector(".main-section__bg");

const tlMain = gsap.timeline();
tlMain
  .fromTo(".header", { opacity: 0, y: -50 },{ opacity: 1, duration: 0.5, y: 0 })
  .fromTo(
    ".main-section__title",
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 0.5 }
  )
  .fromTo(
    sectionBg,
    { opacity: 0, x: -200 },
    { opacity: 1, x: 0, duration: 0.7 }
  )
  .fromTo(
    ".main-section__description",
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 0.35 },
    "=-1"
  )
  .fromTo(
    ".animation-search__icon-start",
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 0.15 },
    "=-0.8"
  )
  .fromTo(
    ".animation-search__hidden",
    { opacity: 0, width: "0%" },
    { opacity: 1, width: "100%", duration: 0.7 },
    "=-0.8"
  )
  .fromTo(
    ".animation-search__icon-end",
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 0.35 },
    "=-0.3"
  );
//? End header + main-section


//! bg

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".block-wrapper",
    start: "top top+=600",
    end: "5%",
    //scrub: true,
    once: true,
    onEnter: () => {
      setTimeout(mainCounter, 100);
    },
  },
});

tl.to(
  sectionBg,
  { x: -100, y: -50, duration: 0.7, ease: "power1.out" }
);
//? bg


//! tlCounter


const tlCounter = gsap.timeline();
const mainCount = document.querySelectorAll('.counter__item')

ScrollTrigger.create({
  trigger: ".about",
  start: "top-=50% top+=400",
  end: "100%",
  once: true,
   scrub: true,
  //markers: true,
  onEnter: () => {
    tlCounter

    .fromTo(
      mainCount,
      {  opacity: 0 },
      {  opacity: 1, duration: 0.1 }
    )

    .fromTo(
      ".about__bg",
      { x: '-100%',opacity: 0  },
      { x: 0,opacity: 1, duration: 0.3 }
    )
    .fromTo(
      ".about__name, .about__text",
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5 }
    )


  }
});

//? tlCounter

//! tlServices




//const accordionItems = document.querySelectorAll(".accordion__item");

//const tlAccordion = gsap.timeline({
//  scrollTrigger: {
//    trigger: ".accordion__inner",
//    start: "top-=300 bottom-=300",
//    end: "top-=300 top",
//    scrub: true,
//    //markers: true,
//    onEnter: () => {
//      setTimeout(mainCounter, 100);
//    },
//  },
//});

//accordionItems.forEach((item) => {
//  tlAccordion.fromTo(
//    item,
//    { y: -50, opacity: 0 },
//    { y: 0, opacity: 1, duration: 0.5 }
//  );
//});


const accordionItems = document.querySelectorAll(".header-accordion__item");

const tlAccordion = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "top-=140% top+=400",
    end: "80%",
    once: true,
    // scrub: true,
    //markers: true,

    onEnter: () => {
      mainCounter();
      const tlParallel = gsap.timeline();

      tlAccordion.to(
        ".services__title",
        { x: 0, opacity: 1, duration: 0.2, ease: "sine.out"  }
      );
      tlParallel.to(
        accordionItems,
        { y: '0', opacity: 1, duration: 0.3, ease: "sine.out" },"=-4"
      );

      const tl = gsap.timeline();

      tl.to(
        ".main-section__bg",
        { x: 0, y: 0, ease: "sine.out" }
      );

      gsap.timeline().add(tlAccordion).add(tlParallel);
    }
  }
});

//? end tlServices

//! tlProduction
const newsItems = document.querySelectorAll(".block-news__animation--top");


const tlProduction = gsap.timeline({
  scrollTrigger: {
    trigger: ".block-news--top",
    start: "top-=130% top+=400",
    end: "300%",
    // scrub: true,
      once: true,
    //markers: true,
    onEnter: () => {
      tlProduction
      .to(
        ".block-news__title--top",
        { x: 0, opacity: 1, duration: .9, ease: "sine.out" },"=-4"
      )
        .to(
        newsItems,
        { x: 0, opacity: 1, duration: .6, ease: "sine.out" }
      );
    }
  },
});

//? end tlProduction

//! tlMap
const mapItems = document.querySelectorAll(".nav-map-animate");

const tlMap = gsap.timeline({
  scrollTrigger: {
    trigger: ".map",
    start: "top-=50% top+=400",
    end: "100%",
    once: true,
    //markers: true,

    onEnter: () => {
      tlMap
        .to(".map__animate", { x: 0, opacity: 1, duration: 0.4, ease: "sine.out" })
        .to(
          mapItems,
          { opacity: 1, y: '0', duration: 0.4, ease: "sine.out" },"=-0.5"
        )
        .to(".main-map", { opacity: 1, duration: 0.4, ease: "sine.out" }),"=-0.6";

    }
  },
});

//? tlMap

//! tlSlider

const tlSlider = gsap.timeline({
  scrollTrigger: {
    trigger: ".slider",
    start: "top-=100% top+=400",
    end: "100%",
    once: true,
    //markers: true,
    onEnter: () => {

      tlSlider.to(".main-slider__title", { x: 0, opacity:1, duration: 0.3, ease: "sine.out" });

    }
  },
});
//? tlNews

//! tlNews

const newsItemsBottom = document.querySelectorAll(".block-news__animation--bottom");


const tlNews = gsap.timeline({
  scrollTrigger: {
    trigger: ".block-news--bottom",
    start: "top-=140% top+=400",
    end: "100%",
    // scrub: true,
      once: true,
    //markers: true,
    onEnter: () => {
      tlProduction
      .to(
        ".block-news__title--bottom",
        { x: 0, duration: 0.4, opacity:1, ease: "sine.out" }
      )
        .to(
          newsItemsBottom,
        { x: 0, duration: 0.4,opacity:1, ease: "sine.out" }
      );
    }
  },
});

//? tlNews

//! tlWork

const workItems = document.querySelectorAll(".work__animation");


const tlWork = gsap.timeline({
  scrollTrigger: {
    trigger: ".block-news--bottom",
    start: "top+=70% top+=400",
    end: "300%",
    // scrub: true,
      once: true,
    //markers: true,
    onEnter: () => {
      tlProduction
      .to(
        ".work__title",
        { x: 0, opacity: 1, duration: 0.4, ease: "sine.out" }
      )
        .to(
          workItems,
        { x: 0, opacity: 1, duration: 0.4, ease: "sine.out" }
      );
    }
  },
});

//? tlWork


