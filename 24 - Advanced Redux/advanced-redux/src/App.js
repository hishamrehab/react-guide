import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector , useDispatch } from 'react-redux';
import { Fragment ,useEffect , useState } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;


function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible); 
  const cart = useSelector((state) =>state.cart);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);
  

  useEffect(async () => {
    const sendCartData = async() => {
      dispatch(uiActions.showNotification({
        title: 'Sending...',
        message: 'Sending cart data!',
        status: 'pending'
      }));
      
      const response = await fetch('https://react-http-57487-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });
      const responseData = await response.json();

      if(!response.ok){
        dispatch(uiActions.showNotification({
          title: 'Error!',
          message: 'Sending cart data failed!',
          status: 'error'
        }));
      }

      dispatch(uiActions.showNotification({
        title: 'Success!',
        message: 'Sent cart data successfully!',
        status: 'success'
      }));

      console.log(responseData);
    }

    if(isInitial){
      isInitial = false;
      return;
    }

    sendCartData().catch(async () => {
      dispatch(uiActions.showNotification({
        title: 'Error!',
        message: 'Sending cart data failed!',
        status: 'error'
      }));
    });

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
