import React, { createContext, useContext, useState, useEffect } from 'react';

// 테마 컨텍스트 생성
const ThemeContext = createContext({
    theme: 'light', // 초기값
    toggleTheme: () => {}, // 테마 변경 함수 (더미 함수)
});

// 테마 컨텍스트 제공 컴포넌트
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    // 테마 변경 시 `body`의 클래스 업데이트
    useEffect(() => {
        document.body.className = ''; // 기존 클래스 제거
        document.body.classList.add(theme); // 현재 테마 클래스 추가
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// 테마를 사용하는 컴포넌트
const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>현재 테마: {theme === 'light' ? '라이트 모드' : '다크 모드'}</h1>
            <button onClick={toggleTheme}>
                {theme === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}
            </button>
        </div>
    );
};

const UseThemeExample = () => {
    return (
        <ThemeProvider>
            <ThemeToggle />
        </ThemeProvider>
    );
};

export default UseThemeExample;
