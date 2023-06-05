import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const Socials = () => {
	useEffect(() => {
		document.title = 'KW | Socials';
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
				page="SOCIALS"
				pageClassName="currentPage"
			/>

			<p className='spacing'>
				<h2>
					<Button
						button="GITHUB"
						buttonClassName="clickable pages"
						buttonHref="https://github.com/kunalwalavalkar"
						target="_blank"
					/>
				</h2>
				<small className="description">To check out my projects and open source contributions.</small>
			</p>

			<p className='spacing'>
				<h2>
					<Button
						button="TRYHACKME"
						buttonClassName="clickable pages"
						buttonHref="https://tryhackme.com/p/KunalWalavalkar"
						target="_blank"
					/>
				</h2>
				<small className="description">To check out the rooms I've completed.</small>
			</p>
			
			<p className='spacing'>
				<h2>
					<Button
						button="INSTAGRAM"
						buttonClassName="clickable pages"
						buttonHref="https://www.instagram.com/kunalxwalavalkar"
						target="_blank"
					/>
				</h2>
				<small className="description">To see my posts. [I don't have any.]</small>
			</p>
		</>
	);
};

export default Socials;
