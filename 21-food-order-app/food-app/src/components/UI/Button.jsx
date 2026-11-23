 
const Button = ({ children, textOnly, className, type, ...props }) => {
  let cssClass = textOnly ? "text-button" : "button";
  if (className) {
    cssClass += " " + className;
  }


  return (
    <button className={cssClass} type={type} {...props}>{children}</button>
  )
}

export default Button