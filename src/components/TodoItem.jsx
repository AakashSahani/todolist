import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import TodoContext from './context/TodoContext';

function TodoItem({ id, text }) {
	const { removeTodo } = useContext(TodoContext);
	const handleClick = (e) => {
		removeTodo(e.currentTarget.id);
	};
	return (
		<li className="todoItem">
			{text}{' '}
			<button id={id} onClick={handleClick}>
				<FaTimes size={24} />
			</button>
		</li>
	);
}

export default TodoItem;
