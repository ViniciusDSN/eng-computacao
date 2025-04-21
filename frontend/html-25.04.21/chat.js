const form = document.querySelector('#form-chat-send');
const input = document.querySelector('#message');
const messagesList = document.querySelector('.messages-list');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const messageText = input.value.trim(); 

  if (messageText === '') return; 

  const messageItem = document.createElement('div');
  messageItem.classList.add('message-item', 'message-user');

  const msgUser = document.createElement('div');
  msgUser.classList.add('msg-user');
  msgUser.innerHTML = '<strong>Você diz:</strong>';

  const msgChat = document.createElement('div');
  msgChat.classList.add('msg-chat');
  msgChat.textContent = messageText;

  messageItem.appendChild(msgUser);
  messageItem.appendChild(msgChat);

  messagesList.appendChild(messageItem);

  input.value = '';
});