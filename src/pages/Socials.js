import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { Helmet } from 'react-helmet';

const Socials = () => {
  return (
    <>
    <Helmet>
        <title>KW | Socials</title>
    </Helmet>
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
    <Navbar button='KW' buttonClassName='previousPage clickable glitch layers' buttonHref='/' slash='&nbsp;/&nbsp;' page='SOCIALS' pageClassName='currentPage'/>

    <div className="spacing">
        <h2><Button button='GITHUB' buttonClassName='clickable pages' buttonHref='https://github.com/kunalwalavalkar' target='_blank'/></h2>
        <span className="description">To check out my projects and open source contributions.</span>
    </div>
    <br></br>
    <div className="spacing">
        <h2><Button button='TRYHACKME' buttonClassName='clickable pages' buttonHref='https://tryhackme.com/p/KunalWalavalkar' target='_blank'/></h2>
        <span className="description">To check out the rooms I've completed.</span>
    </div>
    <br></br>
    <div className="spacing">
        <h2><Button button='INSTAGRAM' buttonClassName='clickable pages' buttonHref='https://www.instagram.com/kunalxwalavalkar' target='_blank'/></h2>
        <span className="description">To see my posts. [I don't have any.]</span>
    </div>
</>
  )
}

export default Socials