
const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
    const currentTime = new Date().getTime();
    timeElement.textContent = `Current Time: ${currentTime}ms`;
}
updateTime();
setInterval(updateTime, 1000);
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('test-contact-success');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameError = document.getElementById('test-contact-error-name');
  const emailError = document.getElementById('test-contact-error-email');
  const subjectError = document.getElementById('test-contact-error-subject');
  const messageError = document.getElementById('test-contact-error-message');

  let isValid = true;

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  if (!emailInput.value.includes('@') || emailInput.value.trim() === '') {
    emailError.textContent = 'Invalid email';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  if (subjectInput.value.trim() === '') {
    subjectError.textContent = 'Subject is required';
    isValid = false;
  } else {
    subjectError.textContent = '';
  }

  if (messageInput.value.trim().length < 10) {
    messageError.textContent = 'Message must be at least 10 characters';
    isValid = false;
  } else {
    messageError.textContent = '';
  }

  if (isValid) {
    successMessage.textContent = 'Message sent successfully!';
    form.reset();
  }
});


