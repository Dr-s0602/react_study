import { makeAutoObservable } from 'mobx';

// 계산 기록 타입 정의
type Calculation = {
    id: number; // 고유 ID
    expression: string; // 계산식
    result: string; // 결과값
};

// MobX 스토어 정의
class CalculatorStore {
    history: Calculation[] = []; // 계산 기록 배열

    constructor() {
        makeAutoObservable(this); // MobX 상태 관리 활성화
    }

    // 계산 기록 추가
    addCalculation(expression: string, result: string) {
        this.history.push({
            id: Date.now(), // 고유 ID로 현재 시간을 사용
            expression,
            result,
        });
    }

    // 특정 기록 가져오기
    getCalculationById(id: number): Calculation | undefined {
        return this.history.find((calc) => calc.id === id);
    }

    // 전체 기록 삭제
    clearHistory() {
        this.history = [];
    }
}

// CalculatorStore의 인스턴스 생성
export const calculatorStore = new CalculatorStore();
