import React from 'react';
import { observer } from 'mobx-react-lite';
import { uiStore } from '../store/uiStore';

const AComponent = observer(() => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <h2>A 컴포넌트</h2>
            <button onClick={() => uiStore.toggleVisibility()}>
                {uiStore.isVisible ? '숨기기' : '보이기'}
            </button>
        </div>
    );
});

export default AComponent;
