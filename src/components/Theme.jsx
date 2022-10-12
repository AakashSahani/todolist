import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';

function Theme() {
	const [theme, setTheme] = useState(true);
	const handleClick = () => {
		if (theme === true) {
			setTheme(false);
		} else {
			setTheme(true);
		}
		console.log('someone clicked  the theme');
	};
	if (theme) {
		return (
			<>
				<button onClick={handleClick}>
					<FaSun size={24} />
				</button>
			</>
		);
	} else {
		return (
			<>
				<button onClick={handleClick}>
					<FaMoon size={24} />
				</button>
			</>
		);
	}
}

export default Theme;
