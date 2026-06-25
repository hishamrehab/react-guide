import Button from './UI/Button.jsx';
import logoImg from '../assets/logo.jpg'
import { useContext } from 'react';
import CartContext from '../store/CartContext.jsx';


const Header = () => {
  const cartCxt = useContext(CartContext);
  const totalCartItems = cartCxt.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header id="main-header">
        <div id="title">
            <img src={logoImg} alt="A restaurant logo"/>
            <h1>ReactFoodOrder</h1>
        </div>
        <nav>
            <Button textOnly>Cart ({totalCartItems})</Button>
        </nav>
    </header>
  )
}
 
export default Header