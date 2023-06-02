import Button from "./Button"
import "../script.js"
import "./Navbar.css"

const Navbar = ({button, buttonClassName, buttonHref, slash, page, pageClassName}) => {
  return (
    <nav>
        <h2><Button button={button} buttonClassName={buttonClassName} buttonHref={buttonHref}/></h2>
        <h2 class="slash">{slash}</h2>
        <h2 className={pageClassName} data-text={page}><div>{page} ►</div></h2>
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'KW'
}

export default Navbar