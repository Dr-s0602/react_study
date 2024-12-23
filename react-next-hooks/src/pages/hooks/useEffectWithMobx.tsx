import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { messageStore } from '../../store/messageStore';
import CustomButton from '../../components/CustomButton';

const UseEffectWithMobx = observer(() => {
    // 메시지가 변경될 때마다 반응
    useEffect(() => {
        console.log('메시지가 변경되었습니다:', messageStore.message);

        // 추가 로직 수행 가능 (예: API 호출)
        // fetchSomeData(messageStore.message);

        return () => {
            console.log('컴포넌트 언마운트 또는 메시지가 변경될 때 정리 동작');
        };
    }, [messageStore.message]); // 메시지 상태를 의존성으로 추가

    return (
        <div style={{ padding: '20px' }}>
            <h1>useEffect와 MobX 상태</h1>
            <p>현재 메시지: {messageStore.message || '없음'}</p>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                {/* 메시지 변경 버튼 */}
                <CustomButton
                    label="메시지 변경: Hello"
                    onClick={() => messageStore.setMessage('Hello')}
                    style={{ backgroundColor: '#4caf50', color: '#fff' }}
                />
                <CustomButton
                    label="메시지 변경: World"
                    onClick={() => messageStore.setMessage('World')}
                    style={{ backgroundColor: '#2196f3', color: '#fff' }}
                />
                <CustomButton
                    label="메시지 초기화"
                    onClick={() => messageStore.setMessage('')}
                    style={{ backgroundColor: '#f44336', color: '#fff' }}
                />
            </div>
        </div>
    );
});

export default UseEffectWithMobx;
