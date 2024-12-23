import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { todoStore } from '../../store/todoStore';

const UseTodoWithMobx = observer(() => {
    const [input, setInput] = useState('');

    return (
        <div style={{ padding: '20px' }}>
            <h1>ToDo 리스트 (MobX)</h1>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="할 일을 입력하세요"
                />
                <button
                    onClick={() => {
                        todoStore.addTodo(input);
                        setInput('');
                    }}
                >
                    추가
                </button>
            </div>
            <ul>
                {todoStore.todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <span onClick={() => todoStore.toggleTodo(todo.id)}>{todo.text}</span>
                        <button onClick={() => todoStore.deleteTodo(todo.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default UseTodoWithMobx;
