import { createContext } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
	const sayHello = () => {
		fetch('../data/TodoData.js')
			.then((res) => res.json)
			.then((data) => console.log(data));
	};
	return (
		<TodoContext.Provider value={{ sayHello }}>{children}</TodoContext.Provider>
	);
};

export default TodoContext;
