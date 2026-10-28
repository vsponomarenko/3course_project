import '../stylesheets/style.css'

const form = document.querySelector('.form form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = form.querySelector('input[type="text"]');
  const phone = form.querySelector('input[type="tel"]');

  if (name.value.trim() === '' || phone.value.trim() === '') {
    alert('Пожалуйста, заполните имя и номер телефона');
    return;
  }

  alert('Заявка отправлена!');
});