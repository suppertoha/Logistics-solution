import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);






//const mainSliders = document.querySelectorAll(".main-slider");

//mainSliders.forEach((mainSlider, index) => {
//  let delay = 5000; // значение по умолчанию
//  if (index === 0) {
//    delay = 2000; // время прокрутки для первого слайдера
//  } else if (index === 1) {
//    delay = 2500; // время прокрутки для второго слайдера
//  }

//  const swiperAnime = new Swiper(mainSlider, {
//    loop: true,
//    grabCursor: true,
//    slidesPerView: 4,
//    spaceBetween: 30,
//    centeredSlides: true,
//    autoplay: {
//      delay: delay,
//      disableOnInteraction: false,
//    },
//    speed: 1000, // Задайте значение скорости анимации (в миллисекундах)
//    breakpoints: {
//      1024: {
//        slidesPerView: "6",
//        spaceBetween: 50,
//      },
//      1366: {
//        slidesPerView: "8.5",
//        spaceBetween: 60,
//      },
//    },
//  });

//  mainSlider.addEventListener("mouseenter", () => {
//    if (swiperAnime.autoplay.running) {
//      swiperAnime.autoplay.stop();
//    }
//  });

//  mainSlider.addEventListener("mouseleave", () => {
//    if (!swiperAnime.autoplay.running) {
//      swiperAnime.autoplay.start();
//    }
//  });

//  if (index === 1) {
//    const slides = mainSlider.querySelectorAll(".swiper-slide");
//    slides.forEach((slide) => {
//      slide.style.transform = "translateX(-50px)";
//    });
//  }
//});

// JavaScript код
function moveImages() {
  currentOffset += 1; // Измените знак на плюс
  if (currentOffset > totalWidth) { // Измените условие
    currentOffset = 0;
    marqueeInner.insertBefore(images[images.length - 1], images[0]); // Используйте insertBefore вместо appendChild
  }
  marqueeInner.style.transform = `translateX(-${currentOffset}px)`; // Измените знак на минус
  requestAnimationFrame(moveImages);
}
