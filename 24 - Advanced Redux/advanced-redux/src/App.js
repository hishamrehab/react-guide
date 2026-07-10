import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector , useDispatch } from 'react-redux';
import { Fragment ,useEffect  } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cart-slice';

let isInitial = true;


function App() { 
  const showCart = useSelector(state => state.ui.cartIsVisible); 
  const cart = useSelector((state) =>state.cart);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);
  

  useEffect(() => {
      if(isInitial){
        isInitial = false;
        return;
      }
    
      dispatch(sendCartData(cart));
  }, [cartItems , dispatch]);


  return (
  <Fragment>
    {notification && <Notification title={notification.title} message={notification.message} status={notification.status} />}
    <Layout>
          {showCart && <Cart />}
          <Products />
        </Layout>
  </Fragment>
 
  );
}

export default App;
