import React, { useState, useCallback } from 'react';

const UseCallbackExample = () => {
    const [data, setData] = useState<string[]>([
        'React',
        'MobX',
        'TypeScript',
        'Next.js',
        'Zustand',
    ]);
    const [query, setQuery] = useState<string>(''); // 필터링 입력값

    // 필터링 함수: 입력값에 따라 데이터를 필터링
    const filterData = useCallback(() => {
        return data.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
        );
    }, [data, query]); // 의존성: data와 query

    return (
        <div style={{ padding: '20px' }}>
            <h1>useCallback 데이터 필터링</h1>

            {/* 검색 입력 */}
            <input
                type="text"
                placeholder="검색어 입력"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                    padding: '10px',
                    marginBottom: '20px',
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            />

            {/* 필터링된 데이터 표시 */}
            <ul>
                {filterData().map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {/* 데이터 정렬 버튼 */}
            <button
                onClick={() => setData([...data].sort())}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#2196f3',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                }}
            >
                데이터 정렬
            </button>
        </div>
    );
};

export default UseCallbackExample;
