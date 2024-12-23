import { makeAutoObservable } from 'mobx';

// ToDo 항목 타입 정의
type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

// MobX 스토어 정의
class TodoStore {
    todos: Todo[] = []; // ToDo 리스트 상태

    constructor() {
        makeAutoObservable(this); // 상태와 액션을 MobX에서 관리 가능하도록 설정
    }

    // ToDo 추가
    addTodo(text: string) {
        this.todos.push({ id: Date.now(), text, completed: false });
    }

    // ToDo 완료 상태 토글
    toggleTodo(id: number) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }

    // ToDo 삭제
    deleteTodo(id: number) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
}

export const todoStore = new TodoStore();
