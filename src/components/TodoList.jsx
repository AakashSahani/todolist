import React from 'react';
import TodoItem from './TodoItem';
import { useContext } from 'react';
import TodoContext from './context/TodoContext';

function TodoList() {
	const { todo } = useContext(TodoContext);
	return (
		<ul>
			{todo.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} text={todo.text} />
			))}
		</ul>
	);
}

export default TodoList;
