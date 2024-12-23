// TypeScript 버전
import React, { useState, useEffect } from 'react'; // React에서 useState와 useEffect 훅을 가져옵니다.

const UseEffectExample = () => {
    // time이라는 상태(state)를 선언하고, 초기값은 0으로 설정합니다. 이 상태는 숫자 타입임을 명시합니다.
    const [time, setTime] = useState<number>(0);

    // useEffect 훅을 사용하여 컴포넌트가 렌더링된 후 실행할 동작을 정의합니다.
    useEffect(() => {
        // 매 1초마다 실행되는 타이머를 설정합니다.
        const timer = setInterval(() => {
            // 이전 상태(prevTime)에 1을 더해 상태를 갱신합니다.
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        // 클린업 함수: 컴포넌트가 언마운트되거나 의존성이 변경되기 전에 실행됩니다.
        // 여기서는 타이머를 정리(clear)하여 메모리 누수를 방지합니다.
        return () => clearInterval(timer);
    }, []); // 빈 배열([])을 의존성 배열로 전달하여 이 효과가 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 합니다.

    return (
        <div style={{ padding: '20px' }}>
            {/* 페이지의 제목을 표시합니다. */}
            <h1>useEffect 예제 (TypeScript)</h1>
            {/* 상태로 관리되고 있는 경과 시간을 표시합니다. */}
            <p>경과 시간: {time} 초</p>
        </div>
    );
};

export default UseEffectExample; // 이 컴포넌트를 기본 내보내기로 설정합니다.
