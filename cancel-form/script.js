
const form = document.querySelector('form');
const ratingButtons = form.querySelectorAll('input[type="button"]');
const submitButton = document.getElementById('submit-button');
const ratingDialog = document.getElementById('rating-dialog');

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    const ratingInput = form.querySelector('input[type="hidden"]');

    ratingInput.value = button.value;

    // Change the rating button styles on click 
    button.style.backgroundColor = '#ff8522';
    button.style.color = '#fff';

    ratingButtons.forEach(otherButton => {
      if (otherButton !== button) {
        otherButton.style.backgroundColor = '#ebebeb';
        otherButton.style.color = '#9c8787';
      }
    });
  });
});

submitButton.addEventListener('click', e => {
  e.preventDefault();

  // Show the rating in the dialog
  const ratingValue = form.querySelector('input[type="hidden"]').value;
  const ratingDisplay = ratingDialog.querySelector('#rating-display');

  if (!ratingValue) {
    ratingDisplay.textContent = 'Please, give us a rating :)';
  } else {
    if (ratingValue < 5) {
      ratingDisplay.textContent = `${ratingValue} :(`;
    } else {
      ratingDisplay.textContent = `${ratingValue} :)`;
    }
  }

  ratingDialog.showModal();
});

const closeButton = ratingDialog.querySelector('#close-button');
closeButton.addEventListener('click', () => {
  ratingDialog.close();
});