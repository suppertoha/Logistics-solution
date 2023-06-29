//function handleResize() {
//  const textContainers = document.querySelectorAll('.text-container');
//  const btns = document.querySelectorAll('.text-btn');
//  const texts = document.querySelectorAll('.reviews-card__text');

//  for (let i = 0; i < texts.length; i++) {
//    const text = texts[i];
//    const textContainer = textContainers[i];
//    const btn = btns[i];

//    if (text && textContainer && btn) {
//      if (text.offsetHeight > 200) {
//        textContainer.classList.add('active');
//        if (textContainer.classList.contains('active')) {
//          btn.style.display = 'block';
//        }
//      }

//      btn.addEventListener('click', () => {
//        textContainer.classList.toggle('active');
//        btn.classList.toggle('active');
//        if (!textContainer.classList.contains('active')) {
//          btn.style.display = 'none';
//        }
//      });
//    }
//  }
//}

//// Вызываем функцию для первоначальной инициализации
//handleResize();

//// Добавляем обработчик события resize
//window.addEventListener('resize', handleResize);


const initText = () => {
  const texts = document.querySelectorAll('.js-text');
  if (!texts) return;
  texts.forEach((text) => {
    const textContent = text.querySelector('.js-text__content');
    const textButton = text.querySelector('.js-text__more-button');
    const openingText = textButton.dataset.openingText;
    const closingText = textButton.dataset.closingText;
    let isExpanded = false;

    textButton.addEventListener('click', () => {
      isExpanded = !isExpanded;
      if (isExpanded) {
        textContent.style.maxHeight = textContent.scrollHeight + 'px';
        textButton.innerText = closingText;
      } else {
        textContent.style.maxHeight = '90px'; /* Изначальная высота */
        textButton.innerText = openingText;
      }
    });
  });
};

initText();

