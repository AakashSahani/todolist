import {
	FaGithubSquare,
	FaTwitterSquare,
	FaInstagramSquare,
} from 'react-icons/fa';

function Footer() {
	return (
		<footer>
			<p>Copyright &copy;2022 All Rights Reserved</p>
			<p id="love">Made with ❤️</p>
			<ul className="socials">
				<li>
					<a href="/">
						<FaGithubSquare size={24} />
					</a>
				</li>
				<li>
					<a href="/">
						<FaTwitterSquare size={24} />
					</a>
				</li>
				<li>
					<a href="/">
						<FaInstagramSquare size={24} />
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
