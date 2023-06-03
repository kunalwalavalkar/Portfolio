import { useEffect } from 'react';
import Navbar from '../components/Navbar';

const NoPage = () => {
	useEffect(() => {
		document.title = 'KW | 404';
	}, []);
	return (
		<>
			<div class="sticky">
				<div className="effect"></div>
				<div className="effectStatic"></div>
				<div className="scanLine"></div>
				<div className="gradient"></div>
				<div className="noise"></div>
			</div>
			<div className="backgroundEffect"></div>

			<Navbar
				button="KW"
				buttonClassName="previousPage clickable glitch layers"
				buttonHref="/"
				slash="&nbsp;/&nbsp;"
				page="404 "
				pageClassName="currentPage"
			/>
		</>
	);
};

export default NoPage;
