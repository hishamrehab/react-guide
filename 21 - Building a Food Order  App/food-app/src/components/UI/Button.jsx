 
const Button = ({ children , textOnly , className , type , ...props }) => {
  const cssClass = textOnly ? 'text-button' : "button";
  cssClass += ' ' + className;


  return (
    <button className={cssClass} type={type} {...props}>{children}</button>
  )
}

export default Button