const form = document.getElementById('myForm');
const modal = document.getElementById('popup');
const closeButton = document.getElementById('close-button');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  modal.style.display = 'flex';

  setTimeout(() => {
    modal.style.display = 'none';
    form.submit();
  }, 5000);
});

const link = document.getElementById('submit-button');
const button = document.getElementById('submit-form');

link.addEventListener('click', (event) => {
    event.preventDefault();
    button.click();
});

modal.addEventListener('click', function() {
    popup.style.display = 'none';
    form.submit();
});

