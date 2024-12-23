import React from 'react';

// 버튼 타입 정의
interface ButtonProps {
    label: string; // 버튼에 표시할 텍스트
    onClick: () => void; // 클릭 이벤트 핸들러
    style?: React.CSSProperties; // 버튼 스타일 (선택적)
    disabled?: boolean; // 버튼 비활성화 여부 (선택적)
}

const CustomButton: React.FC<ButtonProps> = ({ label, onClick, style, disabled = false }) => {
    return (
        <button
            onClick={onClick}
            style={{
                padding: '10px 20px',
                fontSize: '16px',
                cursor: disabled ? 'not-allowed' : 'pointer',
                backgroundColor: disabled ? '#ccc' : '#007bff',
                color: disabled ? '#666' : '#fff',
                border: 'none',
                borderRadius: '5px',
                ...style, // 전달된 스타일 병합
            }}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default CustomButton;
