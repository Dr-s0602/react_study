import React from 'react';
import AComponent from '../../components/AComponent';
import BComponent from '../../components/BComponent';

const UseMobxVisibility = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>MobX 상태 변경 예제</h1>
            <AComponent />
            <BComponent />
        </div>
    );
};

export default UseMobxVisibility;
