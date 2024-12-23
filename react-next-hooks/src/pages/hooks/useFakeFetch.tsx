import React, { useEffect, useState } from 'react';

const UseFakeFetch = () => {
    const [data, setData] = useState<string[]>([]); // 가상 데이터
    const [loading, setLoading] = useState<boolean>(true); // 로딩 상태
    const [error, setError] = useState<string | null>(null); // 에러 상태

    // 가상 데이터를 "가져오는" 함수
    const fetchData = () => {
        setLoading(true); // 로딩 시작
        setError(null); // 이전 에러 초기화

        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% 확률로 성공
            if (success) {
                setData(['React', 'MobX', 'TypeScript', 'Next.js', 'Zustand']);
                setLoading(false); // 로딩 종료
            } else {
                setError('데이터를 가져오는 데 실패했습니다.');
                setLoading(false); // 로딩 종료
            }
        }, 1000); // 1초 지연
    };

    // 컴포넌트 마운트 시 데이터 가져오기
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>useEffect 가상 데이터 페칭</h1>

            {loading && <p>데이터를 가져오는 중...</p>} {/* 로딩 상태 */}
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* 에러 메시지 */}
            {data.length > 0 && ( /* 데이터 표시 */
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}

            {/* 다시 가져오기 버튼 */}
            <button
                onClick={fetchData}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#4caf50',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                }}
            >
                다시 가져오기
            </button>
        </div>
    );
};

export default UseFakeFetch;
