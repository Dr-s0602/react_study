import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import CustomButton from '../../components/CustomButton';
import { calculatorStore } from '../../store/calculatorStore';

const UseCalculator = observer(() => {
    const [expression, setExpression] = useState<string>('0'); // 현재 계산식

    // 숫자 또는 연산자 클릭 핸들러
    const handleClick = (value: string) => {
        if (value === 'C') {
            setExpression('0'); // 초기화
            return;
        }

        if (value === '=') {
            try {
                const result = eval(expression).toString(); // 계산 결과
                setExpression(result);

                // 계산 기록 저장
                calculatorStore.addCalculation(expression, result);
            } catch (error) {
                setExpression('Error');
            }
            return;
        }

        setExpression((prev) => (prev === '0' ? value : prev + value));
    };

    // 버튼 데이터 배열
    const buttons = [
        ['C', '/', '*', '-'],
        ['7', '8', '9', '+'],
        ['4', '5', '6', '='],
        ['1', '2', '3', '0'],
    ];

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
            <h1>계산기</h1>

            {/* 현재 계산식 화면 */}
            <div
                style={{
                    marginBottom: '20px',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    fontSize: '24px',
                    textAlign: 'right',
                }}
            >
                {expression}
            </div>

            {/* 버튼 렌더링 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                {buttons.flat().map((btn, index) => (
                    <CustomButton
                        key={index}
                        label={btn}
                        onClick={() => handleClick(btn)}
                        style={{
                            backgroundColor: btn === '=' ? '#4caf50' : btn === 'C' ? '#f44336' : '#2196f3',
                            color: '#fff',
                        }}
                    />
                ))}
            </div>

            {/* 계산 기록 표시 */}
            <div style={{ marginTop: '20px', textAlign: 'left' }}>
                <h2>계산 기록</h2>
                <ul>
                    {calculatorStore.history.map((calc) => (
                        <li key={calc.id}>
                            {calc.expression} = {calc.result}
                        </li>
                    ))}
                </ul>
                {calculatorStore.history.length > 0 && (
                    <CustomButton
                        label="기록 초기화"
                        onClick={() => calculatorStore.clearHistory()}
                        style={{ backgroundColor: '#e91e63', color: '#fff', marginTop: '10px' }}
                    />
                )}
            </div>
        </div>
    );
});

export default UseCalculator;
