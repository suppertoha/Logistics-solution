const buttons = document.querySelectorAll("[data-btn-index]");
const elements = document.querySelectorAll("[data-el-index]");
const map = document.querySelector(".main-map");

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    const index = button.getAttribute("data-btn-index");
    const correspondingElement = document.querySelector(`[data-el-index="${index}"]`);

    buttons.forEach((btn) => {
      if (btn === button) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    elements.forEach((element) => {
      if (element === correspondingElement) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });

    map.classList.add("active");
  });

  button.addEventListener("mouseout", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    elements.forEach((element) => {
      element.classList.remove("active");
    });

    map.classList.remove("active");
  });
});

elements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    const index = element.getAttribute("data-el-index");
    const correspondingButton = document.querySelector(`[data-btn-index="${index}"]`);

    buttons.forEach((btn) => {
      if (btn === correspondingButton) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    elements.forEach((el) => {
      if (el === element) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });

    map.classList.add("active");
  });

  element.addEventListener("mouseout", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    elements.forEach((el) => {
      el.classList.remove("active");
    });

    map.classList.remove("active");
  });
});
