import { FaTimes } from 'react-icons/fa';

function TodoItem({ text }) {
	return (
		<li className="todoItem">
			{text}{' '}
			<button>
				<FaTimes size={24} />
			</button>
		</li>
	);
}

export default TodoItem;
