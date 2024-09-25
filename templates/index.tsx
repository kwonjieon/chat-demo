import React from 'react';
import ReactDOM from 'react-dom/client';
import Component from './component';  // 당신이 제공한 React 컴포넌트

const rootElement = document.getElementById('react-root');
const userName = '사용자';  // 사용자 이름을 동적으로 설정 가능

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <Component userName={userName} />  {/* 컴포넌트에 userName을 prop으로 전달 */}
        </React.StrictMode>
    );
}
