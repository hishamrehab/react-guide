import { CartContext } from "../store/shopping-cart-context";
import { useContext } from "react";

export default function Cart() {
   const {items , updatedItemQuantity } = useContext(CartContext);
  
  const totalPrice = cartCtx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
  return (
   <CartContext.Consumer value={ctxValue}>
    {(cartCtx) =>  {
      return (
             <div id="cart">
               {cartCtx.items.length === 0 && <p>No items in cart!</p>}
                {cartCtx.items.length > 0 && (
                  <ul id="cart-items">
                    {items.map((item) => {
                      const formattedPrice = `$${item.price.toFixed(2)}`;

                      return (
                        <li key={item.id}>
                          <div>
                            <span>{item.name}</span>
                            <span> ({formattedPrice})</span>
                          </div>
                          <div className="cart-item-actions">
                            <button onClick={() => updatedItemQuantity(item.id, -1)}>
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updatedItemQuantity(item.id, 1)}>
                              +
                            </button>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
            <p id="cart-total-price">
              Cart Total: <strong>{formattedTotalPrice}</strong>
            </p>
    </div>
      )
    }}
 
   </CartContext.Consumer>
  );
}
