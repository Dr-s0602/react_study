import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';

const UseCustomButtonExample = () => {
    const [count, setCount] = useState(0);

    // 버튼 데이터를 객체로 관리
    const buttons = [
        {
            label: '증가',
            onClick: () => setCount((prev) => prev + 1),
            style: { backgroundColor: 'green' },
        },
        {
            label: '감소',
            onClick: () => setCount((prev) => prev - 1),
            style: { backgroundColor: 'red' },
        },
        {
            label: '초기화',
            onClick: () => setCount(0),
            style: { backgroundColor: 'orange' },
        },
        {
            label: '비활성화',
            onClick: () => alert('비활성화 상태!'),
            style: { backgroundColor: 'gray' },
            disabled: true,
        },
    ];

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Custom Button 예제</h1>
            <p>현재 카운트: {count}</p>

            {/* 버튼 객체 배열을 맵으로 렌더링 */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
                {buttons.map((button, index) => (
                    <CustomButton
                        key={index}
                        label={button.label}
                        onClick={button.onClick}
                        style={button.style}
                        disabled={button.disabled || false}
                    />
                ))}
            </div>
        </div>
    );
};

export default UseCustomButtonExample;
