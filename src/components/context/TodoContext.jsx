import { createContext, useState } from 'react';
import TodoData from '../../data/TodoData';
import { v4 as uuid } from 'uuid';
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
	const [text, setText] = useState('');
	const [todo, setTodo] = useState(TodoData);

	const addTodo = (text) => {
		setText(text);
		const newTodo = { id: uuid(), text: text };
		setTodo((todo) => [...todo, newTodo]);
	};

	const removeTodo = (id) => {
		const rmvId = id;
		console.log(typeof rmvId);
		const newArr = todo.filter((item) => `${item.id}` !== rmvId);
		setTodo(newArr);
	};
	return (
		<TodoContext.Provider value={{ todo, addTodo, removeTodo }}>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoContext;
