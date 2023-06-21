import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import profilepic from '../assets/images/profilepic.png';

const Home = () => {
	useEffect(() => {
		document.title = 'KW | Home';
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
            <h2 className="previous glitch layers" data-text="KW"><div>KW ►</div></h2>
        </div> */}
			<Navbar
				button=""
				buttonClassName=""
				buttonHref=""
				slash=""
				page="KW"
				pageClassName="currentPage glitch layers"
			/>
			
			<h2>
				<p className='spacing'>
					<span className="personal">HELLO! I'M </span>
					<span className="hiddenTxt">
						<Button button="KUNAL WALAVALKAR" buttonClassName="nonClickable pages" />
					</span>
					<span className="hiddenImg">
						<img src="profilepic" width="250" />
					</span>
					<span className="personal">, A COMPUTER ENGINEERING STUDENT AND CYBERSECURITY ENTHUSIAST</span>
					<span className="personal">.</span>
				</p>
				
				<p className='spacing'>
					<span className="personal">THIS WEBSITE IS A MEANS TO SHOWCASE MY </span>
					<span>
						<Button button="PROJECTS" buttonClassName="clickable pages" buttonHref="/projects" />
					</span>
					<span className="personal"> AS WELL AS MY </span>
					<span>
						<Button
							button="BLOG"
							buttonClassName="clickable pages"
							buttonHref="https://kunalwalavalkar.gitbook.io/writeups/"
							target="_blank"
						/>
					</span>
					<span className="personal">.</span>
				</p>

				<p className='spacing'>
					<span className="personal">FEEL FREE TO FOLLOW MY </span>
					<span>
						<Button button="SOCIALS" buttonClassName="clickable pages" buttonHref="/socials" />
					</span>
					<span className="personal">, OR SEND ME AN </span>
					<span>
						<Button
							button="EMAIL"
							buttonClassName="clickable pages"
							buttonHref="mailto:kunalw2002@gmail.com"
						/>
					</span>
					<span className="personal">.</span>
				</p>
			</h2>
		</>
	);
};

export default Home;
