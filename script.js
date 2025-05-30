function checkLogin() {
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  if (u === 'sukirti' && p === 'sumit') {
    document.getElementById('loginBox').classList.add('hidden');

    const welcomeMsg = document.getElementById('welcomeMsg');
    const complainAgainst = "The System"; // fixed target text
    welcomeMsg.textContent = `Welcome Miss Sukirtiii to your Problem Portal, please proceed to submit your complaint against Mr Sumit 🐾`;

    // Show popup
    document.getElementById('popup').classList.remove('hidden');

    // Add class to body to enable blur effect on background
    document.body.classList.add('popup-active');
  } else {
    alert("Oops! Wrong username or password 💔");
  }
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
  document.getElementById('formBox').classList.remove('hidden');

  // Remove blur effect when popup is closed
  document.body.classList.remove('popup-active');
}

const moodSlider = document.querySelector('input[name="mood"]');
const moodLabel = document.createElement('span');
moodLabel.textContent = + moodSlider.value;
moodSlider.parentNode.insertBefore(moodLabel, moodSlider.nextSibling);

moodSlider.addEventListener('input', () => {
  moodLabel.textContent = + moodSlider.value;
});