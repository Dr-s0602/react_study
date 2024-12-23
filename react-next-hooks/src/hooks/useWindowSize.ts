import { useState, useEffect } from 'react';

// 창 크기를 추적하는 커스텀 훅
export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        // 창 크기가 변경될 때 실행되는 함수
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // 이벤트 리스너 등록
        window.addEventListener('resize', handleResize);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize; // 현재 창 크기 반환
};
