import Link from 'next/link';

const Home = () => {
    return (
        <div style={{ padding: '20px' }}>
            {/* 페이지 제목을 표시합니다. */}
            <h1>React Hooks 예제</h1>

            {/* 링크 목록 */}
            <ul
                style={{
                    display: 'grid', // Grid 레이아웃 사용
                    gridTemplateColumns: 'repeat(2, 1fr)', // 두 열로 구성
                    gap: '10px', // 아이템 간의 간격
                    listStyleType: 'none', // 리스트 스타일 제거
                    padding: 0,
                }}
            >
                <li>
                    <Link href="/hooks/useStateExample">useState 예제</Link>
                </li>
                <li>
                    <Link href="/hooks/useEffectExample">useEffect 예제</Link>
                </li>
                <li>
                    <Link href="/hooks/useRefExample">useRef 예제</Link>
                </li>
                <li>
                    <Link href="/hooks/tsVsJsExample">TypeScript와 JavaScript 차이</Link>
                </li>
                <li>
                    <Link href="/hooks/useThemeExample">useContext 테마 변경</Link>
                </li>
                <li>
                    <Link href="/hooks/useTodoExample">useReducer ToDo 리스트</Link>
                </li>
                <li>
                    <Link href="/hooks/useModalExample">useImperativeHandle 모달</Link>
                </li>
                <li>
                    <Link href="/hooks/useTodoWithMobx">MobX ToDo 리스트</Link>
                </li>
                <li>
                    <Link href="/hooks/useMobxVisibility">MobX 상태 변경 (A → B)</Link>
                </li>
                <li>
                    <Link href="/hooks/useCustomButtonExample">Custom Button 예제</Link>
                </li>
                <li>
                    <Link href="/hooks/useCalculator">계산기</Link>
                </li>
                <li>
                    <Link href="/hooks/useEffectWithMobx">useEffect와 MobX 상태</Link>
                </li>
                <li>
                    <Link href="/hooks/useFakeFetch">useEffect 데이터 페칭</Link>
                </li>
                <li>
                    <Link href="/hooks/useCallbackExample">useCallback 데이터 필터링</Link>
                </li>
                <li>
                    <Link href="/hooks/useCustomHookExample">커스텀 훅: 창 크기 추적</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
