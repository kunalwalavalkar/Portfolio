import Button from './Button';
import '../script.js';
import './Navbar.css';
import './Button.css';

const Navbar = ({ button, buttonClassName, buttonHref, slash, page, pageClassName }) => {
	return (
		<h2>
			<div className="navbarDiv">
				<nav>
					<div>
						<Button button={button} buttonClassName={buttonClassName} buttonHref={buttonHref} />
					</div>
					<div class="slash">{slash}</div>
					<div className={pageClassName} data-text={page}>
						{page} ►
					</div>
				</nav>
			</div>	
		</h2>
	);
};

Navbar.defaultProps = {
	title: 'kw',
	list1: '',
	list2: '',
};

export default Navbar;
