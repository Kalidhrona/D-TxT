const usernameInput = document.getElementById('username');
const submitButton = document.getElementById('submit');
const chatLog = document.querySelector('.chat-log');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');

let username = '';

submitButton.addEventListener('click', () => {
  if (usernameInput.value.trim() === '') {
    alert('Please enter a username');
    return;
  }
  username = usernameInput.value;
  usernameInput.disabled = true;
  submitButton.disabled = true;
});

sendButton.addEventListener('click', () => {
  if (messageInput.value.trim() === '') {
    alert('Please enter a message');
    return;
  }
  const message = messageInput.value;
  chatLog.innerHTML += `<p class="text">${username}: ${message}</p>`;
  messageInput.value = '';
});

let onlineCount = 0;

document.getElementById('submit').addEventListener('click', function() {
	const username = document.getElementById('username').value;
	if (username) {
		onlineCount++;
		document.getElementById('count').textContent = onlineCount;
	}
});