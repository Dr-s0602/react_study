import { makeAutoObservable } from 'mobx';

// MobX 스토어 정의
class UIStore {
    isVisible: boolean = false; // 상태 초기값: false

    constructor() {
        makeAutoObservable(this); // 상태를 자동 반응형으로 설정
    }

    // 상태를 토글하는 메서드
    toggleVisibility() {
        this.isVisible = !this.isVisible;
    }
}

// UI 스토어 인스턴스 생성
export const uiStore = new UIStore();
