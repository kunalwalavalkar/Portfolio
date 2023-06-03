import './Button.css'
import "./Navbar.css"

const Button = ({ button, buttonClassName, buttonHref, target }) => {
  return (
    <>
      <a className={buttonClassName} href={buttonHref} target={target} data-text={button}>{button}</a>
    </>
  )
}

Button.defaultProps = {
    target: ''
}

export default Button