// TypeScript 버전
import React, { useState } from 'react'; // React에서 useState 훅을 가져옵니다.

const UseStateExample = () => {
    // useState 훅을 사용하여 상태(count)를 선언합니다.
    // 상태의 초기값은 0이며, 숫자 타입으로 제한합니다.
    const [count, setCount] = useState<number>(0);

    return (
        <div style={{ padding: '20px' }}>
            {/* 페이지 제목을 표시합니다. */}
            <h1>useState 예제 (TypeScript)</h1>
            {/* 현재 상태 값을 화면에 표시합니다. */}
            <p>현재 카운트: {count}</p>
            {/* 버튼 클릭 시 상태를 1 증가시킵니다. */}
            <button onClick={() => setCount(count + 1)}>증가</button>
            {/* 버튼 클릭 시 상태를 1 감소시킵니다. */}
            <button onClick={() => setCount(count - 1)}>감소</button>
        </div>
    );
};

export default UseStateExample; // 이 컴포넌트를 기본 내보내기로 설정합니다.
