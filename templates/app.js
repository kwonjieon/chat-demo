document.addEventListener('DOMContentLoaded', function () {
    const userName = '사용자'; // 동적으로 설정 가능
    const messagesContainer = document.getElementById('messages');
    const inputMessage = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
  
    const messages = [
      {
        id: 1,
        sender: '친구',
        content: '안녕하세요!',
        timestamp: new Date().toLocaleTimeString(),
        isSelf: false,
      },
      {
        id: 2,
        sender: userName,
        content: '안녕하세요, 반가워요!',
        timestamp: new Date().toLocaleTimeString(),
        isSelf: true,
      },
    ];
  
    function renderMessages() {
      messagesContainer.innerHTML = ''; // 메시지 리스트 초기화
      messages.forEach((message) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', message.isSelf ? 'self' : 'other');
  
        const senderElement = document.createElement('div');
        senderElement.classList.add('sender');
        senderElement.textContent = message.sender;
  
        const contentElement = document.createElement('div');
        contentElement.classList.add('content');
        contentElement.textContent = message.content;
  
        const timestampElement = document.createElement('div');
        timestampElement.classList.add('timestamp');
        timestampElement.textContent = message.timestamp;
  
        messageElement.appendChild(senderElement);
        messageElement.appendChild(contentElement);
        messageElement.appendChild(timestampElement);
  
        messagesContainer.appendChild(messageElement);
      });
  
      // 마지막 메시지로 스크롤
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  
    function sendMessage() {
      const messageText = inputMessage.value.trim();
      if (messageText === '') return;
  
      const newMessage = {
        id: messages.length + 1,
        sender: userName,
        content: messageText,
        timestamp: new Date().toLocaleTimeString(),
        isSelf: true,
      };
  
      messages.push(newMessage);
      renderMessages();
      inputMessage.value = ''; // 입력 필드 초기화
    }
  
    // 이벤트 리스너
    sendButton.addEventListener('click', sendMessage);
    inputMessage.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        sendMessage();
      }
    });
  
    // 초기 메시지 렌더링
    renderMessages();
  });
  