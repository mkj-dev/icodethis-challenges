const horizontalCards = document.querySelectorAll('.card-horizontal');
const horizontalCardImages = document.querySelectorAll(`div[class='image-container']`);

function onClientWidthChange() {
  const clientWidth = document.body.clientWidth;

  horizontalCards.forEach(card => {
    if (clientWidth <= 900) {
      card.classList.replace('card-horizontal', 'card-vertical');
    } if (clientWidth > 900) {
      card.classList.replace('card-vertical', 'card-horizontal');
    }
  });

  horizontalCardImages.forEach(image => {
    if (clientWidth <= 900) {
      image.classList.add('vertical');
    } if (clientWidth > 900) {
      image.classList.remove('vertical');
    }
  });
}

window.onresize = onClientWidthChange;