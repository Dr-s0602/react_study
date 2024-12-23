// TypeScript 버전
import React, { useRef } from 'react'; // React에서 useRef 훅을 가져옵니다.

const UseRefExample = () => {
    // useRef 훅을 사용하여 input 요소에 대한 참조를 생성합니다.
    // 초기값은 null이며, 이 참조는 HTMLInputElement 타입을 가집니다.
    const inputRef = useRef<HTMLInputElement | null>(null);

    // input 요소에 포커스를 설정하는 함수입니다.
    const focusInput = () => {
        // 현재 참조된 DOM 요소(inputRef.current)가 null이 아닌 경우, focus() 메서드를 호출하여 포커스를 설정합니다.
        inputRef.current?.focus();
    };

    return (
        <div style={{ padding: '20px' }}>
            {/* 페이지 제목을 표시합니다. */}
            <h1>useRef 예제 (TypeScript)</h1>
            {/* input 요소에 ref 속성을 설정하여 이 요소를 inputRef와 연결합니다. */}
            <input ref={inputRef} placeholder="여기에 입력하세요..." />
            {/* 버튼 클릭 시 focusInput 함수를 호출하여 input 요소에 포커스를 설정합니다. */}
            <button onClick={focusInput}>입력창에 포커스</button>
        </div>
    );
};

export default UseRefExample; // 이 컴포넌트를 기본 내보내기로 설정합니다.
