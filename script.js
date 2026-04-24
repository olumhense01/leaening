const button = document.getElementById('clickButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = 'Hello! The button was clicked.';
});
