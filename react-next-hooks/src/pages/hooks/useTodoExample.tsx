import React, { useReducer, useState } from 'react';

// 상태와 액션 정의
type Todo = { id: number; text: string; completed: boolean };
type Action =
    | { type: 'ADD'; text: string }
    | { type: 'DELETE'; id: number }
    | { type: 'TOGGLE'; id: number };

// 리듀서 함수 정의
const todoReducer = (state: Todo[], action: Action): Todo[] => {
    switch (action.type) {
        case 'ADD':
            return [...state, { id: Date.now(), text: action.text, completed: false }];
        case 'DELETE':
            return state.filter((todo) => todo.id !== action.id);
        case 'TOGGLE':
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return state;
    }
};

const UseTodoExample = () => {
    const [state, dispatch] = useReducer(todoReducer, []);
    const [input, setInput] = useState('');

    return (
        <div style={{ padding: '20px' }}>
            <h1>ToDo 리스트</h1>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="할 일을 입력하세요"
                />
                <button onClick={() => dispatch({ type: 'ADD', text: input })}>추가</button>
            </div>
            <ul>
                {state.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <span onClick={() => dispatch({ type: 'TOGGLE', id: todo.id })}>{todo.text}</span>
                        <button onClick={() => dispatch({ type: 'DELETE', id: todo.id })}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UseTodoExample;
