import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';

// 모달 컴포넌트
const Modal = forwardRef((props, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setIsVisible(true),
        close: () => setIsVisible(false),
    }));

    if (!isVisible) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                }}
            >
                <h1>모달 창</h1>
                <button onClick={() => setIsVisible(false)}>닫기</button>
            </div>
        </div>
    );
});

const UseModalExample = () => {
    const modalRef = useRef<{ open: () => void; close: () => void }>(null);

    return (
        <div style={{ padding: '20px' }}>
            <h1>useImperativeHandle 모달 예제</h1>
            <button onClick={() => modalRef.current?.open()}>모달 열기</button>
            <Modal ref={modalRef} />
        </div>
    );
};

export default UseModalExample;
