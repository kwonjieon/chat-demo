'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import React from 'react';

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: Date;
  isSelf: boolean;
}

interface ComponentProps {
  userName: string;
}

export default function Component({ userName }: ComponentProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: '친구', content: '안녕하세요!', timestamp: new Date(), isSelf: false },
    { id: 2, sender: userName, content: '안녕하세요, 반가워요!', timestamp: new Date(), isSelf: true },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (inputMessage.trim() === '') return;
    const newMessage: Message = {
      id: messages.length + 1,
      sender: userName,
      content: inputMessage,
      timestamp: new Date(),
      isSelf: true,
    };
    setMessages([...messages, newMessage]);
    setInputMessage('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col ${message.isSelf ? 'items-end' : 'items-start'}`}
          >
            {message.isSelf && (
              <div className="text-sm text-gray-600 mb-1">{message.sender}</div>
            )}
            <div
              className={`max-w-xs ${
                message.isSelf
                  ? 'bg-yellow-300 text-gray-800'
                  : 'bg-white text-gray-800'
              } rounded-lg p-3 shadow`}
            >
              {!message.isSelf && (
                <div className="font-bold text-sm mb-1">{message.sender}</div>
              )}
              <div className="text-sm">{message.content}</div>
              <div className="text-xs text-gray-500 mt-1">
                {message.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-4 flex items-center">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
          placeholder="메시지를 입력하세요..."
          aria-label="메시지 입력"
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-yellow-400 text-white rounded-full p-2 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          aria-label="메시지 보내기"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
