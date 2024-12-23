import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';

const UseCustomHookExample = () => {
    const { width, height } = useWindowSize(); // 커스텀 훅 사용

    return (
        <div style={{ padding: '20px' }}>
            <h1>커스텀 훅 예제: 창 크기 추적</h1>
            <p>
                현재 창 크기: <strong>{width}px</strong> x <strong>{height}px</strong>
            </p>
            <p>창 크기를 조정해보세요!</p>
        </div>
    );
};

export default UseCustomHookExample;
