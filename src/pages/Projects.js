import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const Projects = () => {
	useEffect(() => {
		document.title = 'KW | Projects';
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
			{/* <div className="navbarContainer">
            <h2 className="previous glitch layers" data-text="KW"><a class="clickable" href="/">KW</a></h2>
            <h2 className="slash">&nbsp;/&nbsp;</h2>
            <h2 className="current">PROJECTS ►</h2>
        </div> */}
			<Navbar
				button="KW"
				buttonClassName="previousPage clickable glitch layers"
				buttonHref="/"
				slash="&nbsp;/&nbsp;"
				page="PROJECTS"
				pageClassName="currentPage"
			/>

			<p>
				<h2>
					<Button
						button="RISK CALCULATOR"
						buttonClassName="clickable pages"
						buttonHref="https://github.com/kunalwalavalkar"
						target="_blank"
					/>
				</h2>
				<span className="description">Risk calculator inspired by OWASP.</span>
			</p>

			<br></br>
			<br></br>
			<br></br>
			<br></br>
			
			<div className="spacing">
				<h2>
					<Button
						button="SIGNUM"
						buttonClassName="clickable pages"
						buttonHref="https://github.com/kunalwalavalkar"
						target="_blank"
					/>
				</h2>
				<span className="description">Generate and strength check your passwords.</span>
			</div>
		</>
	);
};

export default Projects;
