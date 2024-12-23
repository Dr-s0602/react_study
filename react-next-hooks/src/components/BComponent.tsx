import React from 'react';
import { observer } from 'mobx-react-lite';
import { uiStore } from '../store/uiStore';

const BComponent = observer(() => {
    return (
        <div>
            <h2>B 컴포넌트</h2>
            {uiStore.isVisible && (
                <div style={{ padding: '10px', backgroundColor: '#d3f4ff', borderRadius: '5px' }}>
                    <p>이 텍스트는 A 컴포넌트에서 상태를 변경하면 표시됩니다.</p>
                </div>
            )}
        </div>
    );
});

export default BComponent;
