import Navbar from "../components/Navbar";
import { Helmet } from 'react-helmet';

const NoPage = () => {
  return (
      <>
        <Helmet>
            <title>KW | 404</title>
        </Helmet>
        <div class="sticky">
            <div className="effect"></div>
            <div className="effectStatic"></div>
            <div className="scanLine"></div>
            <div className="gradient"></div>
            <div className="noise"></div>
        </div>
        <div className="backgroundEffect"></div>

        <Navbar button='KW' buttonClassName='previousPage clickable glitch layers' buttonHref='/' slash='&nbsp;/&nbsp;' page='404 ' pageClassName='currentPage'/>
      </>
  )
}

export default NoPage