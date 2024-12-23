import { makeAutoObservable } from 'mobx';

// MobX 스토어 정의
class MessageStore {
    message: string = ''; // 메시지 상태

    constructor() {
        makeAutoObservable(this); // 자동 반응성을 활성화
    }

    // 메시지 업데이트
    setMessage(newMessage: string) {
        this.message = newMessage;
    }
}

// 스토어 인스턴스 생성
export const messageStore = new MessageStore();
