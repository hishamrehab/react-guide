import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import { useContext } from "react";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";


export default function Cart() {
   const cartCxt = useContext(CartContext);
   const userProgressCtx = useContext(UserProgressContext);
   const cartTotal = cartCxt.items.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0);

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }
  
  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }
 
    return (
       <Modal 
        className="cart"
        open={userProgressCtx.progress === 'cart'}
        onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
        >
         <h2>Your Cart</h2>
         <ul>
          {cartCxt.items.map((item) =>
         <CartItem 
          key={item.id} 
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCxt.addItem(item)}
            onDecrease={() => cartCxt.removeItem(item.id)}
        />)}
         </ul>
         <p className="cart-total">Total Amount: {currencyFormatter.format(cartTotal)}</p>
         <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart}>Close</Button>
            {cartCxt.items.length > 0 && <Button onClick={handleGoToCheckout}>Go To Checkout</Button> }  
         </p>
       </Modal>
    )
}