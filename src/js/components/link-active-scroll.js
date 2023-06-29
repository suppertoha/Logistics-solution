function smoothScroll(target) {
  const headerHeight = document.querySelector(".header").offsetHeight;
  const targetPosition =
    target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 800;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }

  window.requestAnimationFrame(step);
}


const navLinks = document.querySelectorAll(".js-link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      smoothScroll(targetSection);
    }
  });
});

const sections = document.querySelectorAll('.section-js');

const setActiveLink = (sectionId) => {
  navLinks.forEach((link) => {
    const href = link.getAttribute('href').substring(1);
    if (href === sectionId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};

const handleScroll = () => {
  let currentSectionId = null;
  let currentSectionOffset = window.innerHeight;

  sections.forEach((section) => {
    const sectionOffset = section.getBoundingClientRect().top;
    if (sectionOffset < currentSectionOffset && sectionOffset >= 0) {
      currentSectionId = section.getAttribute('id');
      currentSectionOffset = sectionOffset;
    }
  });

  setActiveLink(currentSectionId);
};

window.addEventListener('scroll', handleScroll);


