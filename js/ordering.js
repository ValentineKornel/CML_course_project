const form = document.getElementById('myForm');
const modal = document.getElementById('popup');
const closeButton = document.getElementById('close-button');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  // Отображаем модальное окно
  modal.style.display = 'flex';

  // Скрываем модальное окно через 5 секунд
  setTimeout(() => {
    modal.style.display = 'none';
    form.submit();
  }, 5000);
});

// Находим ссылку и кнопку по id
const link = document.getElementById('submit-button');
const button = document.getElementById('submit-form');

// Назначаем обработчик событий на клик по ссылке
link.addEventListener('click', (event) => {
    // Отменяем стандартное поведение ссылки
    event.preventDefault();
    // Программно вызываем событие клика на кнопке
    button.click();
});

modal.addEventListener('click', function() {
    popup.style.display = 'none';
    form.submit();
});