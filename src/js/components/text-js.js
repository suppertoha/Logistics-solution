//const textButtons = document.querySelectorAll('.textButton');
//const points = document.querySelectorAll('.points');
//const showMoreTexts = document.querySelectorAll('.moreText');

//if (textButtons.length > 0 && points.length > 0 && showMoreTexts.length > 0) {
//  textButtons.forEach(function(textButton, index) {
//    const pointsElement = points[index];
//    const showMoreTextElement = showMoreTexts[index];

//    textButton.addEventListener('click', function() {
//      if (showMoreTextElement.classList.contains('hidden')) {
//        showMoreTextElement.classList.remove('hidden');
//        pointsElement.style.display = 'none';
//        pointsElement.style.visibility = 'hidden';
//        showMoreTextElement.style.maxHeight = showMoreTextElement.scrollHeight + 'px';
//        textButton.textContent = 'скрыть';
//      } else {
//        showMoreTextElement.classList.add('hidden');
//        pointsElement.style.display = 'inline-block';
//        pointsElement.style.visibility = 'visible';
//        showMoreTextElement.style.maxHeight = '0';
//        textButton.textContent = 'читать далее';
//      }
//    });
//  });
//}

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
        textContent.classList.add('active')
      } else {
        textContent.style.maxHeight = '46px';
        textButton.innerText = openingText;
        textContent.classList.remove('active')
      }
    });
  });
};

initText();
