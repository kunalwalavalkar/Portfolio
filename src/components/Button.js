import './Button.css'

const Button = ({ button, buttonClassName, buttonHref, target }) => {
  return (
    <>
        <a className={buttonClassName} href={buttonHref} target={target}>{button}</a>
    </>
  )
}

Button.defaultProps = {
    buttonClassName: 'clickable',
    target: ''
}

export default Button